import React, { useState, useEffect } from 'react';
import { Contact } from '../../../models/contact.class';
import { TYPEOPERATION } from '../../../models/TypeOperation.enum';
import ContactComponent from '../contact';
import CreateContact from '../forms/createContact';

const ContactList = () => {

    const defaultContact = new Contact(0, 'Jose', 'Roncancio', 'joser@gmail.com', true);
    const defaultContact2 = new Contact(1, 'Pedro', 'Picapiedra', 'pedroPp@gmail.com', false);

    const [contacts, setContacts] = useState([defaultContact, defaultContact2]);

    useEffect(() => {
        return () => {
        };
    }, [contacts]);

    const crudContact = (contactToUpdate, TypeOperation) => {
        const index = contacts.indexOf(contactToUpdate);
        const tempcontacts = [...contacts];
        realizeOperation(tempcontacts, TypeOperation, contactToUpdate, index);
    }

    const realizeOperation = (tempcontacts, TypeOperation, contactToUpdate, index) => {
        switch (TypeOperation) {
            case TYPEOPERATION.CREATE:
                tempcontacts.push(contactToUpdate);
                break;
            case TYPEOPERATION.DELETE:
                tempcontacts.splice(index, 1);
                break;
            case TYPEOPERATION.READ:

                break;
            case TYPEOPERATION.UPDATE:
                tempcontacts[index] = contactToUpdate;
                break;
            default:
                break;
        }
        setContacts(tempcontacts);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> * Name * </th>
                        <th> * LastName * </th>
                        <th> * Email * </th>
                        <th> * Availability * </th>
                    </tr>
                </thead>
                <tbody>
                { contacts.map((contact , index) => {
                              return ( <ContactComponent
                              key={index}//Required   
                              contact={contact}
                              operationsContact={crudContact}> 
                              </ContactComponent> );
                           })} 
                </tbody>
            </table>
            <CreateContact id={contacts.length} operationsContact={crudContact}  ></CreateContact>
        </div>
    );
};




export default ContactList;
