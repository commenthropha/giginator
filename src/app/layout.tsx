import "./globals.css";
import { Navbar, Footer } from "./(global)";
import type { Metadata } from "next";
import "bulma/css/bulma.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Giginator",
  description:
    "An event ticket website facilitating easy and efficient booking and organisation and events.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} is-flex is-flex-direction-column is-justify-content-space-between`}
      >
        <div>
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
