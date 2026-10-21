
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  description?: string;
};

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  description = "from last month",
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <div className="rounded-lg bg-emerald-50 p-2 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
          <Icon size={20} />
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          {value}
        </h2>

        <div className="mt-2 flex flex-wrap items-center gap-1 text-sm">
          <span className="inline-flex items-center font-medium text-emerald-600">
            <ArrowUpRight size={16} />
            {change}
          </span>

          <span className="text-slate-500">{description}</span>
        </div>
      </div>
    </div>
  );
}
