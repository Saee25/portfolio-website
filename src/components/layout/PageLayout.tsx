import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { GalaxyBackground } from "@/components/background/GalaxyBackground";

export const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col relative">
    <GalaxyBackground />
    <Navbar />
    <main className="flex-1 pt-20">{children}</main>
    <Footer />
  </div>
);
