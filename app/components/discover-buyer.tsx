import * as React from "react";
import { useState, useRef } from "react";
import { Container } from "~/components/ui/container";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Heart, X, Bookmark } from "lucide-react";
import { Navigate, useNavigate } from "react-router";
import User1Image from "~/assets/Dan.jpg";
import User2Image from "~/assets/Maria.jpg";
import User3Image from "~/assets/Mio.jpg";
import { BottomNavigation } from "./ui/bottom-navigation";

interface BuyerProfile {
  id: string;
  name: string;
  location: string;
  budget: string;
  image: string;
  industries: string[];
  verified?: boolean;
}

const mockBuyers: BuyerProfile[] = [
  {
    id: "1",
    name: "Dan Morse",
    location: "Nationwide",
    budget: "$100K - $2M",
    image: User1Image,
    industries: ["Technology", "Health Care"],
    verified: true,
  },
  {
    id: "2",
    name: "Maria Murray",
    location: "California",
    budget: "$500K - $5M",
    image: User2Image,
    industries: ["E-commerce", "SaaS"],
    verified: true,
  },
  {
    id: "3",
    name: "Mio Jane",
    location: "Texas",
    budget: "$50K - $500K",
    image: User3Image,
    industries: ["Real Estate", "Construction"],
    verified: false,
  },
];

interface SwipeableCardProps {
  buyer: BuyerProfile;
  onSwipe: (direction: "left" | "right") => void;
  isTop: boolean;
}

function SwipeableCard({ buyer, onSwipe, isTop }: SwipeableCardProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const startPos = useRef({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    console.log(startPos.current, { clientX, clientY });

    setIsDragging(true);
    startPos.current = { x: clientX, y: clientY };
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    e.stopPropagation();

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

    const deltaX = clientX - startPos.current.x;
    const deltaY = clientY - startPos.current.y;

    setDragOffset({ x: deltaX, y: deltaY });
    setRotation(deltaX * 0.1);
  };

  const handleEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) {
      return;
    }

    if (dragOffset.x === 0 && dragOffset.y === 0) {
      navigate(`/buyer/${buyer.id}`);
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    const threshold = 100;
    if (Math.abs(dragOffset.x) > threshold) {
      onSwipe(dragOffset.x > 0 ? "right" : "left");
    }

    setIsDragging(false);
    setDragOffset({ x: 0, y: 0 });
    setRotation(0);
  };

  React.useEffect(() => {
    if (!isDragging) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const deltaX = e.clientX - startPos.current.x;
      const deltaY = e.clientY - startPos.current.y;
      setDragOffset({ x: deltaX, y: deltaY });
      setRotation(deltaX * 0.1);
    };

    const handleGlobalMouseUp = (e: MouseEvent) => {
      e.preventDefault();
      const threshold = 100;
      if (Math.abs(dragOffset.x) > threshold) {
        onSwipe(dragOffset.x > 0 ? "right" : "left");
      }
      setIsDragging(false);
      setDragOffset({ x: 0, y: 0 });
      setRotation(0);
    };

    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, dragOffset.x, onSwipe]);

  const cardStyle = {
    transform: `translate(${dragOffset.x}px, ${dragOffset.y}px) rotate(${rotation}deg)`,
    opacity: isTop ? 1 : 0.8,
    zIndex: isTop ? 10 : 1,
    scale: isTop ? 1 : 0.95,
    transition: isDragging ? "none" : "all 0.3s ease-out",
  };

  return (
    <div
      ref={cardRef}
      className="absolute inset-x-4 top-4 bottom-12 bg-white rounded-2xl shadow-xl overflow-hidden select-none"
      onMouseDown={handleStart}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      style={{
        ...cardStyle,
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        WebkitUserSelect: "none",
        touchAction: "none",
      }}
    >
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
          <Bookmark className="w-5 h-5 text-neutral-700" />
        </div>
      </div>

      <div className="h-2/3 bg-gradient-to-br from-neutral-200 to-neutral-300 relative">
        <div className="absolute inset-0 bg-neutral-400 flex items-center justify-center">
          <img
            src={buyer.image}
            alt={buyer.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        className="p-4 flex flex-col justify-between"
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/buyer/${buyer.id}`);
        }}
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-2xl font-bold text-neutral-900">{buyer.name}</h2>
            {buyer.verified && (
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            )}
          </div>
          <p className="text-neutral-600 mb-1">{buyer.location}</p>
          <p className="text-2xl font-bold text-neutral-900 mb-3">
            {buyer.budget}
          </p>

          <div className="flex gap-2 flex-wrap">
            {buyer.industries.slice(0, 2).map((industry) => (
              <Badge key={industry} variant="secondary" className="text-sm">
                {industry}
              </Badge>
            ))}
            {buyer.industries.length > 2 && (
              <Badge variant="secondary" className="text-sm">
                +{buyer.industries.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function DiscoverBuyer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buyers, setBuyers] = useState(mockBuyers);
  const navigate = useNavigate();

  const handleSwipe = (direction: "left" | "right") => {
    console.log(`Swiped ${direction} on ${buyers[currentIndex]?.name}`);

    if (currentIndex < buyers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleButtonAction = (action: "pass" | "like") => {
    handleSwipe(action === "like" ? "right" : "left");
    if (action === "like") {
      navigate(`/match-success?buyerId=${buyers[currentIndex].id}&sellerId=1`);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-100 text-white flex flex-col relative">
      <div className="absolute inset-0 h-1/3 bg-gradient-to-b from-neutral-900 to-neutral-800"></div>
      {/* Header */}
      <div className="pt-12 pb-6 z-10">
        <Container size="full">
          <h1 className="text-3xl font-bold text-center">Discover Buyer</h1>
        </Container>
      </div>

      {/* Card Stack */}
      <div className="flex-1 relative">
        {buyers.slice(currentIndex, currentIndex + 2).map((buyer, index) => (
          <SwipeableCard
            key={`${buyer.id}-${currentIndex + index}`}
            buyer={buyer}
            onSwipe={handleSwipe}
            isTop={index === 0}
          />
        ))}

        {currentIndex >= buyers.length && (
          <div className="absolute inset-4 top-4 bottom-24 bg-white rounded-2xl shadow-xl flex items-center justify-center">
            <div className="text-center text-neutral-500">
              <p className="text-xl font-semibold mb-2">No more buyers</p>
              <p>Check back later for new matches!</p>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="p-6">
        <div className="flex justify-center gap-6">
          <Button
            size="lg"
            variant="outline"
            className="w-16 h-16 rounded-full bg-white border-2 border-neutral-300 hover:bg-neutral-50"
            onClick={() => handleButtonAction("pass")}
          >
            <X className="w-8 h-8 text-red-500" />
          </Button>

          <Button
            size="lg"
            className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600"
            onClick={() => handleButtonAction("like")}
          >
            <Heart className="w-8 h-8 text-white" />
          </Button>
        </div>
      </div>

      <BottomNavigation activeTab="discover" />
    </div>
  );
}
