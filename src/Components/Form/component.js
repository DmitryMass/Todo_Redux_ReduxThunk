import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, clearEditContact } from '../../Store/Action/component';
import FieldInput from '../InputField/component';
//
import { Formik, Field, Form } from 'formik';
import styles from './index.m.css';
//
import PropTypes from 'prop-types';
import { validationInputs } from '../../ValidationScheme/component';

const AddContactForm = ({ editContactEl }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(editContactEl.firstName || '');
  const [lastName, setLastName] = useState(editContactEl.lastName || '');
  const [phone, setPhone] = useState(editContactEl.phone || '');

  return (
    <div className={styles.form__wrapper}>
      <Formik
        initialValues={{
          firstName: firstName,
          lastName: lastName,
          phone: phone,
        }}
        onSubmit={({ firstName, lastName, phone }, { resetForm }) => {
          dispatch(
            addContact({
              ...editContactEl,
              firstName,
              lastName,
              phone: Number(phone),
            })
          );

          dispatch(clearEditContact(editContactEl));
          resetForm();
        }}
        validationSchema={validationInputs}
      >
        <Form>
          <table className={styles.form__table}>
            <tbody>
              <tr className={styles.form__inputs}>
                <Field
                  id="Name"
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  component={FieldInput}
                />
                <Field
                  id="Surname"
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  component={FieldInput}
                />
                <Field
                  id="Number"
                  name="phone"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  component={FieldInput}
                />
                <td>
                  <button className={styles.form__addBtn} type="submit">
                    Add
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </Form>
      </Formik>
    </div>
  );
};

addContact.propTypes = {
  editContactEl: PropTypes.object.isRequired,
};

export default AddContactForm;
