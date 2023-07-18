import React from 'react';
import { Contact } from '../../../models/contact.class';
import ContactComponent from '../contact';

const ContactList = () => {

    const defaultContact = new Contact('Jose' , 'Roncancio' , 'joser@gmail.com' , true);

    return (
        <div>
            <ContactComponent contact={defaultContact} ></ContactComponent>
        </div>
    );
};




export default ContactList;
