import React, { useEffect, useState } from 'react';
import AddContactForm from './Form/component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactList } from '../Store/Action/component';
import List from './List';

const App = () => {
  const [info, setInfo] = useState(false);
  const editContactEl = useSelector((state) => state.editContact);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactList());
  }, []);

  return (
    <div className="wrapper">
      <div className="useful__info" onClick={() => setInfo(!info)}>
        <div className="useful__info show" />
        <h3 className={info ? 'show__title' : 'hide'}>
          If u clicked on a btn or added contact and nothing happened, wait
          please. Server is loading.
        </h3>
      </div>
      <AddContactForm editContactEl={editContactEl} key={editContactEl.id} />
      <List />
    </div>
  );
};

export default App;
