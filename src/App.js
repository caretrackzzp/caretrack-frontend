import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Projects from './pages/Projects';
import Reports from './pages/Reports';
import Upload from './pages/Upload';
import Navbar from './components/Navbar';
import './styles.css';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/upload" element={<Upload />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
