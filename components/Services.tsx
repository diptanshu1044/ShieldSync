import { Philips } from "./logos/Philips";

export const Services = () => {
  return (
    <section className="w-full h-auto py-12 bg-gray-50">
      <div className="p-8 text-center rounded-xl max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0F0E47] leading-snug">
          94% of surveyed organizations are <br />
          <span className="text-[#0F0E47]">
            using public cloud computing services
          </span>
        </h2>
        <p className="text-[#4B5563] mt-4 text-lg">
          And the most reliable and fastest growing organizations are protecting
          their cloud workloads and staying ahead of the curve with N2WS Backup
          & Recovery.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-6 md:gap-20 px-6 pt-6 md:pb-6">
          <Philips />
          <Philips />
          <Philips />
          <Philips />
          <Philips />
          <Philips />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-20 px-6 pt-6 md:pb-6">
          <Philips />
          <Philips />
          <Philips />
          <Philips />
        </div>
      </div>
    </section>
  );
};
