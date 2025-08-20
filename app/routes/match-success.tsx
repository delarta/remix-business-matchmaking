import { useNavigate } from "react-router";
import { MatchSuccess } from "~/components/match-success";
import type { Route } from "./+types/match-success";
import User1Image from "~/assets/Dan.jpg";
import User2Image from "~/assets/Maria.jpg";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Match Success - Business Matchmaking" },
    {
      name: "description",
      content: "You've found a match! Start discussing your business deal.",
    },
  ];
};

interface MatchUser {
  id: string;
  name: string;
  image?: string;
  role: "buyer" | "seller";
}

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const buyerId = url.searchParams.get("buyerId");
  const sellerId = url.searchParams.get("sellerId");


  const mockBuyer: MatchUser = {
    id: buyerId || "1",
    name: "Maria",
    role: "buyer",
    image: User2Image,
  };

  const mockSeller: MatchUser = {
    id: sellerId || "2",
    name: "Jake",
    role: "seller",
    image: User1Image,
  };

  return { buyer: mockBuyer, seller: mockSeller };
}

export default function MatchSuccessRoute({
  loaderData,
}: Route.ComponentProps) {
  const { buyer, seller } = loaderData;
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    // Navigate to deal dashboard with match information
    navigate(`/dashboard?matchId=${buyer.id}-${seller.id}`);
  };

  const handleDiscoverMore = () => {
    // Navigate back to discover page
    navigate("/discover");
  };

  return (
    <MatchSuccess
      buyer={buyer}
      seller={seller}
      onGoToDashboard={handleGoToDashboard}
      onDiscoverMore={handleDiscoverMore}
    />
  );
}
