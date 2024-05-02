import UserDashboard from "../components/Dashboard/User/UserDashboard";
import TrackOrders from "../pages/trackOrders/trackOrders";
import ShowOrder from "../pages/userOrderManagement/ShowOrder";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },

  {
    name: "Show Orders",
    path: "show-user-orders",
    element: <ShowOrder />,
  },
  {
    name: "Track Order",
    path: "track-orders",
    element: <TrackOrders />,
  },
];
