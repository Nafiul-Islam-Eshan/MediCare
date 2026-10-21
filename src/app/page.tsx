
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
          
          const {change, icon, value, description, title} = stat;

          return (
            <StartCard key={idx} title={title} description={description} change={change} value={value} icon={icon} />
          );
        })}
      </section>

      {/* Main dashboard sections */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 xl:col-span-2">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Recent Appointments
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                A quick overview of scheduled visits.
              </p>
            </div>

            <CalendarDays className="text-teal-700" size={22} />
          </div>

          <div className="mt-8 rounded-xl border border-dashed border-slate-200 px-4 py-10 text-center">
            <CalendarDays
              className="mx-auto text-slate-400"
              size={32}
            />

            <p className="mt-3 font-medium text-slate-700">
              Appointment list coming next
            </p>

            <p className="mt-1 text-sm text-slate-500">
              We&apos;ll add appointment records in the next step.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Bed Occupancy
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Current bed availability
              </p>
            </div>

            <BedDouble className="text-teal-700" size={22} />
          </div>

          <div className="mt-8">
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-3xl font-bold text-slate-900">
                  68%
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Occupancy rate
                </p>
              </div>

              <p className="text-sm font-medium text-teal-700">
                68 / 100 beds
              </p>
            </div>

            <div
              className="mt-5 h-2.5 overflow-hidden rounded-full bg-slate-100"
              role="progressbar"
              aria-label="Bed occupancy"
              aria-valuenow={68}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="h-full w-[68%] rounded-full bg-teal-600" />
            </div>

            <div className="mt-5 flex items-center justify-between text-sm">
              <span className="text-slate-500">Occupied</span>
              <span className="font-medium text-slate-800">
                68 beds
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-slate-500">Available</span>
              <span className="font-medium text-emerald-700">
                32 beds
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
