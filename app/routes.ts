import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { ROUTES } from "./pathnamevariables";

export default [
  index("routes/home.tsx"),
  route(ROUTES.LOGIN, "routes/login.tsx"),
  route(ROUTES.REGISTER, "routes/register.tsx"),
  layout("layouts/auth.tsx", [
    route(ROUTES.BOOKS, "routes/books.tsx")
  ]),
] satisfies RouteConfig;
