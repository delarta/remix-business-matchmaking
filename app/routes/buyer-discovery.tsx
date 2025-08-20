import type { Route } from "./+types/home";
import { DiscoverBuyer } from "~/components/discover-buyer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Discover() {
  return <DiscoverBuyer />;
}
