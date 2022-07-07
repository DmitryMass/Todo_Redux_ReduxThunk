import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, clearEditContact } from '../../Store/Action/component';
//
import styles from './index.m.css';
//
import PropTypes from 'prop-types';

const AddContactForm = ({ editContactEl }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(editContactEl.firstName || '');
  const [lastName, setLastName] = useState(editContactEl.lastName || '');
  const [phone, setPhone] = useState(editContactEl.phone || '');

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addContact({
        ...editContactEl,
        firstName,
        lastName,
        phone: Number(phone),
      })
    );

    dispatch(clearEditContact(editContactEl));
    setFirstName('');
    setLastName('');
    setPhone('');
  };

  return (
    <div className={styles.form__wrapper}>
      <form onSubmit={onFormSubmit}>
        <table className={styles.form__table}>
          <tbody>
            <tr className={styles.form__inputs}>
              <td>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </td>
              <td>
                <label htmlFor="surname">Surname</label>
                <input
                  id="surname"
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </td>
              <td>
                <label htmlFor="number">Number</label>
                <input
                  id="number"
                  name="number"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </td>
              <td>
                <button className={styles.form__addBtn} type="submit">
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

addContact.propTypes = {
  editContactEl: PropTypes.object.isRequired,
};

export default AddContactForm;
