import type { Metadata } from "next";

import Image from "next/image";
import "../../styles/app.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "EcoMinds | Home",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
