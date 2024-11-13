import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import AllProducts from "./Pages/AllProducts";
import ProuductsContextProvider from "./Contexts/ProuductsContext";
import NotFound from "./Pages/NotFound";

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
