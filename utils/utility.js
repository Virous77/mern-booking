export const createError = ({ status, message }) => {
  const err = new Error();
  (err.status = status), (err.message = message);

  return err;
};

export const typeImage = [
  `https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80`,
  `https://images.unsplash.com/photo-1475087542963-13ab5e611954?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80`,
  `https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80`,
  `https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`,
  `https://images.unsplash.com/photo-1593693401060-9fc28cf9e368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80`,
  `https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2604&q=80`,
  `https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80`,
  `https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80`,
  `https://images.unsplash.com/photo-1575415868394-e3b78f3e9b3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2599&q=80`,
];

export const randomProperty = [
  {
    name: "hotel",
    link: typeImage[0],
  },
  {
    name: "cabin",
    link: typeImage[1],
  },
  {
    name: "home",
    link: typeImage[2],
  },
  {
    name: "castle",
    link: typeImage[3],
  },
  {
    name: "house-boat",
    link: typeImage[4],
  },
  {
    name: "tent",
    link: typeImage[5],
  },
  {
    name: "apartment",
    link: typeImage[6],
  },
  {
    name: "farm",
    link: typeImage[7],
  },
  {
    name: "yurt",
    link: typeImage[8],
  },
];

export const others = `https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80`;
