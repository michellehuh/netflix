import {
  CUSTOMER_VERIFY_SUCCESS,
  CHECK_BOX_TOGGLED,
  CUSTOMER_DATA_SET
} from "../types";

const mockCustomers = require("../mockData/mockCustomers");

const initialState = { customers: {}, checkedCustomersId: [] };

const verifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMER_VERIFY_SUCCESS: {
      const { verifiedCustomerData } = action;
      return { ...state, customers: verifiedCustomerData };
    }

    case CHECK_BOX_TOGGLED: {
      const { key } = action;
      const clonedCheckedCustomersId = state.checkedCustomersId.slice(0);
      const idx = clonedCheckedCustomersId.indexOf(key);
      if (idx === -1) {
        clonedCheckedCustomersId.push(key);
      } else {
        clonedCheckedCustomersId.splice(idx, 1);
      }
      return { ...state, checkedCustomersId: clonedCheckedCustomersId };
    }

    case CUSTOMER_DATA_SET: {
      const { customerId } = action;
      const customerData = mockCustomers[customerId];
      return { ...state, customers: customerData };
    }

    default:
      return state;
  }
};

export default verifyReducer;
