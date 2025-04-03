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
    <div className="bg-[#F4F6FA] px-20 py-12">
      <h2 className="text-center text-[#0F0E47] text-4xl pb-12">
        What Our Customers Say
      </h2>

      <div className="flex justify-evenly items-center">
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
    <Card className="p-4  rounded-xl  bg-white max-w-sm shadow-none border-0 h-[15rem]">
      <CardHeader className="flex items-center gap-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={image} alt={name} className="object-cover" />
          <AvatarFallback className="bg-gray-300 text-white font-semibold">
            {name[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 text-sm leading-relaxed">"{review}"</p>
      </CardContent>
    </Card>
  );
};
