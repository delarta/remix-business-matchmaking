import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Progress } from "~/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Container } from "~/components/ui/container";
import { useNavigate } from "react-router";

function BuyerQuestionaries1() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100">
      <Container>
        <div className="min-h-screen flex flex-col">
          <div className="flex flex-col gap-6 pt-12">
            <div className="relative overflow-hidden">
              {/* Shopping bag illustration */}

              <Progress value={20} />
            </div>
            <div className="relative overflow-hidden">
              {/* Shopping bag illustration */}

              <div className="relative z-10 w-full">
                <h1 className="text-2xl font-bold text-center">
                  What size deal excites you the most?
                </h1>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <RadioGroup defaultValue="small">
                <div className="flex items-center gap-3 p-3 border rounded-lg border-gray-400 bg-white">
                  <RadioGroupItem value="small" id="r1" />
                  <Label htmlFor="r1" className="w-full">
                    <div className="flex flex-col gap-2">
                      <p className="font-medium">Small</p>
                      <p className="text-sm text-gray-400 font-light">
                        $1M - $5M
                      </p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg border-gray-400 bg-white">
                  <RadioGroupItem value="medium" id="r2" />
                  <Label htmlFor="r2" className="w-full">
                    <div className="flex flex-col gap-2">
                      <p className="font-medium">Medium</p>
                      <p className="text-sm text-gray-400 font-light">
                        $5M - $20M
                      </p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg border-gray-400 bg-white">
                  <RadioGroupItem value="large" id="r3" />
                  <Label htmlFor="r3" className="w-full">
                    <div className="flex flex-col gap-2">
                      <p className="font-medium">Large</p>
                      <p className="text-sm text-gray-400 font-light">
                        $20M+ 
                      </p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="relative overflow-hidden mt-6 text-center font-light text-gray-400">
            <p>
              This helps us match you with sellers in the right range. You can
              always update later.
            </p>
          </div>
          <div className="flex gap-4 mt-auto mb-8 relative">
            <Button
              onClick={() => navigate("/buyer-questionaries2")}
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

export default BuyerQuestionaries1;
