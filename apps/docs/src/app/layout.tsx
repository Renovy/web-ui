import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Theme from "./theme-toggle";
import { Header, SideNav } from "@/components";

import "@renovy/web-ui/dist/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <div className="justify-center flex w-full">
            <div className="p-2 lg:max-w-screen-2xl w-full">
              <Header />

              <div className="flex">
                <aside className="hidden lg:block">
                  <SideNav />
                </aside>

                <main className="flex-1 py-5 flex flex-col gap-y-5">{children}</main>
              </div>

              <footer />
            </div>
          </div>
        </Theme>
      </body>
    </html>
  );
}
