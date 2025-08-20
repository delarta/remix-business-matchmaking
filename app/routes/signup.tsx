import { Form, useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { Container } from "~/components/ui/container";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import BuyerImg from "~/assets/buyer.png";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col">
      <Container
        size="full"
        className="bg-gradient-to-b from-neutral-800 to-neutral-900 flex flex-col text-white py-12 relative overflow-hidden"
      >
        <img
          src={BuyerImg}
          alt="Buyer"
          className="absolute -right-8 top-0 w-1/3 h-full object-cover"
        />
        <div className="w-4/5 z-10">
          <h1 className="text-2xl font-bold mb-2">Create Your Buyer Account</h1>
          <p className="text-neutral-300 text-sm">
            Join and start discovering businesses that fit your goals.
          </p>
        </div>
      </Container>

      <div className="flex-1 px-6 py-6 bg-neutral-100">
        <Form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-neutral-900 font-medium">
              Full Name
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              className="bg-white border-neutral-300 rounded-lg h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-neutral-900 font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="bg-white border-neutral-300 rounded-lg h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-neutral-900 font-medium">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="bg-white border-neutral-300 rounded-lg h-12"
            />
          </div>

          <div className="pt-4">
            <Button
              onClick={() => navigate("/buyer-questionaries1")}
              type="button"
              className="w-full text-white font-medium h-12 rounded-lg"
            >
              Sign Up as Buyer
            </Button>
          </div>

          <div className="flex items-center justify-center">
            <span className="text-neutral-500 text-sm">Or</span>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full bg-white border-neutral-300 text-neutral-700 font-medium h-12 rounded-lg hover:bg-neutral-50"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          <div className="text-center pt-6">
            <p className="text-neutral-600 text-sm">
              Already have an account?{" "}
              <button
                type="button"
                className="text-neutral-900 font-semibold underline"
              >
                Log In Here
              </button>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
