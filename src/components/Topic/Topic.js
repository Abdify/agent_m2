import React from 'react';
import { useParams } from 'react-router';
import './Topic.css';

const Topic = () => {
    const {topicName} = useParams();
    return (
        <div className="topic">
            <h1>{topicName}!</h1>
        </div>
    );
};

export default Topic;