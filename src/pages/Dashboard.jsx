import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-center text-white font-bold text-2xl mb-8 mt-5">PANEL DE ADMINISTRACIÓN</h1>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Link to="/appointments" className="btn-dashboard">GESTIÓN DE CITAS</Link>
                <Link to="/repairs" className="btn-dashboard">GESTIÓN DE REPARACIONES</Link>
                <Link to="/accidents" className="btn-dashboard">GESTIÓN DE SINIESTROS</Link>
                <Link to="/tasks" className="btn-dashboard">GESTIÓN DE TAREAS</Link>
                <Link to="/clients" className="btn-dashboard">GESTIÓN DE CLIENTES</Link>
                <Link to="/parts" className="btn-dashboard">GESTIÓN DE PARTES</Link>
            </div>

            {/* Calendario aquí - Placeholder */}
            <div className="bg-white rounded shadow p-4" id="calendar">
                {/* Aquí deberías montar FullCalendar como componente React */}
                <p className="text-center text-gray-500">[Aquí irá el calendario con FullCalendar]</p>
            </div>
        </div>
    );
}