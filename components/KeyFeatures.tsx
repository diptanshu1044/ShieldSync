import { ElementType } from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";
import { CloudUpload, Lock, RefreshCcw } from "lucide-react";

const features = [
  {
    title: "Automated Cloud Backups",
    description:
      "Schedule and manage backups for AWS S3, Azure Blob & GCP Storage",
    Icon: CloudUpload,
  },
  {
    title: "Immutable & Encrypted Storage",
    description: "Prevent ransomware attacks with AES-256 encryption",
    Icon: Lock,
  },
  {
    title: "One-Click Data Recovery",
    description: "Instantly restore files and folders from cloud backups",
    Icon: RefreshCcw,
  },
];

export const KeyFeatures = () => {
  return (
    <div className="bg-[#F4F6FA]  w-full pb-8">
      <h4 className="text-[#0F0E47] font-normal text-4xl text-center pt-8 py-16">
        Key Features
      </h4>

      {/* Feature Cards */}
      <div className="flex justify-center gap-8 flex-wrap">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

const FeatureCard = ({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: ElementType;
}) => {
  return (
    <Card className="p-6 rounded-xl text-center max-w-sm shadow-none border-0">
      {Icon && <Icon className="mx-auto text-black w-8 mb-2" />}
      <CardTitle className="text-lg font-semibold text-[#0F0E47]">
        {title}
      </CardTitle>
      <CardDescription className="text-[#4B5563] ">
        {description}
      </CardDescription>
    </Card>
  );
};
