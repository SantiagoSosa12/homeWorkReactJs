import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h1> Contact Info: </h1>
            <h3>Name : {contact.name}</h3>
            <h3>lastName : {contact.lastName}</h3>
            <h3>Email : {contact.email}</h3>
            <h3>{contact.connected ? 'Aviable' : 'Disconnected'}</h3>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
