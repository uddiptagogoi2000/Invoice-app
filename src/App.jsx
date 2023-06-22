import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Homepage from "./pages/Homepage";
import InvoicePage from "./pages/InvoicePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/invoice/:id", element: <InvoicePage /> },
      { path: "/", element: <Homepage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
