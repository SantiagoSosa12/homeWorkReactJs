import axios from "axios";
import React, { useState } from 'react';

const ExampleAxios = () => {

    const [name, setName] = useState('Empty');

    const geNameRandom = () => {
        axios.get('https://randomuser.me/api/')
            .then(function (response) {
                const nameDefault = response.data.results[0].name;
                setName(`${nameDefault.first} - ${nameDefault.last}`);
            })
            .catch(function (error) {
                alert(error);
            })
    }

    return (
        <div>
            <h1>Example axios</h1>
            <h2> ** {name} ** </h2>
            <button onClick={geNameRandom}> Update Name </button>
        </div>
    );
};

export default ExampleAxios;
