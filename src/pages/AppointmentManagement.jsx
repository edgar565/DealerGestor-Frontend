import { useState } from "react";

export default function AppointmentManagement() {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-center text-white font-bold text-2xl mb-6">GESTIÓN DE CITAS</h1>

            <div className="mb-6 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <a href="/dashboard" className="btn bg-gray-600 text-white border border-white">
                        <i className="fas fa-house"></i>
                    </a>
                    <button
                        className="btn bg-blue-600 text-white border border-white"
                        onClick={() => setShowAddModal(true)}
                    >
                        <i className="fas fa-plus mr-2"></i>AÑADIR CITA
                    </button>
                </div>
                <button
                    className="btn bg-gray-600 text-white border border-white"
                    onClick={() => setShowSearchModal(true)}
                >
                    <i className="fas fa-magnifying-glass mr-2"></i>BUSCAR CITA
                </button>
            </div>

            <table className="table-auto w-full text-white border border-white">
                <thead>
                <tr className="text-center bg-gray-700">
                    <th className="p-2 border border-white">FECHA</th>
                    <th className="p-2 border border-white">HORA</th>
                    <th className="p-2 border border-white">CLIENTE</th>
                    <th className="p-2 border border-white">VEHÍCULO</th>
                    <th className="p-2 border border-white">TAREA</th>
                    <th className="p-2 border border-white">ACCIONES</th>
                </tr>
                </thead>
                <tbody id="citasTable" className="text-black bg-white text-center"></tbody>
            </table>

            {/* Aquí irían los modales con lógica individual, si deseas te los paso como componentes separados para mantener ordenado el proyecto */}
        </div>
    );
}
