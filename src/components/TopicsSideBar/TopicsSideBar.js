import React, { useEffect, useState } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';

const TopicsSideBar = () => {
    const {url} = useRouteMatch();
    const {subjectName, chapterName} = useParams();
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        const data = ["Function", "Limit", "Topology", "Graph", "Neighborhood", "Kichu ekta", "Aro ekta important topic"];
        setTopics(data);
    }, []);

    return (
        <div className="side-bar">
            <h2 className="logo">
                <Link to="/" className="link-text">
                    M
                </Link>
            </h2>
            <li>
                <Link to={`/${subjectName}/${chapterName}/`} className="link-text">
                    Introduction to {chapterName}
                </Link>
            </li>
            {topics.map((topic) => (
                <li>
                    <Link to={`/${subjectName}/${chapterName}/${topic}`} className="link-text">
                        {topic}
                    </Link>
                </li>
            ))}
        </div>
    );
};

export default TopicsSideBar;