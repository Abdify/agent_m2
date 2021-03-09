import React, { useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Question from '../Question/Question';
import './Topic.css';

const Topic = () => {
    const {topicName} = useParams();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const data = ["Why am i asking questions?", "Is this a question?", "Question-3"];
        setQuestions(data);
    }, []);
    
    const { url } = useRouteMatch();
    const subjectLink = url.split("/").slice(0, 2).join("/");
    
    return (
        <div className="topic">
            <h1>{topicName}!</h1>

            {questions.map((question, i) => (
                <Question question={question} number={i + 1} />
            ))}

            <li className="link">
                <Link to={`${subjectLink}`} className="link-text">
                    Go back to {subjectLink}
                </Link>
            </li>
        </div>
    );
};

export default Topic;