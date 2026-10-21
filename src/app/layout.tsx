
import type { Metadata } from "next";
import {  Open_Sans } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/dashboard/Sidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import BrandName from "@/components/shared/BrandName";



const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight:['400']
})

export const metadata: Metadata = {
  title: "MediCare | Hospital Management System",
  description: "Hospital Management System",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${openSans.className} h-full antialiased`}
    >
      <body className="min-h-full">
        <SidebarProvider>
          <Sidebar />

          <SidebarInset>
            <header className="flex h-14 items-center gap-3 border-b px-4">
              <SidebarTrigger />
              <h1 className="font-semibold">
                <BrandName/>
                <span className="text-lg text-slate-700 ">Dashboard</span>
              </h1>
            </header>

            <main className="flex-1 p-4">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
