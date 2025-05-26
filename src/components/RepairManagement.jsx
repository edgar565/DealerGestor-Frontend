import React, { useEffect, useState } from 'react';
import Header from './ui/Header';
import Modal from './ui/Modal';
import Table from './ui/Table';
import '../styles/management.css';
import { Button } from "./ui/Button.jsx";
import { getApiUrl } from '../services/api.js';

const RepairManagement = () => {
    const [repairs, setRepairs] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [selectedRepair, setSelectedRepair] = useState(null);

    const leftButton = [
        <Button data-bs-toggle="modal" data-bs-target="#repairFormModal" onClick={() => setSelectedRepair(null)}>
            <i className="fa-solid fa-plus me-2"></i>AÑADIR REPARACIÓN
        </Button>
    ];

    const rightButton = [
        <Button variant={"secondary"} data-bs-toggle="modal" data-bs-target="#searchModal">
            <i className="fa-solid fa-magnifying-glass me-2"></i>BUSCAR REPARACIÓN
        </Button>
    ];

    useEffect(() => {
        fetchRepairs();
        fetchVehicles();
    }, []);

    const fetchRepairs = async () => {
        try {
            const response = await fetch(`${getApiUrl()}/api/repairs`);
            const data = await response.json();
            setRepairs(data);
        } catch (error) {
            console.error('Error al cargar las reparaciones:', error);
        }
    };

    const fetchVehicles = async () => {
        try {
            const response = await fetch(`${getApiUrl()}/api/vehicles`);
            const data = await response.json();
            setVehicles(data);
        } catch (error) {
            console.error('Error al cargar los vehículos:', error);
        }
    };

    const saveRepair = async (e) => {
        e.preventDefault();
        const id = document.getElementById('repairId').value;
        const repair = {
            date: document.getElementById('date').value,
            vehicleId: document.getElementById('citaMarcaModelo').value,
            operator: document.getElementById('operator').value,
            status: document.getElementById('status').value
        };

        try {
            const response = await fetch(`${getApiUrl()}/api/repairs/${id ? `update/${id}` : 'save'}`, {
                method: id ? 'PUT' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(repair)
            });

            if (!response.ok) {
                throw new Error('Error al guardar la reparación');
            }

            await fetchRepairs();
            document.getElementById('repairForm').reset();
        } catch (error) {
            console.error(error);
        }
    };

    const search = async (e) => {
        e.preventDefault();
        const plate = document.getElementById('searchMatricula').value;
        const keychain = document.getElementById('keychain').value;

        try {
            const endpoint = plate ? `vehicle/${plate}` : `keychain/${keychain}`;
            const response = await fetch(`${getApiUrl()}/api/repairs/${endpoint}`);
            const data = await response.json();
            setRepairs(data);
        } catch (error) {
            console.error('Error al buscar reparación:', error);
        }
    };

    const confirmDelete = async () => {
        if (!selectedRepair) return;

        try {
            const response = await fetch(`${getApiUrl()}/api/repairs/delete/${selectedRepair.id}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error('Error al eliminar la reparación');
            await fetchRepairs();
        } catch (error) {
            console.error(error);
        }
    };

    const headers = ["FECHA", "MATRÍCULA", "MARCA", "MODELO", "OPERARIO", "ESTADO", "PARTE", "ACCIONES"];

    return (
        <div className="container">
            <Header title="GESTIÓN DE REPARACIONES" leftButton={leftButton} rightContent={rightButton} />

            <Modal id="repairFormModal" title="Añadir/Editar Reparación">
                <form id="repairForm" onSubmit={saveRepair}>
                    <input type="hidden" id="repairId" />
                    <div className="form-group mb-3">
                        <label htmlFor="date" className="form-label">FECHA</label>
                        <input type="date" className="form-control border-black" id="date" required />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="citaMarcaModelo" className="form-label">VEHÍCULO</label>
                        <select id="citaMarcaModelo" className="form-control border-black" required>
                            <option value="" disabled selected>Selecciona un vehículo</option>
                            {vehicles.map(vehicle => (
                                <option key={vehicle.id} value={vehicle.id}>{vehicle.licensePlate} - {vehicle.brand} {vehicle.model}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="operator" className="form-label">OPERARIO</label>
                        <select id="operator" className="form-control border-black" required>
                            <option value="" disabled selected>Selecciona un operario</option>
                            <option value="JOSE">JOSE</option>
                            <option value="SAID">SAID</option>
                            <option value="VICENTE">VICENTE</option>
                        </select>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="status" className="form-label">ESTADO</label>
                        <select id="status" className="form-control border-black" required>
                            <option value="" disabled selected>Selecciona un estado</option>
                            <option value="EN REPARACIÓN">EN REPARACIÓN</option>
                            <option value="PEDIDO RECAMBIO">PEDIDO RECAMBIO</option>
                            <option value="FINALIZADA - CONTACTO">FINALIZADA - CONTACTO</option>
                            <option value="FINALIZADA">FINALIZADA</option>
                            <option value="CIERRE">CIERRE</option>
                        </select>
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">CANCELAR</button>
                        <button type="submit" className="btn btn-success">GUARDAR</button>
                    </div>
                </form>
            </Modal>

            <Modal id="searchModal" title="Buscar Reparación">
                <form id="search" onSubmit={search}>
                    <div className="form-group mb-3">
                        <label htmlFor="searchMatricula" className="form-label">MATRÍCULA</label>
                        <input type="text" className="form-control border-black" id="searchMatricula" placeholder="Por favor ingrese la matrícula" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="keychain" className="form-label">LLAVERO</label>
                        <input type="text" className="form-control border-black" id="keychain" placeholder="Por favor acerque el llavero" />
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">CANCELAR</button>
                        <button type="submit" className="btn btn-success"><i className="fa-solid fa-magnifying-glass me-2"></i>BUSCAR</button>
                    </div>
                </form>
            </Modal>

            <Modal id="confirmModal" title="¿ESTÁS SEGURO DE ELIMINAR ESTA REPARACIÓN?">
                <p id="motoInfo"></p>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCELAR</button>
                    <button type="button" className="btn btn-danger" id="confirmDeleteBtn" onClick={confirmDelete}>ELIMINAR</button>
                </div>
            </Modal>

            <Table headers={headers} id="repairsTable" data={repairs} />
        </div>
    );
};

export default RepairManagement;
