// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard.jsx';
import AppointmentManagement from './pages/AppointmentManagement.jsx';
import AccidentManagement from './pages/AccidentManagement.jsx';
import RepairManagement from './pages/RepairManagement.jsx';
import TaskManagement from './pages/TaskManagement.jsx';
import ClientManagement from './pages/ClientManagement.jsx';
import CreateClient from './pages/CreateClient.jsx';
import MotorcycleManagement from './pages/MotorcycleManagement.jsx';
import MotorcyclesInRepair from './pages/MotorcyclesInRepair.jsx';
import DailyAppointments from './pages/DailyAppointments.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/appointments" element={<AppointmentManagement />} />
                <Route path="/accidents" element={<AccidentManagement />} />
                <Route path="/repairs" element={<RepairManagement />} />
                <Route path="/tasks" element={<TaskManagement />} />
                <Route path="/clients" element={<ClientManagement />} />
                <Route path="/clients/new" element={<CreateClient />} />
                <Route path="/motorcycles" element={<MotorcycleManagement />} />
                <Route path="/in-repair" element={<MotorcyclesInRepair />} />
                <Route path="/today" element={<DailyAppointments />} />
                {/* Add more routes here as you build new pages */}
            </Routes>
        </Router>
    );
}

export default App;
