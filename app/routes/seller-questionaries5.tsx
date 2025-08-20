import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Progress } from "~/components/ui/progress";
import { Container } from "~/components/ui/container";
import { Checkbox } from "~/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { useNavigate } from "react-router";

function BuyerQuestionaries2() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100">
      <Container>
        <div className="min-h-screen flex flex-col">
          <div className="flex flex-col gap-6 pt-12">
            <div className="relative overflow-hidden">
              <Progress value={100} />
            </div>
            <div className="relative overflow-hidden">
              <div className="relative z-10 w-full">
                <h1 className="text-2xl font-bold text-center">
                  When are you looking to sell?
                </h1>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <RadioGroup defaultValue="small">
                <div className="flex items-center gap-3 p-3 border rounded-lg border-gray-400 bg-white h-12">
                  <RadioGroupItem value="small" id="r1" />
                  <Label htmlFor="r1" className="w-full">
                    <div className="flex flex-col gap-2">
                      <p className="font-medium">{`Within 6 months`}</p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg border-gray-400 bg-white h-12">
                  <RadioGroupItem value="medium" id="r2" />
                  <Label htmlFor="r2" className="w-full">
                    <div className="flex flex-col gap-2">
                      <p className="font-medium">{`Within 12 - 18 months`}</p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg border-gray-400 bg-white h-12">
                  <RadioGroupItem value="large" id="r3" />
                  <Label htmlFor="r3" className="w-full">
                    <div className="flex flex-col gap-2">
                      <p className="font-medium">{`Just exploring`}</p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="relative overflow-hidden mt-6 text-center font-light text-gray-400">
            <p>
              Whether you’re ready now or just testing the waters, we’ve got you
              covered.
            </p>
          </div>
          <div className="flex gap-4 mt-auto mb-8 relative">
            <Button
              variant={"outline"}
              className="flex-1 font-medium h-12 rounded-lg"
            >
              Back
            </Button>
            <Button
              onClick={() => navigate("/discover")}
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
