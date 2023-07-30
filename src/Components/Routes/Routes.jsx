import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import MySkills from "../Pages/MySkills/MySkills";
import MyServices from "../Pages/MyServices/MyServices";
import MyProject from "../Pages/MyProject/MyProject";
import MyBlog from "../Pages/MyBlog/MyBlog";
import MyContact from "../Pages/MyContact/MyContact";
import ErrorRoutes from "../Pages/ErrorRoutes/ErrorRoutes";
import PrivayPolicy from "../Pages/PrivacyPolicy/PrivayPolicy";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/skills",
        element: <MySkills />,
      },
      {
        path: "/services",
        element: <MyServices />,
      },
      {
        path: "/projects",
        element: <MyProject />,
      },
      {
        path: "/blogs",
        element: <MyBlog />,
      },
      {
        path: "/contact",
        element: <MyContact />,
      },
      {
        path: "/PrivacyPoliciy",
        element: <PrivayPolicy />,
      },
      {
        path: "/TermsConditions",
        element: <TermsConditions />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorRoutes />,
  },
]);

export default router;
