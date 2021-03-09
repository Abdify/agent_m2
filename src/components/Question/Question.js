import React from 'react';
import './Question.css';

const Question = ({question, number}) => {
    return (
        <div className="question">
            <h3>{number}. {question}</h3>
        </div>
    );
};

export default Question;