import {
  createContact,
  getContactList,
  deleteContact,
  updateContact,
} from '../../Api/component';

export const ACTION_CONTACT_ADD = 'ACTION_CONTACT_ADD';
export const ACTION_CONTACT_DELETE = 'ACTION_CONTACT_DELETE';
export const ACTION_CONTACT_UPDATE = 'ACTION_CONTACT_UPDATE';
export const ACTION_CONTACT_LIST_FETCH = 'ACTION_CONTACT_LIST_FETCH';
export const ACTION_CONTACT_EDIT = 'ACTION_CONTACT_EDIT';
export const ACTION_CLEAR_EDIT = ' ACTION_CLEAR_EDIT';

export function fetchContactList() {
  return async (dispatch) => {
    const contactList = await getContactList();

    dispatch({ type: ACTION_CONTACT_LIST_FETCH, payload: contactList });
  };
}

export function addContact(contact) {
  return async (dispatch) => {
    if (contact.id) {
      const newContact = await updateContact(contact.id, contact);
      dispatch({ type: ACTION_CONTACT_UPDATE, payload: newContact });
    } else {
      const newContact = await createContact(contact);
      dispatch({ type: ACTION_CONTACT_ADD, payload: newContact });
    }
  };
}

export function removeContact(id) {
  return async (dispatch) => {
    const removeContact = await deleteContact(id);

    dispatch({ type: ACTION_CONTACT_DELETE, payload: removeContact.id });
  };
}

export function editContact(contact) {
  return { type: ACTION_CONTACT_EDIT, payload: contact };
}

export function clearEditContact(contact) {
  return { type: ACTION_CLEAR_EDIT, payload: contact };
}
