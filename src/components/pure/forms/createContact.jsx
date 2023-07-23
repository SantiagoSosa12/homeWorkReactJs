
import React , { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';
import { TYPEOPERATION } from '../../../models/TypeOperation.enum';


const CreateContact = ({ id,  operationsContact }) => {

    const fname = useRef('');
    const lname = useRef('');
    const email = useRef('');
    const selectAvailability = useRef(false);

    const addContact = (e) => {
        e.preventDefault();
        const newContact = new Contact(id , fname.current.value , lname.current.value, email.current.value , selectAvailability.current.value);
        console.log('Contact to add: ' + newContact.id + ' ' + newContact.name + ' ' + newContact.lastName + ' ' + newContact.email + ' ' + newContact.connected);
        operationsContact(newContact , TYPEOPERATION.CREATE);
    }

    return (
        <form onSubmit={addContact}>
            <label htmlFor="fname">First name:</label><br />
            <input ref={fname} type="text" id="fname" name="fname" /><br />
            <label htmlFor="lname">Last name:</label><br />
            <input ref={lname} type="text" id="lname" name="lname" /><br/>
            <label htmlFor="email">Email:</label><br/>
            <input ref={email} type="email" id="email" name="email" /><br/>
            <label htmlFor="selectAvailability">Availability:</label><br/>
            <select ref={selectAvailability} defaultValue={false} id='selectAvailability'>
                <option value={true}> Aviable </option>
                <option value={false}> Disconected </option>
            </select><br/> <br/>
            <button type='submit'> Add Contact </button>
        </form>
    );
};


CreateContact.propTypes = {
    operationsContact: PropTypes.func.isRequired,
};


export default CreateContact;
