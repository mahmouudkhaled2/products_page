import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import ProuductsContextProvider from "./Contexts/ProuductsContext";
import NotFound from "./Pages/NotFound";
import AllProducts from "./Pages/AllProducts";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <AllProducts /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <ProuductsContextProvider>
      <RouterProvider router={routes}></RouterProvider>
    </ProuductsContextProvider>
  );
}

export default App;
