import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Progress } from "~/components/ui/progress";
import { Container } from "~/components/ui/container";
import { Checkbox } from "~/components/ui/checkbox";
import { useNavigate } from "react-router";

function BuyerQuestionaries2() {
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-100">
      <Container>
        <div className="min-h-screen flex flex-col">
          <div className="flex flex-col gap-6 pt-12">
            <div className="relative overflow-hidden">
              <Progress value={60} />
            </div>
            <div className="relative overflow-hidden">
              <div className="relative z-10 w-full">
                <h1 className="text-2xl font-bold text-center">
                  Where are you looking to buy?
                </h1>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 p-4 border rounded-lg border-neutral-300 bg-white">
                  <Checkbox id="tech" />
                  <Label htmlFor="tech" className="w-full">
                    Local (within my city/state)
                  </Label>
                </div>
                <div className="flex items-center gap-3 p-4 border rounded-lg border-neutral-300 bg-white">
                  <Checkbox id="healthcare" />
                  <Label htmlFor="healthcare" className="w-full">
                    Nationwide
                  </Label>
                </div>
                <div className="flex items-center gap-3 p-4 border rounded-lg border-neutral-300 bg-white">
                  <Checkbox id="consumer-goods" />
                  <Label htmlFor="consumer-goods" className="w-full">
                    International
                  </Label>
                </div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden mt-6 text-center font-light text-neutral-400">
            <p>We’ll prioritize matches based on where you want to operate.</p>
          </div>
          <div className="flex gap-4 mt-auto mb-8 relative">
            <Button
              variant={"outline"}
              className="flex-1 font-medium h-12 rounded-lg"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
            <Button
              onClick={() => navigate("/buyer-questionaries4")}
              className="flex-1 text-white font-medium h-12 rounded-lg"
            >
              Next
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BuyerQuestionaries2;
