import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root.tsx";
import { Products } from "./pages/Products.tsx";
import { Product } from "./pages/Product.tsx";
import { Home } from "./pages/Home.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "products/:productId", element: <Product /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
