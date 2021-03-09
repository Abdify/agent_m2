import React from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

const Chapter = () => {
    const {url} = useRouteMatch();
    const subjectLink = url.split("/").slice(0, 2).join("/");
    return (
        <div className="topic">
            <h2> {url} </h2>
            <br />
            <p>This is a very long description of this chapter! <br/>Please don't get bored!</p>
            <li className="link">
                <Link to={`${subjectLink}`} className="link-text">
                    Go back to {subjectLink}
                </Link>
            </li>
        </div>
    );
};

export default Chapter;