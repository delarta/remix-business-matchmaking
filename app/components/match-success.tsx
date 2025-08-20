import * as React from "react";
import { useState, useEffect } from "react";
import { Container } from "~/components/ui/container";
import { Button } from "~/components/ui/button";
import { User } from "lucide-react";
import User1Image from "~/assets/Dan.jpg";
import User2Image from "~/assets/Maria.jpg";

interface MatchUser {
  id: string;
  name: string;
  image?: string;
  role: "buyer" | "seller";
}

interface MatchSuccessProps {
  buyer: MatchUser;
  seller: MatchUser;
  onGoToDashboard?: () => void;
  onDiscoverMore?: () => void;
}

function HandshakeIcon({ className }: { className?: string }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`text-6xl ${className} ${isAnimating ? "animate-bounce" : ""}`}
    >
      🤝
    </div>
  );
}

// Profile card component
function ProfileCard({ user, isLeft }: { user: MatchUser; isLeft: boolean }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const delay = isLeft ? 800 : 1000;
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [isLeft]);

  return (
    <div
      className={`
        bg-white rounded-2xl shadow-lg overflow-hidden w-40 h-52 transform transition-all duration-700 ease-out
        ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"}
        ${isLeft ? "rotate-[-8deg]" : "rotate-[8deg]"}
      `}
    >
      <div className="h-36 bg-gradient-to-br from-neutral-200 to-neutral-300 relative overflow-hidden">
        {user.image ? (
          <img
            src={user.image}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-neutral-300">
            <User className="w-12 h-12 text-neutral-500" />
          </div>
        )}
      </div>

      {/* Name */}
      <div className="p-3 text-center">
        <h3 className="font-bold text-lg text-neutral-900 truncate">
          {user.name}
          {user.role === "seller" && " (You)"}
        </h3>
      </div>
    </div>
  );
}

export function MatchSuccess({
  buyer,
  seller,
  onGoToDashboard,
  onDiscoverMore,
}: MatchSuccessProps) {
  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  console.log("97", { buyer, seller });

  useEffect(() => {
    // Stagger the text animations
    const titleTimer = setTimeout(() => setShowTitle(true), 200);
    const descTimer = setTimeout(() => setShowDescription(true), 1500);
    const buttonTimer = setTimeout(() => setShowButtons(true), 2000);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(descTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col">
      {/* Status Bar Spacer */}
      <div className="pt-12" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h1
            className={`
              text-4xl font-bold mb-8 transform transition-all duration-700 ease-out
              ${showTitle ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
            `}
          >
            You're a match!
          </h1>

          {/* Handshake Icon */}
          <HandshakeIcon className="mb-8" />
        </div>

        {/* Profile Cards */}
        <div className="flex items-center justify-center gap-8 mb-12 relative">
          {/* Seller Card (Left) */}
          <ProfileCard user={seller} isLeft={true} />

          {/* Buyer Card (Right) */}
          <ProfileCard user={buyer} isLeft={false} />
        </div>

        {/* Description */}
        <div
          className={`
            text-center mb-12 transform transition-all duration-700 ease-out
            ${showDescription ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}
        >
          <p className="text-lg text-neutral-300 leading-relaxed max-w-sm">
            Now you can start a chat to discuss the deal even further!
          </p>
        </div>

        <div
          className={`
            w-full max-w-sm space-y-4 transform transition-all duration-700 ease-out h-1/4
            ${showButtons ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
          `}
        >
          <Button
            onClick={onGoToDashboard}
            className="flex-1 text-white font-medium h-12 rounded-lg w-full"
          >
            Go to Deal Dashboard
          </Button>

          <Button
            onClick={onDiscoverMore}
            variant="outline"
            className="flex-1 text-neutral-700 font-medium h-12 rounded-lg w-full"
          >
            Discover More
          </Button>
        </div>
      </div>
    </div>
  );
}

// Default export with mock data for testing
export default function MatchSuccessPage() {
  const mockBuyer: MatchUser = {
    id: "1",
    name: "Maria",
    role: "buyer",
    image: User2Image,
  };

  const mockSeller: MatchUser = {
    id: "2",
    name: "Jake",
    role: "seller",
    image: User1Image,
  };

  const handleGoToDashboard = () => {
    console.log("Navigate to deal dashboard");
    // In a real app: navigate("/dashboard")
  };

  const handleDiscoverMore = () => {
    console.log("Navigate to discover more");
    // In a real app: navigate("/discover")
  };

  return (
    <MatchSuccess
      buyer={mockBuyer}
      seller={mockSeller}
      onGoToDashboard={handleGoToDashboard}
      onDiscoverMore={handleDiscoverMore}
    />
  );
}
