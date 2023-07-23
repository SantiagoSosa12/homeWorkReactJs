import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import { TYPEOPERATION } from '../../models/TypeOperation.enum';


const ContactComponent = ({ contact , operationsContact}) => {

    const showAviability = () => {
        console.log('Is Connected: ' + contact.connected);
        return <i className='bi-toggle-on task-action'
        onClick={ () => changeConected() } 
        style={{color : contact.connected ? 'green' : 'gray' }}></i>;
    }

    const changeConected = () => {
        contact.connected = !contact.connected;
        operationsContact(contact , TYPEOPERATION.UPDATE)
    }

    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.lastName}</td>
            <td>{contact.email}</td>
            <td>{ showAviability() }</td>
            <td>
                <i className='bi-trash task-action' 
                style={{color : 'tomato'}} 
                onClick={() => operationsContact(contact , TYPEOPERATION.DELETE)}></i>
            </td>
        </tr>

    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    operationsContact: PropTypes.func.isRequired,
};


export default ContactComponent;
