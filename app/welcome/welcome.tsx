import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { Container } from "~/components/ui/container";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import GoatImg from "~/assets/goat.png";

export function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-neutral-200 flex flex-col">
      <Container
        size="full"
        className="flex-1 bg-gradient-to-b from-neutral-800 to-neutral-900 text-white relative flex items-end"
      >
        <img
          src={GoatImg}
          alt="Goat"
          className="w-full h-full object-cover inset-0 absolute"
        />
        <div className="text-white flex flex-col relative py-10 gap-4">
          <h2 className="text-3xl font-bold">
            Buy and Sell <br /> Business with Ease
          </h2>
          <p className="text-sm font-light">
            A modern way to connect buyers and seller, where seller make the
            first move
          </p>
        </div>
      </Container>
      <Container size="full" className="py-8 space-y-4">
        <Button onClick={() => navigate("/signup")} className="w-full h-12">Sign Up as Buyer</Button>
        <p className="text-center text-sm text-neutral-500">Or</p>
        <Button onClick={() => navigate("/signup-seller")} className="w-full h-12 text-neutral-700" variant="outline">
          Sign Up as Seller
        </Button>
      </Container>
    </div>
  );
}
