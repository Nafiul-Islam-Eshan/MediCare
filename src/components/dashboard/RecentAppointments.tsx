
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

type Appointment = {
    id: string;
    patient: string;
    doctor: string;
    department: string;
    time: string;
    status: "Confirmed" | "Pending" | "Completed" | "Cancelled";
};

const appointments: Appointment[] = [
    {
        id: "APT-001",
        patient: "Ayesha Rahman",
        doctor: "Dr. Sarah Ahmed",
        department: "Cardiology",
        time: "09:00 AM",
        status: "Confirmed",
    },
    {
        id: "APT-002",
        patient: "Tanvir Hasan",
        doctor: "Dr. Mahmud Karim",
        department: "Neurology",
        time: "10:30 AM",
        status: "Pending",
    },
    {
        id: "APT-003",
        patient: "Nusrat Jahan",
        doctor: "Dr. Farhana Islam",
        department: "Pediatrics",
        time: "11:00 AM",
        status: "Completed",
    },
    {
        id: "APT-004",
        patient: "Rakib Hossain",
        doctor: "Dr. Nadia Sultana",
        department: "Orthopedics",
        time: "01:30 PM",
        status: "Cancelled",
    },
];

const statusStyles: Record<Appointment["status"], string> = {
    Confirmed:
        "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400",
    Pending:
        "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
    Completed:
        "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
    Cancelled:
        "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400",
};

export default function RecentAppointments() {
    return (
        <section className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">

            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Patient</TableHead>
                            <TableHead>Doctor</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {appointments.map((appointment) => (
                            <TableRow key={appointment.id}>
                                <TableCell>
                                    <p className="font-medium">
                                        {appointment.patient}
                                    </p>
                                    <p className="mt-1 text-xs text-slate-500">
                                        {appointment.id}
                                    </p>
                                </TableCell>

                                <TableCell>
                                    <p>{appointment.doctor}</p>
                                    <p className="mt-1 text-xs text-slate-500">
                                        {appointment.department}
                                    </p>
                                </TableCell>

                                <TableCell>{appointment.time}</TableCell>

                                <TableCell>
                                    <span
                                        className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[appointment.status]}`}
                                    >
                                        {appointment.status}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

        </section>
    );
}
