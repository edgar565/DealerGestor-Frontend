import { useState } from "react";
import { FaHouse, FaPlus } from "react-icons/fa";

export default function TaskManagement() {
    const [showForm, setShowForm] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [currentInfo, setCurrentInfo] = useState("");

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-center text-white font-bold text-2xl mb-8">GESTIÓN DE TAREAS</h1>

            <div className="flex justify-between items-center mb-6">
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
                    <FaPlus /> AÑADIR TAREA
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {["JOSE", "SAID"].map((user) => (
                    <div key={user} className="flex-1">
                        <h2 className="text-white text-center font-semibold text-xl mb-4">{user}</h2>
                        <table className="w-full border border-white text-center text-white">
                            <thead className="bg-gray-700">
                            <tr>
                                <th className="p-2 border border-white">DESCRIPCIÓN</th>
                                <th className="p-2 border border-white">FECHA</th>
                                <th className="p-2 border border-white">ESTADO</th>
                                <th className="p-2 border border-white">ACCIONES</th>
                            </tr>
                            </thead>
                            <tbody id={`tasks${user}`} className="bg-white text-black">
                            {/* Filas dinámicas */}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>

            {/* Add/Edit Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-full max-w-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Añadir/Editar Tarea</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block font-medium mb-1">DESCRIPCIÓN</label>
                                <textarea
                                    rows={3}
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block font-medium mb-1">FECHA</label>
                                <input type="date" className="w-full px-3 py-2 border rounded" required />
                            </div>
                            <div className="mb-6">
                                <label className="block font-medium mb-1">ESTADO</label>
                                <select className="w-full px-3 py-2 border rounded" required>
                                    <option disabled>Selecciona un estado</option>
                                    <option>PENDIENTE</option>
                                    <option>EN PROCESO</option>
                                    <option>COMPLETADA</option>
                                </select>
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
                        <h2 className="text-lg font-semibold mb-4">¿ESTÁS SEGURO DE ELIMINAR ESTA TAREA?</h2>
                        <p className="mb-6 text-center">{currentInfo}</p>
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
        </div>
    );
}