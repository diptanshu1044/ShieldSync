import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import { ShieldSyncLogo } from "@/components/logos/ShieldSyncLogo";
import { ReactNode } from "react";
import { Separator } from "./ui/separator";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
}

export const FooterComponent = ({
  logo = <ShieldSyncLogo />,
  name = "ShieldSync",
  columns = [
    {
      title: "Product",
      links: [
        { text: "Features", href: "" },
        { text: "Pricing", href: "" },
        { text: "Security", href: "" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", href: "" },
        { text: "Blog", href: "" },
        { text: "Careers", href: "" },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Discord", href: "" },
        { text: "Twitter", href: "" },
        { text: "Github", href: "" },
      ],
    },
  ],
  copyright = "© 2025 ShieldSync. All rights reserved.",
  // policies = [
  //   { text: "Privacy Policy", href: "https://www.launchuicomponents.com/" },
  //   { text: "Terms of Service", href: "https://www.launchuicomponents.com/" },
  // ],
  showModeToggle = false,
}: FooterProps) => {
  return (
    <footer className="bg-[#0F0E47] w-full px-4">
      <div className="max-w-container mx-auto">
        <Footer className="bg-[#0F0E47]">
          <FooterContent className="flex justify-evenly">
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1 max-w-[18rem]">
              <div className="flex items-center flex-col gap-2">
                <div className="flex gap-2 w-full">
                  {" "}
                  {logo}
                  <h3 className="text-xl font-normal text-white text-left">
                    {name}
                  </h3>
                </div>

                <p className="text-[#9CA3AF]">
                  Secure cloud backup solutions for modern businesses
                </p>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold text-white">
                  {column.title}
                </h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className=" text-sm text-[#9CA3AF]"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>

          <Separator className="mt-4 text-gray-500 bg-gray-500" />
          <FooterBottom>
            <h5 className="text-center w-full">{copyright}</h5>
            {/* {policies && ( */}
            {/*   <div className="flex items-center gap-4"> */}
            {/*     {policies.map((policy, index) => ( */}
            {/*       <a key={index} href={policy.href}> */}
            {/*         {policy.text} */}
            {/*       </a> */}
            {/*     ))} */}
            {/*     {showModeToggle && <ModeToggle />} */}
            {/*   </div> */}
            {/* )} */}
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
};
