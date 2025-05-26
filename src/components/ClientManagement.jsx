import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/ui/Header';
import Modal from '../components/ui/Modal';
import Table from '../components/ui/Table';
import { Button } from './ui/Button';

const ClientManagement = () => {
    const [clients, setClients] = useState([]);
    const [formData, setFormData] = useState({ id: '', nombre: '', telefono: '' });
    const [searchTerm, setSearchTerm] = useState('');
    const [clientToDelete, setClientToDelete] = useState(null);

    const navigate = useNavigate();

    const headers = ['NOMBRE', 'TELÉFONO', 'VEHÍCULOS', 'ACCIONES'];

    // Simulated data fetching
    useEffect(() => {
        const initialClients = [
            { id: 1, nombre: 'Juan Pérez', telefono: '123456789', vehiculos: 2 },
            { id: 2, nombre: 'María Gómez', telefono: '987654321', vehiculos: 1 }
        ];
        setClients(initialClients);
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // You can call your backend here instead
        const filtered = clients.filter((c) => c.nombre.toLowerCase().includes(searchTerm.toLowerCase()));
        setClients(filtered);
    };

    const handleSaveClient = (e) => {
        e.preventDefault();
        const updatedClients = formData.id
            ? clients.map((client) => (client.id === Number(formData.id) ? { ...formData, id: Number(formData.id) } : client))
            : [...clients, { ...formData, id: Date.now(), vehiculos: 0 }];
        setClients(updatedClients);
        setFormData({ id: '', nombre: '', telefono: '' });
        document.getElementById('clientFormModal-close')?.click();
    };

    const handleEdit = (client) => {
        setFormData(client);
    };

    const handleConfirmDelete = () => {
        if (clientToDelete) {
            setClients((prev) => prev.filter((c) => c.id !== clientToDelete.id));
            setClientToDelete(null);
        }
    };

    const leftButton = [
        <Button data-bs-toggle="modal" data-bs-target="#clientFormModal" key="add">
            <i className="fa-solid fa-plus me-2"></i>AÑADIR CLIENTE
        </Button>
    ];

    const rightButton = [
        <Button variant="secondary" data-bs-toggle="modal" data-bs-target="#searchModal" key="search">
            <i className="fa-solid fa-magnifying-glass me-2"></i>BUSCAR CLIENTE
        </Button>
    ];

    const rows = clients.map((client) => [
        client.nombre,
        client.telefono,
        client.vehiculos,
        <>
            <Button size="sm" onClick={() => handleEdit(client)} data-bs-toggle="modal" data-bs-target="#clientFormModal">
                <i className="fa-solid fa-pen-to-square"></i>
            </Button>
            <Button variant="danger" size="sm" className="ms-2" data-bs-toggle="modal" data-bs-target="#confirmModal" onClick={() => setClientToDelete(client)}>
                <i className="fa-solid fa-trash"></i>
            </Button>
            {/* Botón para ver vehículos */}
            <Button
                variant="info"
                size="sm"
                className="ms-2"
                onClick={() => navigate(`/vehicles/${client.id}`)}
            >
                <i className="fa-solid fa-car me-1"></i>VER VEHÍCULOS
            </Button>
        </>
    ]);

    return (
        <div className="container">
            <Header title="GESTIÓN DE CLIENTES" leftButton={leftButton} rightContent={rightButton} />

            <Modal id="searchModal" title="Buscar Cliente">
                <form onSubmit={handleSearchSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="searchClient" className="form-label">NOMBRE</label>
                        <input
                            type="text"
                            className="form-control border-black"
                            id="searchClient"
                            placeholder="Por favor ingrese el nombre"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            required
                        />
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <button type="button" className="btn btn-danger border-black" data-bs-dismiss="modal">CANCELAR</button>
                        <button type="submit" className="btn btn-success border-black">
                            <i className="fa-solid fa-magnifying-glass me-2"></i>BUSCAR
                        </button>
                    </div>
                </form>
            </Modal>

            <Modal id="clientFormModal" title="Añadir/Editar Cliente">
                <form onSubmit={handleSaveClient}>
                    <input type="hidden" id="clientId" value={formData.id} />
                    <div className="form-group mb-3">
                        <label htmlFor="nombre" className="form-label">NOMBRE</label>
                        <input
                            type="text"
                            className="form-control border-black"
                            id="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            placeholder="Nombre del cliente"
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="telefono" className="form-label">TELÉFONO</label>
                        <input
                            type="text"
                            className="form-control border-black"
                            id="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            placeholder="Teléfono"
                            required
                        />
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <button type="button" className="btn btn-danger border-black" data-bs-dismiss="modal" id="clientFormModal-close">CANCELAR</button>
                        <button type="submit" className="btn btn-success border-black">GUARDAR</button>
                    </div>
                </form>
            </Modal>

            <Modal id="confirmModal" title="¿ESTÁS SEGURO DE ELIMINAR ESTE CLIENTE?">
                <p>{clientToDelete?.nombre}</p>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">CANCELAR</button>
                    <button type="button" className="btn btn-success" onClick={handleConfirmDelete} data-bs-dismiss="modal">ACEPTAR</button>
                </div>
            </Modal>

            <Table headers={headers} rows={rows} />
        </div>
    );
};

export default ClientManagement;