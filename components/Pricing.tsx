import { Check } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export const Pricing = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 sm:py-6 md:py-12">
      <div>
        <h2 className="text-center font-normal text-[#0F0E47] text-3xl sm:text-4xl py-6 md:py-12">
          Simple, Transparent Pricing
        </h2>
        <Tabs
          defaultValue="monthly"
          className="w-full mx-auto text-center flex flex-col items-center"
        >
          <TabsList className="bg-[#F4F6FA] h-12 mb-4 md:mb-8">
            <TabsTrigger value="monthly" className="text-[#0F0E47] px-4 py-2">
              Monthly
            </TabsTrigger>
            <TabsTrigger value="annual" className="text-[#0F0E47]">
              Annual
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="w-full flex justify-evenly items-center pt-4 flex-wrap gap-4 lg:gap-0"
          >
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                buttonText={plan.buttonText}
                isPopular={plan.isPopular}
                pricingType={plan.pricingType}
              />
            ))}
          </TabsContent>
          <TabsContent
            value="annual"
            className="w-full flex justify-evenly items-center pt-4 flex-wrap gap-4 lg:gap-0"
          >
            {pricingPlansAnnual.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                buttonText={plan.buttonText}
                isPopular={plan.isPopular}
                pricingType={plan.pricingType}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonLink?: string;
  isPopular?: boolean;
  pricingType: "monthly" | "yearly" | "custom";
}

const PricingCard = ({
  title,
  price,
  features,
  buttonText,
  pricingType,
  isPopular,
}: PricingCardProps) => {
  return (
    <Card
      className={`relative p-6 shadow-md rounded-xl border border-gray-200 ${
        isPopular ? "bg-[#8686AC]" : "bg-white"
      } w-[20rem] h-[22rem] flex flex-col  justify-between`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-[#0F0E47] text-white text-xs font-normal px-3 py-1 rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}

      <h5
        className={`text-sm font-medium ${
          isPopular ? "text-white" : "text-gray-600"
        } text-left`}
      >
        {title}
      </h5>
      <CardContent className="flex flex-col">
        <h2
          className={`text-4xl font-bold ${
            isPopular ? "text-white" : "text-gray-900"
          } text-left`}
        >
          {price}
          <span className="text-base font-normal text-gray-500">
            {pricingType === "monthly" && "/mo"}
            {pricingType === "yearly" && "/yr"}
            {pricingType === "custom" && ""}
          </span>
        </h2>
        <ul
          className={`mt-4 space-y-2 ${
            isPopular ? "text-white" : "text-gray-700"
          } text-sm`}
        >
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-gray-900" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#0F0E47] text-white rounded-lg py-2 text-sm font-medium">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

type PricingPlan = {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  pricingType: "monthly" | "yearly" | "custom";
};

const pricingPlans: PricingPlan[] = [
  {
    title: "Free Tier",
    price: "$0",
    features: ["5GB Storage", "Basic Support", "1 Cloud Provider"],
    buttonText: "Get Started",
    isPopular: false,
    pricingType: "monthly",
  },
  {
    title: "Basic Plan",
    price: "$49",
    features: ["100GB Storage", "Priority Support", "All Cloud Providers"],
    buttonText: "Start Free Trial",
    isPopular: true,
    pricingType: "monthly",
  },
  {
    title: "Pro Plan",
    price: "Custom",
    features: ["Unlimited Storage", "24/7 Support", "Custom Features"],
    buttonText: "Contact Sales",
    isPopular: false,
    pricingType: "custom",
  },
  {
    title: "MSP Plan",
    price: "Custom",
    features: ["Unlimited Storage", "24/7 Support", "Custom Features"],
    buttonText: "Contact Sales",
    isPopular: false,
    pricingType: "custom",
  },
];

const pricingPlansAnnual: PricingPlan[] = [
  {
    title: "Free Tier",
    price: "$0",
    features: ["5GB Storage", "Basic Support", "1 Cloud Provider"],
    buttonText: "Get Started",
    isPopular: false,
    pricingType: "yearly",
  },
  {
    title: "Basic Plan",
    price: "$400",
    features: ["100GB Storage", "Priority Support", "All Cloud Providers"],
    buttonText: "Start Free Trial",
    isPopular: true,
    pricingType: "yearly",
  },
  {
    title: "Pro Plan",
    price: "Custom",
    features: ["Unlimited Storage", "24/7 Support", "Custom Features"],
    buttonText: "Contact Sales",
    isPopular: false,
    pricingType: "custom",
  },
];
