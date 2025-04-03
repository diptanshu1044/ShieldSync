import { ChartLogo } from "./logos/ChartLogo";
import { Logo1 } from "./logos/Logo1";
import { Logo2 } from "./logos/Logo2";
import { Logo3 } from "./logos/Logo3";
import { Logo4 } from "./logos/Logo4";

export const HeroSection = () => {
  return (
    <main className="bg-[#F4F6FA]  flex">
      <div className="mt-8 mx-20  w-full">
        <div className="px-4">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-xl font-bold text-[#0F0E47] md:text-3xl lg:text-5xl dark:text-slate-300">
            {"Effortless Cloud Storage Backups for"
              .split(" ")
              .map((word, index) => (
                <span key={index} className="mr-2 inline-block">
                  {word}
                </span>
              ))}
            <br />
            <span>Azure</span>
          </h1>
          <p className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400">
            ShieldSync automates cloud backups, protects against data loss, and
            ensures instant recovery all with enterprise-grade security.
          </p>
          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="w-60 transform rounded-lg h-16 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 bg-[#0F0E47] ">
              Start Free Trial
            </button>
            <button className="w-60 transform rounded-lg h-16 border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
              Watch Demo
            </button>
          </div>
        </div>

        {/* grid */}
        <div>
          <div className="grid grid-cols-12 gap-6 p-6 max-w-6xl mx-auto">
            <div className="bg-[#8686AC] text-white p-6 rounded-lg relative col-span-7 flex gap-4">
              <div className="flex flex-col gap-4 w-7/12">
                <h3 className="text-xl font-bold text-[#0F0E47]">
                  Rapid, reliable recovery
                </h3>
                <p className="mt-2 text-sm text-[#4B5563]">
                  Recover anything—from a single file to your entire production
                  instance complete with network configurations—in seconds.
                </p>
                <div className="mt-4 p-4 bg-white text-black rounded-lg shadow flex items-center flex-col">
                  <p className="font-semibold">Capture VPC Settings</p>
                  <p className="text-xs">
                    Automatically capture changes in network configurations
                  </p>
                </div>
              </div>
              <div className="mt-2 flex gap-2 flex-col w-5/12">
                <div className="w-20 h-20 grow"></div>
                <span className="bg-white text-black px-3 py-1 rounded-full text-xs text-center">
                  DR of encrypted resources
                </span>
                <span className="bg-white text-black px-3 py-1 rounded-full text-xs text-center">
                  Orchestrated failover/drills
                </span>
              </div>
            </div>

            <div className="bg-[#8686AC] text-white p-6 rounded-lg relative col-span-5 flex items-center justify-evenly flex-col">
              <h3 className="text-xl font-bold text-[#0F0E47]">
                Automated cost savings
              </h3>
              <p className="mt-2 text-sm text-[#4B5563]">
                Reduce storage and compute costs automatically — with N2WS
                Resource Control, storage-optimized archiving and ZeroEBS.
              </p>
              <div className="mt-4 flex gap-4">
                <div className="bg-white text-black p-4 rounded-lg shadow">
                  <p className="text-sm">Compute savings</p>
                  <p className="text-2xl font-bold">$1,248.75</p>
                </div>
                <div className="bg-white text-black p-4 rounded-lg shadow">
                  <p className="text-sm">Storage savings</p>
                  <p className="text-2xl font-bold">98%</p>
                </div>
              </div>
            </div>

            <div className="bg-[#8686AC] text-white p-6 rounded-lg relative col-span-5">
              <h3 className="text-xl font-bold text-[#0F0E47]">
                Data sovereignty and security
              </h3>
              <p className="mt-2 text-sm text-[#4B5563]">
                Reduce your attack surface. Get total control over your
                environment with N2WS, for complete peace of mind.
              </p>
              <div className="mt-4 p-1 bg-white text-black rounded-full shadow">
                <p className="font-semibold text-center">
                  N2WS' server belongs to you—it's not shared
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Logo1 />
                <Logo2 />
                <Logo3 />
                <Logo4 />
              </div>
            </div>

            <div className="bg-[#8686AC] text-white p-6 rounded-lg relative col-span-7 flex gap-2 flex-row">
              <div className="w-7/12">
                <h3 className="text-xl font-bold text-[#0F0E47]">
                  Multi-cloud management
                </h3>
                <p className="mt-2 text-sm text-[#4B5563]">
                  Easily manage all backup & recovery policies in different
                  accounts, regions, and clouds—in one console.
                </p>
                <div className="mt-4 flex gap-2 flex-col">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-xs">
                    Built for easy multi-tenancy
                  </span>
                  <span className="bg-white text-black px-3 py-1 rounded-full text-xs">
                    Easy audit reports and API
                  </span>
                </div>
              </div>

              <div className="grow">
                <ChartLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
