import React, { useEffect, useState } from "react";

export default function DailyAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [dateTitle, setDateTitle] = useState("");

    useEffect(() => {
        // TODO: fetch today's appointments from API and set both appointments and dateTitle
        // Example:
        // const today = new Date().toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
        // setDateTitle(`CITAS DIARIAS - ${today}`);
        // fetch(`/api/appointments/today`).then(res => res.json()).then(data => setAppointments(data));
    }, []);

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-center text-white font-bold text-2xl mb-6" id="title">
                {dateTitle}
            </h1>
            <table className="w-full border border-white text-center text-white">
                <thead className="bg-gray-700">
                <tr>
                    <th className="p-2 border border-white">HORA</th>
                    <th className="p-2 border border-white">MATRÍCULA</th>
                    <th className="p-2 border border-white">MARCA</th>
                    <th className="p-2 border border-white">MODELO</th>
                </tr>
                </thead>
                <tbody className="bg-white text-black" id="appointments">
                {appointments.map((appt) => (
                    <tr key={appt.id}>
                        <td className="p-2 border border-gray-300">{appt.time}</td>
                        <td className="p-2 border border-gray-300">{appt.licensePlate}</td>
                        <td className="p-2 border border-gray-300">{appt.brand}</td>
                        <td className="p-2 border border-gray-300">{appt.model}</td>
                    </tr>
                ))}
                {appointments.length === 0 && (
                    <tr>
                        <td colSpan={4} className="p-4 text-gray-500">
                            No hay citas para hoy.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}