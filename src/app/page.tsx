
import BedOccupancy from "@/components/dashboard/BedOccupancy";
import RecentAppointments from "@/components/dashboard/RecentAppointments";
import StartCard from "@/components/dashboard/StatCard";
import {
  Users,
  Stethoscope,
  CalendarDays,
  BedDouble,

} from "lucide-react";

const stats = [
  {
    title: "Total Patients",
    value: "1,248",
    change: "+12.5%",
    description: "from last month",
    icon: Users,
    iconStyle: "bg-blue-50 text-blue-600",
  },
  {
    title: "Total Doctors",
    value: "48",
    change: "+4.2%",
    description: "from last month",
    icon: Stethoscope,
    iconStyle: "bg-teal-50 text-teal-700",
  },
  {
    title: "Appointments Today",
    value: "86",
    change: "+8.1%",
    description: "from yesterday",
    icon: CalendarDays,
    iconStyle: "bg-violet-50 text-violet-600",
  },
  {
    title: "Available Beds",
    value: "32",
    change: "68 occupied",
    description: "out of 100 beds",
    icon: BedDouble,
    iconStyle: "bg-amber-50 text-amber-700",
  },
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8">
      {/* Page heading */}
      <div>
        <p className="text-sm font-medium text-teal-700">
          OVERVIEW
        </p>

        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Dashboard Overview
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Welcome back! Here&apos;s what&apos;s happening at your hospital.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            Hospital Management System
          </p>
        </div>
      </div>

      {/* Statistics cards */}
      <section
        aria-label="Hospital statistics"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {stats.map((stat, idx) => {
          

          return (
            <StartCard key={idx} {...stat} />
          );
        })}
      </section>

      {/* Main dashboard sections */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <RecentAppointments />
        </div>

        <div className="min-w-0">
          <BedOccupancy totalBeds={300} occupiedBeds={68} />
        </div>
      </section>
    </div>
  );
}
