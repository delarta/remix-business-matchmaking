import { useNavigate, useSearchParams } from "react-router";
import { DealDashboard } from "~/components/deal-dashboard";
import type { Route } from "./+types/dashboard";
import User1Image from "~/assets/Dan.jpg";
import User2Image from "~/assets/Maria.jpg";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Deal Dashboard - Business Matchmaking" },
    {
      name: "description",
      content: "Track your business deal progress and manage communications.",
    },
  ];
};

interface Contact {
  id: string;
  name: string;
  role: "buyer" | "seller";
  image?: string;
}

interface Milestone {
  id: string;
  title: string;
  status: "completed" | "in-progress" | "pending";
  order: number;
}

interface ChatThread {
  id: string;
  title: string;
  category: string;
  lastMessage?: string;
  timestamp: string;
  participant: {
    id: string;
    name: string;
    image?: string;
  };
  unreadCount?: number;
}

interface DealData {
  id: string;
  name: string;
  businessDescription: string;
  valuationRange: string;
  stage: string;
  progress: number;
  nextStep: {
    title: string;
    status: "On Progress" | "Completed" | "Pending";
  };
  contacts: Contact[];
  milestones: Milestone[];
  chatThreads: ChatThread[];
}

export default function DashboardRoute() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const matchId = searchParams.get("matchId");
  const dealId = searchParams.get("dealId");

  const deal: DealData = {
    id: dealId || matchId || "1",
    name: "Acquisition of tech Startup",
    businessDescription: "Inovative SaaS Platform",
    valuationRange: "$4M - $7M",
    stage: "NDA",
    progress: 25,
    nextStep: {
      title: "Due Diligence",
      status: "On Progress"
    },
    contacts: [
      {
        id: "1",
        name: "Jake",
        role: "seller",
        image: User1Image
      },
      {
        id: "2",
        name: "Maria",
        role: "buyer",
        image: User2Image
      }
    ],
    milestones: [
      {
        id: "1",
        title: "Intro",
        status: "completed",
        order: 1
      },
      {
        id: "2",
        title: "NDA",
        status: "completed",
        order: 2
      },
      {
        id: "3",
        title: "Due Diligence",
        status: "in-progress",
        order: 3
      },
      {
        id: "4",
        title: "Valuation",
        status: "pending",
        order: 4
      },
      {
        id: "5",
        title: "LOI",
        status: "pending",
        order: 5
      },
      {
        id: "6",
        title: "Contract",
        status: "pending",
        order: 6
      },
      {
        id: "7",
        title: "Payment",
        status: "pending",
        order: 7
      },
      {
        id: "8",
        title: "Closing",
        status: "pending",
        order: 8
      }
    ],
    chatThreads: [
      {
        id: "1",
        title: "NDA Discussion",
        category: "Legal",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
        participant: {
          id: "1",
          name: "Jake",
          image: User1Image
        }
      },
      {
        id: "2",
        title: "Financial Statement",
        category: "Financial",
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // Yesterday
        participant: {
          id: "2",
          name: "Maria",
          image: User2Image
        }
      },
      {
        id: "3",
        title: "Due Diligence Report",
        category: "Due Diligence",
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
        participant: {
          id: "3",
          name: "Legal Team",
          image: User1Image // Using placeholder image
        }
      },
      {
        id: "4",
        title: "Contract Negotiation",
        category: "Negotiation",
        timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 1 week ago
        participant: {
          id: "1",
          name: "Jake",
          image: User1Image
        }
      }
    ]
  };



  const handleBack = () => {
    // Navigate back to previous page or home
    navigate(-1);
  };

  const handleChatClick = (threadId: string) => {
    // Navigate to chat view with the specific thread
    console.log("Opening chat thread:", threadId);
    // In a real app: navigate(`/chat/${threadId}`) or open chat modal
  };

  return (
    <DealDashboard
      deal={deal}
      onBack={handleBack}
      onChatClick={handleChatClick}
    />
  );
}
