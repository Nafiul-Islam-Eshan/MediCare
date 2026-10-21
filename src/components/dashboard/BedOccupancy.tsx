
import { BedDouble } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

type BedOccupancyProps = {
  totalBeds?: number;
  occupiedBeds?: number;
};

export default function BedOccupancy({
  totalBeds = 100,
  occupiedBeds = 68,
}: BedOccupancyProps) {
  const safeTotalBeds = Math.max(0, totalBeds);
  const safeOccupiedBeds = Math.min(
    safeTotalBeds,
    Math.max(0, occupiedBeds),
  );

  const availableBeds = safeTotalBeds - safeOccupiedBeds;

  const occupancyRate =
    safeTotalBeds > 0
      ? Math.round((safeOccupiedBeds / safeTotalBeds) * 100)
      : 0;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div className="space-y-1">
          <CardTitle>Bed Occupancy</CardTitle>
          <CardDescription>
            Current hospital bed status
          </CardDescription>
        </div>

        <BedDouble className="size-5 text-emerald-600" />
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-3xl font-bold">
              {occupancyRate}%
            </p>
            <p className="text-sm text-muted-foreground">
              Occupancy rate
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            {safeOccupiedBeds} of {safeTotalBeds} beds
          </p>
        </div>

        <Progress
          value={occupancyRate}
          aria-label="Hospital bed occupancy"
        />

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg bg-muted/50 p-3">
            <p className="text-sm text-muted-foreground">
              Occupied Beds
            </p>
            <p className="mt-1 text-xl font-semibold">
              {safeOccupiedBeds}
            </p>
          </div>

          <div className="rounded-lg bg-emerald-50 p-3 dark:bg-emerald-950">
            <p className="text-sm text-emerald-700 dark:text-emerald-400">
              Available Beds
            </p>
            <p className="mt-1 text-xl font-semibold text-emerald-800 dark:text-emerald-300">
              {availableBeds}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
