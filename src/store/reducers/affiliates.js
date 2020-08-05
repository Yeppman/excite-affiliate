import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  data: null,
  token: null,
  username: null,
  is_buyer: null,
  is_seller: null,
  userId: null,
  error: null,
  loading: false
};

const getAffliateUsers = (state, action) => {
    return updateObject(state, {
      data: action.user_list,
      error: null,
      loading: true
    });
}

const affiliateReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.AFFILIATE_GET_USERS_SUCCESS:
        return getAffliateUsers(state, action);
      default:
        return state;
    }
  };
  
  export default affiliateReducer;
  