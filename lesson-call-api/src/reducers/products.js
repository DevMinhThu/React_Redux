const initialState = [
  {
    id: 1,
    name: "Iphone",
    price: 1000,
    status: true,
  },
  {
    id: 2,
    name: "Samsung X",
    price: 500,
    status: false,
  },
  {
    id: 3,
    name: "Nokia",
    price: 600,
    status: true,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
