import React from 'react';

import Header from './components/Header';

function App() {
    return (
        <div>
            <Header title="Homepage">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                </ul>
            </Header>
            <Header title="Projects" />
        </div>
    );
}

export default App;