import { useState } from "react";
import { FaHouse, FaPlus } from "react-icons/fa";

export default function MotorcycleManagement() {
    const [showForm, setShowForm] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-center text-white font-bold text-2xl mb-6">GESTIÓN DE MOTOCICLETAS</h1>

            <div className="flex items-center gap-2 mb-6">
                <a
                    href="/dashboard"
                    className="px-4 py-2 bg-gray-600 text-white rounded border border-white flex items-center"
                >
                    <FaHouse />
                </a>
                <button
                    onClick={() => setShowForm(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded border border-white flex items-center gap-2"
                >
                    <FaPlus /> AÑADIR MOTOCICLETA
                </button>
            </div>

            {/* Add/Edit Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-full max-w-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Añadir/Editar Motocicleta</h2>
                        <form>
                            <div className="mb-3">
                                <label className="block font-medium mb-1">MATRÍCULA</label>
                                <input
                                    type="text"
                                    placeholder="Placa de la motocicleta"
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block font-medium mb-1">MARCA</label>
                                <input
                                    type="text"
                                    placeholder="Marca"
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block font-medium mb-1">MODELO</label>
                                <input
                                    type="text"
                                    placeholder="Modelo"
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block font-medium mb-1">Nº MOTOCICLETA</label>
                                <input
                                    type="text"
                                    placeholder="Nº Motocicleta"
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="px-4 py-2 bg-red-600 text-white rounded"
                                >
                                    CANCELAR
                                </button>
                                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
                                    GUARDAR
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Confirm Delete Modal */}
            {showConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-full max-w-sm p-6">
                        <h2 className="text-lg font-semibold mb-4">¿ESTÁS SEGURO DE ELIMINAR ESTA MOTOCICLETA?</h2>
                        <p className="mb-6 text-center">[Información de la motocicleta aquí]</p>
                        <div className="flex justify-between">
                            <button
                                onClick={() => setShowConfirm(false)}
                                className="px-4 py-2 bg-gray-600 text-white rounded"
                            >
                                CANCELAR
                            </button>
                            <button className="px-4 py-2 bg-red-600 text-white rounded">ACEPTAR</button>
                        </div>
                    </div>
                </div>
            )}

            <table className="w-full border border-white text-center text-white">
                <thead className="bg-gray-700">
                <tr>
                    <th className="p-2 border border-white" colSpan={4}>
                        CLIENTE: <span id="clientName" className="font-medium">[Nombre del Cliente]</span>
                    </th>
                </tr>
                <tr>
                    <th className="p-2 border border-white">MATRÍCULA</th>
                    <th className="p-2 border border-white">MARCA</th>
                    <th className="p-2 border border-white">MODELO</th>
                    <th className="p-2 border border-white">ACCIONES</th>
                </tr>
                </thead>
                <tbody className="bg-white text-black" id="motorcyclesTable">
                {/* Aquí renderizas filas dinámicas */}
                </tbody>
            </table>
        </div>
    );
}
