import { BristolLogo } from "./logos/BristolLogo";
import { Philips } from "./logos/Philips";
import { VodafoneLogo } from "./logos/VodafoneLogo";

export const Services = () => {
  return (
    <section className="w-full h-[27.5rem]">
      <div className="p-8 text-center rounded-xl max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0F0E47]">
          94% of surveyed organizations are <br />
          <span className="text-[#0F0E47]">
            using public cloud computing services
          </span>
        </h2>
        <p className="text-[#4B5563] mt-4">
          And the most reliable and fastest growing organizations are protecting
          their cloud workloads and staying ahead of the curve with N2WS Backup
          & Recovery
        </p>
      </div>

      <div>
        <VodafoneLogo />
      </div>
    </section>
  );
};
