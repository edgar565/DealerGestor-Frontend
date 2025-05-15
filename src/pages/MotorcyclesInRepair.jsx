import React from "react";

export default function MotorcyclesInRepair() {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-center text-white font-bold text-2xl mb-6">MOTOS EN REPARACIÓN</h1>
            <table className="w-full border border-white text-center text-white">
                <thead className="bg-gray-700">
                <tr>
                    <th className="p-2 border border-white">FECHA</th>
                    <th className="p-2 border border-white">MATRÍCULA</th>
                    <th className="p-2 border border-white">MARCA</th>
                    <th className="p-2 border border-white">MODELO</th>
                    <th className="p-2 border border-white">ESTADO</th>
                </tr>
                </thead>
                <tbody id="table-repairs" className="bg-white text-black">
                {/* Aquí renderizas las filas dinámicas de reparaciones */}
                </tbody>
            </table>
        </div>
    );
}