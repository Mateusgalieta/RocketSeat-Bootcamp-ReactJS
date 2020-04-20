import React, { useState, useEffect } from 'react';
import api from './services/api';
import Header from './components/Header';
import './App.css';

function App() {

    const [projects, setProjects] = useState([]);

    // useState retorna um array com 2 posicoes

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, []);

    async function handleAddProject() {
        // setProjects([...projects, `Novo projeto ${Date.now()}`]);

        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Mateus Galieta",
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <div>
            <Header title="Projects" />

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li> )}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </div>
    );
}

export default App;