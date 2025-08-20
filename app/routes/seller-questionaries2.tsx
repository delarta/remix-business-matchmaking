import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Progress } from "~/components/ui/progress";
import { Container } from "~/components/ui/container";
import { Checkbox } from "~/components/ui/checkbox";
import { useNavigate } from "react-router";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

function BuyerQuestionaries2() {
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-100">
      <Container>
        <div className="min-h-screen flex flex-col">
          <div className="flex flex-col gap-6 pt-12">
            <div className="relative overflow-hidden">
              <Progress value={40} />
            </div>
            <div className="relative overflow-hidden">
              <div className="relative z-10 w-full">
                <h1 className="text-2xl font-bold text-center">
                  Which industries interest you most?
                </h1>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <RadioGroup defaultValue="small">
                <div className="flex items-center gap-3 p-3 border rounded-lg border-neutral-400 bg-white h-12">
                  <RadioGroupItem value="small" id="r1" />
                  <Label htmlFor="r1" className="w-full">
                    <div className="flex flex-col gap-2">
                      <p className="font-medium">{`<$1M `}</p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg border-neutral-400 bg-white h-12">
                  <RadioGroupItem value="medium" id="r2" />
                  <Label htmlFor="r2" className="w-full">
                    <div className="flex flex-col gap-2">
                      <p className="font-medium">{`$1M - $10M`}</p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg border-neutral-400 bg-white h-12">
                  <RadioGroupItem value="large" id="r3" />
                  <Label htmlFor="r3" className="w-full">
                    <div className="flex flex-col gap-2">
                      <p className="font-medium">{`$10M - $50M`}</p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg border-neutral-400 bg-white h-12">
                  <RadioGroupItem value="xl" id="r4" />
                  <Label htmlFor="r4" className="w-full">
                    <div className="flex flex-col gap-2">
                      <p className="font-medium">{`$50M+`}</p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="relative overflow-hidden mt-6 text-center font-light text-neutral-400">
            <p>An estimate is fine, this helps attract the right buyers.</p>
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
              onClick={() => navigate("/seller-questionaries3")}
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
