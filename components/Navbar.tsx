import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import {
  Wrench,
  Lightbulb,
  BadgeDollarSign,
  HelpCircle,
  LogIn,
} from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="h-16 w-screen flex justify-between items-center px-6 md:px-16">
      <div className="flex items-center gap-2">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_3001)">
            <path
              d="M15 0C15.2695 0 15.5391 0.0585938 15.7852 0.169922L26.8184 4.85156C28.1074 5.39648 29.0684 6.66797 29.0625 8.20313C29.0332 14.0156 26.6426 24.6504 16.5469 29.4844C15.5684 29.9531 14.4316 29.9531 13.4531 29.4844C3.35742 24.6504 0.966793 14.0156 0.937496 8.20313C0.931637 6.66797 1.89257 5.39648 3.18164 4.85156L14.2207 0.169922C14.4609 0.0585938 14.7305 0 15 0ZM15 3.91406V26.0625C23.0859 22.1484 25.2598 13.4824 25.3125 8.28516L15 3.91406Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_3001">
              <path d="M0 0H30V30H0V0Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="text-[1.375rem]">ShieldSync</span>
      </div>

      <div className="hidden md:flex gap-6">
        <Button variant="ghost" className="font-normal">
          Features
        </Button>
        <Button variant="ghost">Solutions</Button>
        <Button variant="ghost">Pricing</Button>
        <Button variant="ghost">FAQ</Button>
      </div>

      <div className="hidden md:flex gap-4">
        <Button variant="ghost">Login</Button>
        <Button className="bg-[#0F0E47] text-white">Start Free Trial</Button>
      </div>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu size={28} />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Explore ShieldSync</SheetDescription>
          </SheetHeader>
          <Separator />
          <div className="flex flex-col gap-2 items-start">
            <Button variant="ghost">
              <Wrench className="w-4 h-4 mr-2" />
              Features
            </Button>
            <Button variant="ghost">
              <Lightbulb className="w-4 h-4 mr-2" />
              Solutions
            </Button>
            <Button variant="ghost">
              <BadgeDollarSign className="w-4 h-4 mr-2" />
              Pricing
            </Button>
            <Button variant="ghost">
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </Button>
            <Button variant="ghost">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button className="bg-[#0F0E47] text-white mx-auto my-2">
              Start Free Trial
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
