/**
 * This class show a Clock with a name
 */
import React , {useEffect, useState} from 'react';


const Clock = () => {

    const initialPerson = {
        date: new Date(),
        age: 0,
        name: 'Santiago',
        lastName: 'PretyBoy'
    }

    const updateData = () => {
        setTimeout(setNewDataToPerson, 1000);
    }
    
    const setNewDataToPerson = () => {
        setPerson(prevState => ({
            age: prevState.age + 1,
            name: prevState.name,
            lastName: prevState.lastName,
            date : new Date(),
        }));
    }

    const [person, setPerson] = useState(initialPerson);

    useEffect(() => {
        updateData();
        return () => {
            console.log('person is going To Unmount');
        };
    }, );

    return (
        <div>
            <h2> Name: {person.name} </h2>
            <h3> Last Name: {person.lastName} </h3>
            <h3> Age: {person.age} </h3>
            <h3> Date: {person.date.toLocaleTimeString()} </h3>
        </div>
    );
};


export default Clock;
