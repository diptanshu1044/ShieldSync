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
}: FooterProps) => {
  return (
    <footer className="bg-[#0F0E47] w-full px-4 py-6 md:py-4">
      <div className="max-w-container mx-auto">
        <Footer className="bg-[#0F0E47]">
          <FooterContent className="flex flex-col md:flex-row md:justify-evenly gap-8 md:gap-4">
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1 max-w-[18rem]">
              <div className="flex items-center flex-col gap-2">
                <div className="flex gap-2 w-full">
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

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:flex md:gap-4 md:justify-evenly md:flex-1">
              {columns.map((column, index) => (
                <FooterColumn key={index}>
                  <h3 className="text-md pt-1 font-semibold text-white">
                    {column.title}
                  </h3>
                  <div className="flex flex-col gap-1 mt-1">
                    {column.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        className="text-sm text-[#9CA3AF]"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </FooterColumn>
              ))}
            </div>
          </FooterContent>
          <Separator className="mt-6 md:mt-4 bg-gray-500" />
          <FooterBottom>
            <h5 className="text-center w-full text-[#9CA3AF]">{copyright}</h5>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
};
