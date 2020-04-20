import React, { useState } from 'react';

import Header from './components/Header';

import './App.css';
import backgroundImage from './assets/background.jpg';

function App() {

    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    // useState retorna um array com 2 posicoes

    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
    }

    return (
        <div>
            <Header title="Projects" />

            <img width={300} src={backgroundImage} alt=""/>

            <ul>
                {projects.map(project => <li key={project}>{project}</li> )}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </div>
    );
}

export default App;