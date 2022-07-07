import React, { useEffect } from 'react';
import AddContactForm from './Form/component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactList } from '../Store/Action/component';
import List from './List';

const App = () => {
  const editContactEl = useSelector((state) => state.editContact);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactList());
  }, []);

  return (
    <div className="wrapper">
      <AddContactForm editContactEl={editContactEl} key={editContactEl.id} />
      <List />
    </div>
  );
};

export default App;
