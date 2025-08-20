import * as React from "react"
import { useState } from "react"
import { ArrowLeft, Clock, ChevronRight, User, Check, Circle } from "lucide-react"
import { Button } from "~/components/ui/button"
import { BottomNavigation } from "~/components/ui/bottom-navigation"

interface Contact {
  id: string
  name: string
  role: "buyer" | "seller"
  image?: string
}

interface Milestone {
  id: string
  title: string
  status: "completed" | "in-progress" | "pending"
  order: number
}

interface ChatThread {
  id: string
  title: string
  category: string
  lastMessage?: string
  timestamp: string
  participant: {
    id: string
    name: string
    image?: string
  }
  unreadCount?: number
}

interface DealData {
  id: string
  name: string
  businessDescription: string
  valuationRange: string
  stage: string
  progress: number
  nextStep: {
    title: string
    status: "On Progress" | "Completed" | "Pending"
  }
  contacts: Contact[]
  milestones: Milestone[]
  chatThreads: ChatThread[]
}

interface DealDashboardProps {
  deal: DealData
  onBack?: () => void
  onChatClick?: (threadId: string) => void
}

// Tab navigation component
function TabNavigation({ activeTab, onTabChange }: { 
  activeTab: string
  onTabChange: (tab: string) => void 
}) {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "milestones", label: "Milestones" },
    { id: "chats", label: "Chats" },
    { id: "docs", label: "Docs" }
  ]

  return (
    <div className="flex bg-neutral-100 rounded-lg p-1 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors
            ${activeTab === tab.id 
              ? 'bg-white text-neutral-900 shadow-sm' 
              : 'text-neutral-600 hover:text-neutral-900'
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

// Progress bar component
function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full bg-neutral-200 rounded-full h-2">
      <div 
        className="bg-red-500 h-2 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

// Next step card component
function NextStepCard({ step }: { step: DealData['nextStep'] }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-100 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
          <Clock className="w-5 h-5 text-yellow-600" />
        </div>
        <div>
          <h3 className="font-semibold text-neutral-900">{step.title}</h3>
          <p className="text-sm text-orange-500">{step.status}</p>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-neutral-400" />
    </div>
  )
}

// Deal overview card component
function DealOverviewCard({ deal }: { deal: DealData }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-100 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-neutral-600 mb-1">Deal Name:</p>
          <p className="font-semibold text-neutral-900">{deal.name}</p>
        </div>
        <div>
          <p className="text-sm text-neutral-600 mb-1">Business Description:</p>
          <p className="font-semibold text-neutral-900">{deal.businessDescription}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-neutral-600 mb-1">Valuation Range:</p>
          <p className="font-semibold text-neutral-900">{deal.valuationRange}</p>
        </div>
        <div>
          <p className="text-sm text-neutral-600 mb-1">Deal Stage:</p>
          <p className="font-semibold text-neutral-900">{deal.stage}</p>
        </div>
      </div>
    </div>
  )
}

// Contact card component
function ContactCard({ contact }: { contact: Contact }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-neutral-100">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200 flex items-center justify-center">
        {contact.image ? (
          <img
            src={contact.image}
            alt={contact.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <User className="w-6 h-6 text-neutral-500" />
        )}
      </div>
      <div>
        <h3 className="font-semibold text-neutral-900">{contact.name}</h3>
        <p className="text-sm text-neutral-600 capitalize">{contact.role}</p>
      </div>
    </div>
  )
}

// Milestone item component
function MilestoneItem({ milestone, showChevron = false }: {
  milestone: Milestone
  showChevron?: boolean
}) {
  const getStatusIcon = () => {
    switch (milestone.status) {
      case "completed":
        return (
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <Check className="w-5 h-5 text-green-600" />
          </div>
        )
      case "in-progress":
        return (
          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5 text-yellow-600" />
          </div>
        )
      case "pending":
        return (
          <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center">
            <Circle className="w-5 h-5 text-neutral-400" />
          </div>
        )
    }
  }

  const getStatusText = () => {
    switch (milestone.status) {
      case "completed":
        return "Completed"
      case "in-progress":
        return "On Progress"
      case "pending":
        return "Pending"
    }
  }

  const getStatusColor = () => {
    switch (milestone.status) {
      case "completed":
        return "text-green-600"
      case "in-progress":
        return "text-orange-500"
      case "pending":
        return "text-neutral-500"
    }
  }

  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-neutral-100 last:border-b-0">
      <div className="flex items-center gap-3">
        {getStatusIcon()}
        <div>
          <h3 className="font-semibold text-neutral-900">{milestone.title}</h3>
          <p className={`text-sm ${getStatusColor()}`}>{getStatusText()}</p>
        </div>
      </div>
      {showChevron && milestone.status === "in-progress" && (
        <ChevronRight className="w-5 h-5 text-neutral-400" />
      )}
    </div>
  )
}

// Milestones tab component
function MilestonesTab({ milestones }: { milestones: Milestone[] }) {
  const sortedMilestones = [...milestones].sort((a, b) => a.order - b.order)

  return (
    <div>
      <h2 className="text-lg font-semibold text-neutral-900 mb-4">Milestones</h2>
      <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
        {sortedMilestones.map((milestone) => (
          <MilestoneItem
            key={milestone.id}
            milestone={milestone}
            showChevron={true}
          />
        ))}
      </div>
    </div>
  )
}

// Chat thread item component
function ChatThreadItem({ thread, onClick }: {
  thread: ChatThread
  onClick?: () => void
}) {
  const formatTimestamp = (timestamp: string) => {
    const now = new Date()
    const messageTime = new Date(timestamp)
    const diffInHours = Math.abs(now.getTime() - messageTime.getTime()) / (1000 * 60 * 60)

    if (diffInHours < 24) {
      return messageTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
    } else if (diffInHours < 48) {
      return 'Yesterday'
    } else if (diffInHours < 168) { // 7 days
      const days = Math.floor(diffInHours / 24)
      return `${days} days ago`
    } else {
      const weeks = Math.floor(diffInHours / 168)
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`
    }
  }

  return (
    <div
      className="flex items-center gap-3 p-4 bg-white border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50 cursor-pointer transition-colors"
      onClick={onClick}
    >
      <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200 flex items-center justify-center flex-shrink-0">
        {thread.participant.image ? (
          <img
            src={thread.participant.image}
            alt={thread.participant.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <User className="w-6 h-6 text-neutral-500" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-neutral-900 truncate">{thread.title}</h3>
          <span className="text-xs text-neutral-500 flex-shrink-0 ml-2">
            {formatTimestamp(thread.timestamp)}
          </span>
        </div>
        <p className="text-sm text-neutral-600 truncate">{thread.category}</p>
      </div>

      {thread.unreadCount && thread.unreadCount > 0 && (
        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-xs text-white font-medium">
            {thread.unreadCount > 9 ? '9+' : thread.unreadCount}
          </span>
        </div>
      )}
    </div>
  )
}

// Chats tab component
function ChatsTab({ chatThreads, onChatClick }: {
  chatThreads: ChatThread[]
  onChatClick?: (threadId: string) => void
}) {
  // Sort by timestamp (most recent first)
  const sortedThreads = [...chatThreads].sort((a, b) =>
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )

  return (
    <div>
      <h2 className="text-lg font-semibold text-neutral-900 mb-4">Chats</h2>
      <div className="bg-white rounded-xl shadow-sm border border-neutral-100 overflow-hidden">
        {sortedThreads.map((thread) => (
          <ChatThreadItem
            key={thread.id}
            thread={thread}
            onClick={() => onChatClick?.(thread.id)}
          />
        ))}
      </div>
    </div>
  )
}

export function DealDashboard({ deal, onBack, onChatClick }: DealDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  const handleChatClick = (threadId: string) => {
    console.log("Opening chat thread:", threadId)
    onChatClick?.(threadId)
    // In a real app: navigate to chat view or open chat modal
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 px-4 py-3">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-neutral-600" />
          </button>
          <h1 className="text-lg font-semibold text-neutral-900">Deal Dashboard</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-6 space-y-6">
        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Overview Tab Content */}
        {activeTab === "overview" && (
          <>
            {/* Overall Progress */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-neutral-100">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-neutral-900">Overall deal progress</h2>
                <span className="text-lg font-bold text-red-500">{deal.progress}%</span>
              </div>
              <ProgressBar progress={deal.progress} />
            </div>

            {/* Next Required Steps */}
            <div>
              <h2 className="text-lg font-semibold text-neutral-900 mb-3">Next Required Steps</h2>
              <NextStepCard step={deal.nextStep} />
            </div>

            {/* Deal Overview */}
            <div>
              <h2 className="text-lg font-semibold text-neutral-900 mb-3">Deal Overview</h2>
              <DealOverviewCard deal={deal} />
            </div>

            {/* Key Contacts */}
            <div>
              <h2 className="text-lg font-semibold text-neutral-900 mb-3">Key Contacts</h2>
              <div className="space-y-3">
                {deal.contacts.map((contact) => (
                  <ContactCard key={contact.id} contact={contact} />
                ))}
              </div>
            </div>
          </>
        )}

        {/* Milestones Tab */}
        {activeTab === "milestones" && (
          <MilestonesTab milestones={deal.milestones} />
        )}

        {/* Chats Tab */}
        {activeTab === "chats" && (
          <ChatsTab
            chatThreads={deal.chatThreads}
            onChatClick={handleChatClick}
          />
        )}

        {/* Other tabs content (placeholder) */}
        {activeTab !== "overview" && activeTab !== "milestones" && activeTab !== "chats" && (
          <div className="bg-white rounded-xl p-8 shadow-sm border border-neutral-100 text-center">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h3>
            <p className="text-neutral-600">Content for {activeTab} tab coming soon...</p>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}

// Default export with mock data for testing
export default function DealDashboardPage() {
  const mockDeal: DealData = {
    id: "1",
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
        role: "seller"
      },
      {
        id: "2",
        name: "Maria",
        role: "buyer"
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
          image: undefined // Will use User1Image from route
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
          image: undefined // Will use User2Image from route
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
          image: undefined
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
          image: undefined
        }
      }
    ]
  }

  const handleBack = () => {
    console.log("Navigate back")
    // In a real app: navigate(-1) or navigate("/")
  }

  return (
    <DealDashboard
      deal={mockDeal}
      onBack={handleBack}
    />
  )
}
