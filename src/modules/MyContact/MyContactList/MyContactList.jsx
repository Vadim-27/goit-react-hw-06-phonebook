import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-slice';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const filterList = useSelector(getFilteredContacts);
  const contactDelete = id => {
    dispatch(deleteContact(id));
  };
  const contact = filterList.map(({ id, name, number }) => (
    <li key={id}>
      {name}:{number}
      <button type="button" onClick={() => contactDelete(id)}>
        Delete
      </button>
    </li>
  ));
  return <ul>{contact}</ul>;
};

export default ContactList;
