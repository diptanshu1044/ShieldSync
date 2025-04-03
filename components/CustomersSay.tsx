import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader } from "./ui/card";

type CustomerReview = {
  name: string;
  role: string;
  review: string;
};

const customerReviews: CustomerReview[] = [
  {
    name: "John Smith",
    role: "IT Director, TechCorp",
    review:
      "ShieldSync has simplified our backup strategy across multiple cloud providers. It's reliable and cost-effective.",
  },
  {
    name: "Sarah Johnson",
    role: "DevOps Lead, CloudTech",
    review:
      "The automated backup features and instant recovery options have saved us countless hours of manual work.",
  },
  {
    name: "Mike Davis",
    role: "CTO, DataSafe",
    review:
      "Enterprise-grade security at SMB-friendly pricing. ShieldSync delivers exactly what they promise.",
  },
];

export const CustomersSay = () => {
  return (
    <div className="bg-[#F4F6FA] px-4 sm:px-8 md:px-20 py-8 md:py-12">
      <h2 className="text-center text-[#0F0E47] text-4xl pb-12">
        What Our Customers Say
      </h2>

      <div className="flex justify-evenly items-center flex-wrap gap-4">
        {customerReviews.map((customer, index) => (
          <CustomerCard {...customer} key={index} />
        ))}
      </div>
    </div>
  );
};

interface CustomerCardProps {
  image?: string;
  name: string;
  role: string;
  review: string;
}

const CustomerCard = ({ image, name, role, review }: CustomerCardProps) => {
  return (
    <Card className="p-3 sm:p-4 rounded-xl bg-white w-full max-w-sm shadow-none border-0 min-h-[12rem] h-auto">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-2 sm:p-4">
        <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
          <AvatarImage src={image} alt={name} className="object-cover" />
          <AvatarFallback className="bg-gray-300 text-white font-semibold">
            {name[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-base sm:text-lg text-[#0F0E47] font-normal">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-[#4B5563]">{role}</p>
        </div>
      </CardHeader>
      <CardContent className="p-2 sm:p-4 pt-0 sm:pt-0">
        <p className="text-[#4B5563] text-xs sm:text-sm leading-relaxed">
          &quot;{review}&quot;
        </p>
      </CardContent>
    </Card>
  );
};
