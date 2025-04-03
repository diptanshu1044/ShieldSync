import { ChartLine, CircleCheckBig, Shield } from "lucide-react";
import { ElementType } from "react";
import { Progress } from "./ui/progress";

interface WhyShieldSyncData {
  title: string;
  description: string;
  Icon: ElementType;
}
const data: WhyShieldSyncData[] = [
  {
    title: "100% Automated Cloud Storage Backup",
    description: "No Manual Intervention Required",
    Icon: CircleCheckBig,
  },
  {
    title: "Ransomware Protection",
    description: "Backups remain untouchable with immutable storage",
    Icon: Shield,
  },
  {
    title: "Affordable & Scalable",
    description: "Pay-as-you-grow model tailored for SMBs",
    Icon: ChartLine,
  },
];

export const WhyShieldSync = () => {
  const progress = 65;
  return (
    <div className="w-full h-[30rem] p-20">
      <div className="flex flex-col">
        <h2 className="text-center text-4xl text-[#0F0E47]">Why ShieldSync?</h2>
        <div className="flex">
          <div className="w-1/2">
            {data.map((data, index) => (
              <div className="flex px-4 py-3" key={index}>
                {data.Icon && <data.Icon className="" />}
                <div className="flex flex-col gap-2 px-2">
                  <span>{data.title}</span>
                  <span>{data.description}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="py-20 px-4 w-1/2">
            <div className="p-8 bg-gray-100 rounded-xl shadow-sm">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="font-medium">Backup Status</span>
                  <span>Last backup: 2 min ago</span>
                </div>
                <div className="mt-2">
                  <Progress value={progress} className="h-2 bg-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
