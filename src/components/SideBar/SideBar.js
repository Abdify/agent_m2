import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        const data = ["Calculus", "Linear-Algebra", "Real-Analysis"];
        setSubjects(data);
    }, [])


    return (
        <nav className="side-bar">
            <h2 className="logo">
                <Link to="/" className="link-text">
                    M
                </Link>
            </h2>

            {subjects.map((subject) => (
                <li>
                    <Link to={`/${subject}`} className="link-text">
                        {subject}
                    </Link>
                </li>
            ))}
        </nav>
    );
};

export default SideBar;