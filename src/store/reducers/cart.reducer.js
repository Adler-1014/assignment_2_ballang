export const ADD_ITEM = "cart/addItem";
export const REMOVE_ITEM = "cart/removeItem";
export const UPDATE_QUANTITY = "cart/updateQuantity";

export const addItemActionCreator = (payload) => ({ type: ADD_ITEM, payload });
export const removeItemActionCreator = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});
export const updateQuantityActionCreator = (itemId, quantity) => ({
  type: "UPDATE_QUANTITY",
  payload: { itemId, quantity },
});

const initialState = {
  items: [],
};

export default function cartReducer(state = initialState, action) {
  const newState = { ...state };

  if (action.type === ADD_ITEM) {
    const newItem = action.payload;
    const newItems = [...state.items, newItem];

    newState.items = newItems;
  } else if (action.type === REMOVE_ITEM) {
    const itemIdToRemove = action.payload;
    const newItems = state.items.filter((item) => item.id !== itemIdToRemove);

    newState.items = newItems;
  } else if (action.type === UPDATE_QUANTITY) {
    const { itemId, quantity } = action.payload;
    const updatedItems = state.items.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    newState.items = updatedItems;
  }
  return newState;
}
