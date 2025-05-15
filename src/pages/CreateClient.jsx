import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function CreateClient() {
    const [showVehicleForm, setShowVehicleForm] = useState(false);

    const handleClientSubmit = (e) => {
        e.preventDefault();
        // TODO: call saveClient API
        setShowVehicleForm(true);
    };

    const cancelClientCreation = () => {
        // TODO: any cleanup
        setShowVehicleForm(false);
    };

    const handleVehicleSubmit = (e) => {
        e.preventDefault();
        // TODO: call saveMotorcycle API
    };

    const cancelMotorcycleCreation = () => {
        // TODO: any cleanup
        setShowVehicleForm(false);
    };

    return (
        <div className="container mx-auto px-4 py-10 max-w-lg">
            <h1 className="text-center text-white font-bold text-2xl mb-6">CREAR CLIENTE</h1>

            <div className="bg-white rounded-lg shadow-lg p-6">
                <form onSubmit={handleClientSubmit}>
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
                            onClick={cancelClientCreation}
                            className="px-4 py-2 bg-red-600 text-white rounded flex items-center gap-2"
                        >
                            <FaTimes /> CANCELAR
                        </button>
                        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
                            CREAR CLIENTE
                        </button>
                    </div>
                </form>
            </div>

            {showVehicleForm && (
                <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
                    <h2 className="text-center font-semibold text-xl mb-4">CREAR VEHÍCULO</h2>
                    <form onSubmit={handleVehicleSubmit}>
                        <div className="mb-4">
                            <label className="block font-medium mb-1">MATRÍCULA</label>
                            <input
                                type="text"
                                placeholder="Matrícula del vehículo"
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-medium mb-1">MARCA</label>
                            <input
                                type="text"
                                placeholder="Marca del vehículo"
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block font-medium mb-1">MODELO</label>
                            <input
                                type="text"
                                placeholder="Modelo del vehículo"
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="button"
                                onClick={cancelMotorcycleCreation}
                                className="px-4 py-2 bg-red-600 text-white rounded flex items-center gap-2"
                            >
                                <FaTimes /> CANCELAR
                            </button>
                            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                                GUARDAR VEHÍCULO
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}