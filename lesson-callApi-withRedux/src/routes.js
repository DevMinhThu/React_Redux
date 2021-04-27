import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/product-list",
    exact: false,
    main: () => <ProductListPage />,
  },
  {
    path: "/product/add",
    exact: false,
    main: ({ history }) => <ProductActionPage history={history} />,
  },
  {
    path: "/product/:id/edit",
    exact: false,
    // match la lay tk id
    main: ({ match, history }) => (
      <ProductActionPage match={match} history={history} />
    ),
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
