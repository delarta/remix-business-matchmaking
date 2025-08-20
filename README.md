# Business Matchmaking Platform

A modern business matchmaking platform built with React Router v7 that connects buyers and sellers for business acquisitions. The platform features a Tinder-like discovery interface, comprehensive questionnaires, deal management dashboard, and real-time communication tools.

## 🚀 Features

- **Smart Matching Algorithm**: Connects buyers and sellers based on compatibility
- **Tinder-Style Discovery**: Swipe interface for browsing potential matches
- **Comprehensive Questionnaires**: Detailed onboarding for both buyers and sellers
- **Deal Management Dashboard**: Track deal progress with milestones and communications
- **Real-time Chat System**: Organized conversations by deal topics
- **Mobile-First Design**: Responsive interface optimized for all devices
- **TypeScript Support**: Full type safety throughout the application
- **Modern UI Components**: Built with Tailwind CSS and Radix UI

## �️ Application Routes

### 🏠 **Home & Authentication**
- **`/`** - Landing page with welcome interface
- **`/login`** - User authentication page
- **`/signup`** - General user registration
- **`/signup-seller`** - Seller-specific registration

### 👤 **Buyer Journey**
- **`/buyer-questionaries1`** - Buyer onboarding: Basic information
- **`/buyer-questionaries2`** - Buyer onboarding: Acquisition criteria
- **`/buyer-questionaries3`** - Buyer onboarding: Financial capacity
- **`/buyer-questionaries4`** - Buyer onboarding: Industry preferences
- **`/buyer-questionaries5`** - Buyer onboarding: Final details
- **`/buyer/:id`** - Individual buyer profile view

### 🏢 **Seller Journey**
- **`/seller-questionaries1`** - Seller onboarding: Business basics
- **`/seller-questionaries2`** - Seller onboarding: Financial details
- **`/seller-questionaries3`** - Seller onboarding: Business operations
- **`/seller-questionaries4`** - Seller onboarding: Sale preferences
- **`/seller-questionaries5`** - Seller onboarding: Final information
- **`/discover`** - Tinder-style buyer discovery interface


### 🤝 **Matching & Deals**
- **`/match-success`** - Match confirmation page with celebration
  - Query params: `?buyerId=123&sellerId=456`
- **`/dashboard`** - Deal management dashboard
  - Query params: `?matchId=123-456` or `?dealId=789`

## 📱 Key Components

### **Discovery Interface**
- Swipeable cards with buyer/seller profiles
- Like/pass functionality with smooth animations
- Profile images and key information display
- Bookmark feature for saving interesting profiles

### **Match Success**
- Animated celebration page
- Profile cards of matched parties
- Navigation to deal dashboard
- Option to discover more matches

### **Deal Dashboard**
- **Overview Tab**: Progress tracking, next steps, deal summary
- **Milestones Tab**: Visual progress through deal stages
- **Chats Tab**: Organized conversations by topic
- **Docs Tab**: Document management (coming soon)

### **Questionnaire System**
- Multi-step onboarding process
- Progress indicators
- Form validation
- Role-specific questions for buyers vs sellers

## 🎨 Design System

### **Color Palette**
- Primary: Red accent color for CTAs and progress
- Background: Gray-based neutral palette
- Cards: Clean white backgrounds with subtle shadows
- Text: High contrast for accessibility

### **Typography**
- Inter font family for modern readability
- Consistent heading hierarchy
- Proper spacing and line heights

### **Components**
- Reusable UI components with Radix UI
- Consistent button styles and interactions
- Form elements with proper validation states
- Navigation components with active states

## 🔧 Technical Stack

- **Framework**: React Router v7
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Building for Production

```bash
npm run build
```

### Type Checking

```bash
npm run typecheck
```

## 📁 Project Structure

```
app/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (buttons, forms, etc.)
│   ├── buyer-profile.tsx
│   ├── discover-buyer.tsx
│   ├── deal-dashboard.tsx
│   └── match-success.tsx
├── routes/              # Application routes
│   ├── home.tsx
│   ├── login.tsx
│   ├── buyer-*.tsx     # Buyer journey routes
│   ├── seller-*.tsx    # Seller journey routes
│   ├── dashboard.tsx
│   └── match-success.tsx
├── assets/             # Static assets (images, etc.)
├── lib/                # Utility functions
└── welcome/            # Welcome page assets
```

## 🎯 User Flow

### **For Buyers:**
1. Sign up and complete 5-step questionnaire
2. Access discovery interface to browse sellers
3. Swipe through seller profiles
4. Get matched with compatible sellers
5. Manage deals through dashboard
6. Communicate via organized chat system

### **For Sellers:**
1. Sign up and complete 5-step questionnaire
2. Wait for buyer interest
3. Get notified of matches
4. Manage deals through dashboard
5. Communicate with potential buyers

## 🔮 Future Enhancements

- Real-time notifications
- Advanced filtering and search
- Document upload and management
- Video call integration
- Payment processing
- Analytics and reporting
- Mobile app development

---

Built with ❤️ using React Router v7, TypeScript, and Tailwind CSS.
