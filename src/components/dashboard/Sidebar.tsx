
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  Stethoscope,
  Users,
  BedDouble,
  CreditCard,
} from "lucide-react";

import logo from "@/assets/MediCareLogo.png";

import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Appointments", url: "/appointments", icon: CalendarDays },
  { title: "Doctors", url: "/doctors", icon: Stethoscope },
  { title: "Patients", url: "/patients", icon: Users },
  { title: "Beds & Rooms", url: "/beds", icon: BedDouble },
  { title: "Billing", url: "/billing", icon: CreditCard },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <ShadcnSidebar collapsible="offcanvas">
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-3 p-2">
          <Image src={logo} alt="MediCare logo" width={40} height={40} />
          <span className="text-lg font-bold">MediCare</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => {

                // console.log({
                //   item: item.title,
                //   pathname,
                //   itemUrl: item.url,
                //   isActive: pathname === item.url,
                //   activeClass:
                //     pathname === item.url
                //       ? "bg-emerald-200 text-emerald-700 font-semibold"
                //       : "",
                // });

                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton
                      variant={'outline'}
                      size={'lg'}
                      render={<Link href={item.url} />}
                      isActive={pathname === item.url}
                      tooltip={item.title}
                      className="transition-colors duration-130 hover:bg-green-100 hover:text-green-700"
                      
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                )

              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  );
}
