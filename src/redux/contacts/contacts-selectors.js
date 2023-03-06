export const getAllContacts = ({ contacts }) => contacts;

export const getFilteredContacts = ({filter, contacts}) => {
  if (!filter) {
    return contacts;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return result;
};

