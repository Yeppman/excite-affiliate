import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  data: null,
  token: null,
  username: null,
  is_buyer: null,
  is_seller: null,
  is_marketer: null,
  affiliate_link:null,
  userId: null,
  error: null,
  loading: false
};

const handleGetCodes = (state, action) => {
  return updateObject(state, {
    affiliate_link: action.user_list.link,
    error: null,
    loading: true
  })
}

const getAffliateUsers = (state, action) => {
    return updateObject(state, {
      // affiliate_link: action.user_list.link,
      error: null,
      loading: true
    });
}

const affiliateReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.AFFILIATE_GET_USERS_SUCCESS:
        return getAffliateUsers(state, action);
      case actionTypes.AFFILIATE_GET_USERS_SUCCESS:
        return handleGetCodes(state, action);
      default:
        return state;
    }
  };
  


export default affiliateReducer;