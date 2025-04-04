import { Button } from "./ui/button";

export const PreFooterCTA = () => {
  return (
    <div className=" w-full p-8 md:p-12">
      <div className="flex flex-col">
        <h2 className="text-center text-4xl text-[#0F0E47]">
          Start Protecting Your Cloud Data Today
        </h2>
        <p className="text-center text-lg text-[#4B5563] mt-4">
          Join thousands of SMBs who trust ShieldSync for their cloud backup
          needs
        </p>
        <div className="flex justify-center mt-8">
          <Button className="bg-[#0F0E47] text-white py-5 px-8 rounded-lg shadow-md hover:bg-[#8686AC] transition duration-300">
            Sign Up For Free
          </Button>
        </div>
      </div>
    </div>
  );
};
