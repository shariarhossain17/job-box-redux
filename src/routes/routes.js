import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import AddJobs from "../pages/employeedashboard/AddJobs";
import Home from "../pages/home/Home";
import JobDetails from "../pages/JobDetails";
import Jobs from "../pages/Jobs";
import Login from "../pages/Login";
import AccountCreator from "../pages/register/AccountCreator";
import Signup from "../pages/Signup";
import PrivateRoute from "../utils/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/job-details",
        element: <JobDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/register",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
      {
        path: "/register/:type",
        element: (
          <PrivateRoute>
            <AccountCreator />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "add-job",
        element: <AddJobs />,
      },
    ],
  },
]);

export default routes;
