import {
  ACTION_CONTACT_ADD,
  ACTION_CONTACT_DELETE,
  ACTION_CONTACT_LIST_FETCH,
  ACTION_CONTACT_UPDATE,
  ACTION_CONTACT_EDIT,
  ACTION_CLEAR_EDIT,
} from '../Action/component';

const initialState = {
  contacts: [],
  editContact: {},
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_CONTACT_LIST_FETCH:
      return {
        ...state,
        contacts: payload,
      };
    case ACTION_CONTACT_ADD:
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    case ACTION_CONTACT_DELETE:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
      };
    case ACTION_CONTACT_UPDATE:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === payload.id ? payload : contact
        ),
      };
    case ACTION_CONTACT_EDIT:
      return {
        ...state,
        editContact: payload,
      };
    case ACTION_CLEAR_EDIT:
      return {
        ...state,
        editContact: (payload = {}),
      };
    default:
      return state;
  }
}

export default rootReducer;
