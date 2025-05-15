import { useState } from "react";
import { FaHouse, FaPlus, FaSearch } from "react-icons/fa";

export default function RepairManagement() {
    const [showForm, setShowForm] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-center text-white font-bold text-2xl mb-6">GESTIÓN DE REPARACIONES</h1>

            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
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
                        <FaPlus /> AÑADIR REPARACIÓN
                    </button>
                </div>
                <button
                    onClick={() => setShowSearch(true)}
                    className="px-4 py-2 bg-gray-600 text-white rounded border border-white flex items-center gap-2"
                >
                    <FaSearch /> BUSCAR REPARACIÓN
                </button>
            </div>

            {/* Add/Edit Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-full max-w-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Añadir/Editar Reparación</h2>
                        <form>
                            <div className="mb-3">
                                <label className="block font-medium mb-1">FECHA</label>
                                <input type="date" className="w-full px-3 py-2 border rounded" required />
                            </div>
                            <div className="mb-3">
                                <label className="block font-medium mb-1">OPERARIO</label>
                                <select className="w-full px-3 py-2 border rounded" required>
                                    <option disabled>Selecciona un operario</option>
                                    <option>JOSE</option>
                                    <option>SAID</option>
                                    <option>VICENTE</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label className="block font-medium mb-1">ESTADO</label>
                                <select className="w-full px-3 py-2 border rounded" required>
                                    <option disabled>Selecciona un estado</option>
                                    <option>EN REPARACIÓN</option>
                                    <option>PEDIDO RECAMBIO</option>
                                    <option>FINALIZADA - CONTACTO</option>
                                    <option>FINALIZADA</option>
                                    <option>CIERRE</option>
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

            {/* Search Modal */}
            {showSearch && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-full max-w-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Buscar Reparación</h2>
                        <form>
                            <div className="mb-3">
                                <label className="block font-medium mb-1">MATRÍCULA</label>
                                <input type="text" placeholder="Introduce la matrícula" className="w-full px-3 py-2 border rounded" />
                            </div>
                            <div className="mb-6">
                                <label className="block font-medium mb-1">LLAVERO</label>
                                <input type="text" placeholder="Acerca el llavero" className="w-full px-3 py-2 border rounded" />
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

            {/* Confirm Delete Modal */}
            {showConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-full max-w-sm p-6">
                        <h2 className="text-lg font-semibold mb-4">¿ESTÁS SEGURO DE ELIMINAR ESTA REPARACIÓN?</h2>
                        <p className="mb-6 text-center">[Información de la reparación aquí]</p>
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
                    <th className="p-2 border border-white">FECHA</th>
                    <th className="p-2 border border-white">MATRÍCULA</th>
                    <th className="p-2 border border-white">MARCA</th>
                    <th className="p-2 border border-white">MODELO</th>
                    <th className="p-2 border border-white">OPERARIO</th>
                    <th className="p-2 border border-white">ESTADO</th>
                    <th className="p-2 border border-white">PARTE</th>
                    <th className="p-2 border border-white">ACCIONES</th>
                </tr>
                </thead>
                <tbody className="bg-white text-black" id="repairsTable">
                {/* Aquí renderizas filas dinámicas */}
                </tbody>
            </table>
        </div>
    );
}