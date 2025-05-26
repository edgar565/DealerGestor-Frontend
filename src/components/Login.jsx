import React, { useState } from 'react';
import { Button } from "./ui/Button.jsx";
import { Input } from "./ui/Input.jsx";
import '../styles/styles.css';
import { useNavigate } from 'react-router-dom';
import { setThemeConfig } from '../utils/themeConfig';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://34.200.147.24:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) throw new Error('Invalid credentials');

            const data = await response.json();
            localStorage.setItem('token', data.token);

            try {
                const configResponse = await fetch('http://34.200.147.24:8080/company/1', {
                    headers: {
                        'Authorization': `Bearer ${data.token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (configResponse.ok) {
                    const configData = await configResponse.json();
                    // Guarda en configuración global para usar en cualquier parte
                    setThemeConfig({
                        primaryColor: configData.primaryColor,
                        secondaryColor: configData.secondaryColor,
                        logo: configData.logoUrl
                    });
                } else {
                    console.warn('No se pudo cargar la configuración del tema');
                }

            } catch (e) {
                console.error('Error cargando configuración', e);
            }

            navigate('/dashboard');
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <main className="d-flex align-items-center py-5">
            <div className="form-signin m-auto bg-white rounded shadow px-5">
                <form onSubmit={handleSubmit} className="p-5">
                    <div className="d-flex align-items-center justify-content-center">
                        <img
                            className="mb-4"
                            src="/DealerGestor-logo_edited.jpg"
                            alt="Logo DealerGestor"
                            width="114"
                            height="95"
                        />
                    </div>
                    <h1 className="text-center text-black font-bold mb-4 text-2xl mt-1 ">
                        Iniciar Sesión
                    </h1>

                    <div className="form-floating mb-3 ">
                        <Input
                            type="username"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Usuario</label>
                    </div>

                    <div className="form-floating">
                        <Input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>

                    <Button className="btn btn-primary w-100 py-2 mt-5" type="submit">
                        Iniciar Sesión
                    </Button>
                </form>
            </div>
        </main>
    );
};

export default Login;
