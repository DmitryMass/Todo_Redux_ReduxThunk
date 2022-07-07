import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { editContact, removeContact } from '../../Store/Action/component';
//
import styles from './index.m.css';
//

const List = () => {
  const getContacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {getContacts.length === 0 ? (
        <div className={styles.loading}>
          Wait please <br /> (MockApi server is loading...)
        </div>
      ) : (
        getContacts.map((contact) => (
          <li key={nanoid()} className={styles.list__item}>
            <span className={styles.list__span}>
              <span>{contact.firstName}</span>
              <span>{contact.lastName}</span>
              <span>{contact.phone}</span>
            </span>
            <span className={styles.btn__wrapper}>
              <button
                className={styles.editBtn}
                onClick={() => dispatch(editContact(contact))}
              >
                Edit
              </button>
              <button
                className={styles.removeBtn}
                onClick={() => dispatch(removeContact(contact.id))}
              >
                Delete
              </button>
            </span>
          </li>
        ))
      )}
    </ul>
  );
};

export default List;
