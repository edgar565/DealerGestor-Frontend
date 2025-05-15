import { useState } from "react";
import { FaHouse, FaSearch, FaPlus } from "react-icons/fa";

export default function ClientManagement() {
    const [showSearch, setShowSearch] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-center text-white font-bold text-2xl mb-6">GESTIÓN DE CLIENTES</h1>

            <div className="flex justify-between mb-6">
                <a
                    href="/dashboard"
                    className="px-4 py-2 bg-gray-600 text-white rounded border border-white flex items-center"
                >
                    <FaHouse />
                </a>
                <button
                    onClick={() => setShowSearch(true)}
                    className="px-4 py-2 bg-gray-600 text-white rounded border border-white flex items-center gap-2"
                >
                    <FaSearch /> BUSCAR CLIENTE
                </button>
            </div>

            {/* Search Modal */}
            {showSearch && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-full max-w-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Buscar Cliente</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block font-medium mb-1">NOMBRE</label>
                                <input
                                    type="text"
                                    placeholder="Por favor ingrese el nombre"
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={() => setShowSearch(false)}
                                    className="px-4 py-2 bg-red-600 text-white rounded"
                                >
                                    CANCELAR
                                </button>
                                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2">
                                    <FaSearch /> BUSCAR
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="mb-6 text-right">
                <button
                    onClick={() => setShowForm(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded border border-white flex items-center gap-2"
                >
                    <FaPlus /> AÑADIR CLIENTE
                </button>
            </div>

            {/* Add/Edit Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-full max-w-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Añadir/Editar Cliente</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block font-medium mb-1">NOMBRE</label>
                                <input
                                    type="text"
                                    placeholder="Nombre del cliente"
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block font-medium mb-1">TELÉFONO</label>
                                <input
                                    type="text"
                                    placeholder="Teléfono"
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
                        <h2 className="text-lg font-semibold mb-4">¿ESTÁS SEGURO DE ELIMINAR ESTE CLIENTE?</h2>
                        <p className="mb-6 text-center">[Información del cliente aquí]</p>
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
                    <th className="p-2 border border-white">NOMBRE</th>
                    <th className="p-2 border border-white">TELÉFONO</th>
                    <th className="p-2 border border-white">VEHÍCULOS</th>
                    <th className="p-2 border border-white">ACCIONES</th>
                </tr>
                </thead>
                <tbody className="bg-white text-black" id="clientsTable">
                {/* Aquí renderizas filas dinámicas */}
                </tbody>
            </table>
        </div>
    );
}
