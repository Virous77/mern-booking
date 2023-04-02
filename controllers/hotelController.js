import Hotel from "../models/Hotel.js";
import { createError, randomProperty, others } from "../utils/utility.js";
import PropertiesType from "../models/PropertiesType.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  const propertyImage = randomProperty.find(
    (data) => data.name === req.body.type
  );
  const newProperty = new PropertiesType({
    name: req.body.type,
    count: 1,
    image: (propertyImage && propertyImage.link) || others,
  });

  try {
    const alreadyHave = await PropertiesType.find({ name: req.body.type });
    if (alreadyHave.length === 0) {
      await newProperty.save();
    } else {
      await PropertiesType.findByIdAndUpdate(alreadyHave[0]._id, {
        $set: { count: alreadyHave[0].count + 1 },
      });
    }
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Successfully deleted!" });
  } catch (error) {
    next(error);
  }
};

export const getSingleHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

export const getHotels = async (req, res, next) => {
  const { min, max, limit, ...others } = req.query;
  const hotels = await Hotel.find({
    ...others,
    $or: [
      { cheapestPrice: { $gt: min || 1 } },
      { cheapestPrice: { $lt: max || 1000 } },
    ],
  }).limit(limit);

  // const { min, max, ...others } = req.query;
  // try {
  //   const hotels = await Hotel.find({
  //     ...others,
  //     cheapestPrice: { $gt: min || 1, $lt: max || 1000 },
  //   }).limit(req.query.limit);
  res.status(200).json(hotels);
  // } catch (error) {
  //   next(error);
  // }
};

export const getByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");

  try {
    const cityList = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(cityList);
  } catch (error) {
    next(error);
  }
};

export const getByType = async (req, res, next) => {
  try {
    const data = await PropertiesType.aggregate([{ $sample: { size: 5 } }]);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
