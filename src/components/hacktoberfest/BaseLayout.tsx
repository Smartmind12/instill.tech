import { ReactNode } from "react";
import dynamic from "next/dynamic";

import { Nav } from "@/components/hacktoberfest";
import { useInView } from "react-intersection-observer";

/* eslint-disable-next-line @typescript-eslint/ban-types */
const Footer = dynamic<{}>(() =>
  import("@/components/ui").then((mod) => mod.Footer)
);

export type BaseLayoutProps = {
  children?: ReactNode;
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const [contentRef, contentIsInView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      className="flex min-h-screen flex-col bg-instillGrey90 bg-top bg-no-repeat"
      style={{ backgroundImage: 'url("/hacktoberfest/background.svg")' }}
    >
      <Nav />
      <div ref={contentRef} className="flex flex-1 flex-col">
        {children}
      </div>
      <div>{contentIsInView ? <Footer /> : null}</div>
    </div>
  );
};
