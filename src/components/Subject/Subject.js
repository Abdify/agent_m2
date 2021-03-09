import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import './Subject.css';

const Subject = () => {
    const {url} = useRouteMatch();
    const [chapters, setChapters] = useState([]);
    useEffect(() => {
        const data = ["Chapter-1", "Chapter-2", "Chapter-3"];
        setChapters(data);
    }, []);


    return (
        <div className="subject">
            <h1> {url} </h1>
            <div>
                {chapters.map((chapter) => (
                    <li className="link">
                        <Link to={`${url}/${chapter}`} className="link-text">
                            {chapter}
                        </Link>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Subject;