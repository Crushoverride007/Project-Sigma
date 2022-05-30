// Sigma Portal

/** 
  All of the routes for the Sigma React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Sigma React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Projects",
    key: "projects",
    icon: <Icon fontSize="small">account_tree_rounded</Icon>,
    route: "/projects",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Tasks",
    key: "tasks",
    icon: <Icon fontSize="small">assignment_rounded</Icon>,
    route: "/tasks",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Assessements",
    key: "assessements",
    icon: <Icon fontSize="small">folder</Icon>,
    route: "/assessements",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Files",
    key: "files",
    icon: <Icon fontSize="small">attach_file_rounded</Icon>,
    route: "/files",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Consulting & Innovation",
    key: "consulting&innovation",
    icon: <Icon fontSize="small">construction</Icon>,
    route: "/consulting&innovation",
    component: <Tables />,
  },

  {
    type: "collapse",
    name: "Solutions & Products",
    key: "solution&products",
    icon: <Icon fontSize="small">emoji_objects</Icon>,
    route: "/solution&products",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Infrastructure & Operations",
    key: "infrastructure&operations",
    icon: <Icon fontSize="small">storage_rounded</Icon>,
    route: "/infrastructure&operations",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Audit & Assurance",
    key: "audit&assurance",
    icon: <Icon fontSize="small">assured_workload_rounded</Icon>,
    route: "/audit&assurance",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Industries & Frameworks",
    key: "industries&frameworks",
    icon: <Icon fontSize="small">factory_rounded</Icon>,
    route: "/industries&frameworks",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Blog",
    key: "blog",
    icon: <Icon fontSize="small">book_rounded</Icon>,
    route: "/blog",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "RTL",
    key: "rtl",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/rtl",
    component: <RTL />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
