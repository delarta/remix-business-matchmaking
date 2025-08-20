import { Container } from "~/components/ui/container";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import {
  ArrowLeft,
  Shield,
  User,
  MessageCircle,
  Users,
  Bell,
  Heart,
} from "lucide-react";

interface BuyerProfileData {
  id: string;
  name: string;
  location: string;
  status: string;
  lastUpdated: string;
  image?: string;
  verified: boolean;
  revenue: string;
  ebitda: string;
  geography: string;
  dealSize: string;
  interests: string[];
  background: string;
  verifiedFunds: {
    verified: boolean;
    verifiedDate: string;
  };
  fitScore: number;
}

const mockBuyerData: BuyerProfileData = {
  id: "1",
  name: "Dan Morse",
  location: "Nationwide",
  status: "Actively buying",
  lastUpdated: "1d ago",
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
};

interface BuyerProfileProps {
  buyerId?: string;
  buyer: BuyerProfileData;
  onBack?: () => void;
  onReject?: () => void;
  onAccept?: () => void;
}

export function BuyerProfile({
  onBack,
  buyer,
  onReject,
  onAccept,
}: BuyerProfileProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-white border-b border-gray-200 pt-12 pb-4">
        <Container size="full">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-lg font-semibold">Buyer Profile</h1>
            <div className="w-9" /> {/* Spacer for centering */}
          </div>
        </Container>
      </div>

      
      <div className="bg-white px-6 py-6 text-center">
        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
          <User className="w-10 h-10 text-gray-500" />
          {buyer.image && <img src={buyer.image} alt={buyer.name} />}
        </div>

        <div className="flex items-center justify-center gap-2 mb-2">
          <h2 className="text-xl font-bold text-gray-900">{buyer.name}</h2>
          {buyer.verified && (
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-1">
          {buyer.status}, {buyer.location}
        </p>
        <p className="text-gray-500 text-sm">
          Last updated {buyer.lastUpdated}
        </p>
      </div>

     
      <div className="flex-1 px-6 py-4 space-y-6">
    
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Acquisition Criteria
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Revenue</p>
              <p className="font-semibold text-gray-900">{buyer.revenue}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">EBITDA</p>
              <p className="font-semibold text-gray-900">{buyer.ebitda}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Geography</p>
              <p className="font-semibold text-gray-900">{buyer.geography}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Deal Size</p>
              <p className="font-semibold text-gray-900">{buyer.dealSize}</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">Interested in:</p>
            <div className="flex flex-wrap gap-2">
              {buyer.interests.map((interest) => (
                <Badge key={interest} variant="secondary" className="text-sm">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Background
          </h3>
          <p className="text-gray-700 leading-relaxed">{buyer.background}</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Proof of Funds
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Verified Funds</p>
              <p className="text-sm text-gray-500">
                Verified on {buyer.verifiedFunds.verifiedDate}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Fit Score
          </h3>
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">You are</span>
              <span className="font-bold text-lg text-gray-900">
                {buyer.fitScore}% match!
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${buyer.fitScore}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-200 p-6">
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1 py-3 text-gray-700 border-gray-300"
            onClick={onReject}
          >
            Reject
          </Button>
          <Button
            className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white"
            onClick={onAccept}
          >
            Accept
          </Button>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white">
        <div className="flex justify-around py-3">
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <Heart className="w-5 h-5" />
            <span className="text-xs">Discover</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs">Chat</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <Users className="w-5 h-5" />
            <span className="text-xs">Matches</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <Bell className="w-5 h-5" />
            <span className="text-xs">Notification</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <User className="w-5 h-5" />
            <span className="text-xs">Profile</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
