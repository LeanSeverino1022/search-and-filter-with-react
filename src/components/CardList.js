import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    return (
        <div className ='w-80-l center pt2'>
            {robots.map((robot, i) => {
                return (
                    <Card
                        key={robot.id}
                        id={robot.id}
                        name={robot.name}
                        email={robot.email}
                    />
                );
            })}
        </div>
    );
};

export default CardList;