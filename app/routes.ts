import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),
  route("buyer-questionaries1", "routes/buyer-questionaries1.tsx"),
  route("buyer-questionaries2", "routes/buyer-questionaries2.tsx"),
  route("buyer-questionaries3", "routes/buyer-questionaries3.tsx"),
  route("buyer-questionaries4", "routes/buyer-questionaries4.tsx"),
  route("buyer-questionaries5", "routes/buyer-questionaries5.tsx"),
  route("discover", "routes/buyer-discovery.tsx"),
  route("buyer/:id", "routes/buyer.$id.tsx"),
  route("match-success", "routes/match-success.tsx"),
  route("dashboard", "routes/dashboard.tsx"),
  route("signup", "routes/signup.tsx"),
  route("seller-questionaries1", "routes/seller-questionaries1.tsx"),
  route("seller-questionaries2", "routes/seller-questionaries2.tsx"),
  route("seller-questionaries3", "routes/seller-questionaries3.tsx"),
  route("seller-questionaries4", "routes/seller-questionaries4.tsx"),
  route("seller-questionaries5", "routes/seller-questionaries5.tsx"),
  route("signup-seller", "routes/signup-seller.tsx"),
] satisfies RouteConfig;
