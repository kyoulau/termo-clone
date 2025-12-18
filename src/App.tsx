import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { ErrorPage } from "./pages/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
])

export { router }