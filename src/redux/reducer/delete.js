export const deleteContact = (id) => ({
  type: 'DELETE_CONTACT',
  payload: id,
});

const initialState = {
  contactList: [],
  keyword: '',
};

function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contactList: state.contactList.filter(contact => contact.id !== action.payload),
      };
    default:
      return state;
  }
}