export default function AccidentMotorcycles() {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-center text-white font-bold text-2xl mb-8">MOTOS SINIESTROS</h1>
            <table className="table-auto w-full border border-white text-white">
                <thead>
                <tr className="text-center bg-gray-700">
                    <th className="p-2 border border-white">FECHA</th>
                    <th className="p-2 border border-white">MATRÍCULA</th>
                    <th className="p-2 border border-white">MARCA</th>
                    <th className="p-2 border border-white">MODELO</th>
                    <th className="p-2 border border-white">ASEGURADORA</th>
                    <th className="p-2 border border-white">ESTADO</th>
                </tr>
                </thead>
                <tbody id="motos_siniestros" className="text-black bg-white text-center"></tbody>
            </table>
        </div>
    );
}