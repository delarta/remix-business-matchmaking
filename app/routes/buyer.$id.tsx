import { BuyerProfile } from "~/components/buyer-profile";
import type { Route } from "./+types/buyer.$id";
import { useNavigate, useParams } from "react-router";
import User1Image from "~/assets/Dan.jpg";
import User2Image from "~/assets/Maria.jpg";
import User3Image from "~/assets/Mio.jpg";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Buyer Profile - Business Matchmaking" },
    {
      name: "description",
      content: "View detailed buyer profile and acquisition criteria",
    },
  ];
};

const mockBuyerData = {
  "1": {
    id: "1",
    name: "Dan Morse",
    location: "Nationwide",
    status: "Actively buying",
    lastUpdated: "1d ago",
    image: User1Image,
    verified: true,
    revenue: "$1M - $5M",
    ebitda: "$300K - $3M",
    geography: "North America",
    dealSize: "$100K - $2M",
    interests: ["Technology", "Consumer Goods", "Health Care", "E-commerce"],
    background:
      "Dan is a seasoned entrepreneur with a background in technology and a passion for acquiring and scaling businesses. He has a proven track record of successful acquisitions and is actively seeking new opportunities in the technology sector.",
    verifiedFunds: {
      verified: true,
      verifiedDate: "2 August 2024",
    },
    fitScore: 85,
  },
  "2": {
    id: "2",
    name: "Maria Murray",
    location: "California",
    image: User2Image,
    status: "Actively buying",
    lastUpdated: "3h ago",
    verified: true,
    revenue: "$2M - $10M",
    ebitda: "$500K - $5M",
    geography: "West Coast",
    dealSize: "$500K - $5M",
    interests: ["E-commerce", "SaaS", "Technology"],
    background:
      "Sarah is a former tech executive turned serial acquirer. She specializes in scaling digital businesses and has successfully acquired and grown multiple SaaS companies over the past decade.",
    verifiedFunds: {
      verified: true,
      verifiedDate: "15 July 2024",
    },
    fitScore: 92,
  },
  "3": {
    id: "3",
    name: "Mio Jane",
    location: "Texas",
    image: User3Image,
    status: "Actively buying",
    lastUpdated: "2d ago",
    verified: false,
    revenue: "$500K - $2M",
    ebitda: "$100K - $500K",
    geography: "Southwest US",
    dealSize: "$50K - $500K",
    interests: ["Real Estate", "Construction", "Manufacturing"],
    background:
      "Mike is a real estate investor expanding into business acquisitions. He focuses on traditional industries with strong cash flow and is particularly interested in businesses that complement his existing real estate portfolio.",
    verifiedFunds: {
      verified: false,
      verifiedDate: "",
    },
    fitScore: 67,
  },
};

export default function BuyerDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const buyer = mockBuyerData[id as keyof typeof mockBuyerData];

  if (!buyer) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">Oops!</h1>
          <p className="text-neutral-600 mb-6">
            The buyer you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    navigate(-1);
  };

  const handleReject = () => {
    console.log(`Rejected buyer: ${buyer.name}`);

    navigate(-1);
  };

  const handleAccept = () => {
    console.log(`Accepted buyer: ${buyer.name}`);

    navigate("/matches");
  };

  return (
    <BuyerProfile
      buyerId={buyer.id}
      buyer={buyer}
      onBack={handleBack}
      onReject={handleReject}
      onAccept={handleAccept}
    />
  );
}

export function ErrorBoundary() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-neutral-900 mb-4">Oops!</h1>
        <p className="text-neutral-600 mb-6">
          We couldn't find the buyer profile you're looking for.
        </p>
        <button
          onClick={() => window.history.back()}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
