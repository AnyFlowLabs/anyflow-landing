import React from 'react';

interface ChallengeSolutionProps {
    challenge: string;
    solution: string;
}

const ChallengeSolutionDisplay: React.FC<ChallengeSolutionProps> = ({ challenge, solution }) => {
    return (
        <div>
            <h2>Challenge</h2>
            <p>{challenge}</p>
            <h2>Solution</h2>
            <p>{solution}</p>
        </div>
    );
};

export default ChallengeSolutionDisplay;
