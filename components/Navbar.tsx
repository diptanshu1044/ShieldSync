import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="h-16 w-screen flex justify-evenly items-center gap-48">
      <div className="flex justify-center items-center gap-2">
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
      <div className="flex justify-evenly items-center">
        <Button variant="ghost" className="font-normal">
          Features
        </Button>
        <Button variant="ghost">Solutions</Button>
        <Button variant="ghost">Pricing</Button>
        <Button variant="ghost">FAQ</Button>
      </div>
      <div className="">
        <Button variant="ghost">Login</Button>
        <Button className="bg-[#0F0E47]">Start Free Trial</Button>
      </div>
    </nav>
  );
};
