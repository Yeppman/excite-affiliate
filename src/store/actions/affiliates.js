import axios from "axios";
import * as actionTypes from "./actionTypes";

import {changePasswordUrl, resetPasswordUrl, resetPasswordConfirmUrl,
  activateUserUrl, userProfileUrl, loginURL
  } from '../../constants'

import {notification , message} from 'antd'

export const registerStart = () => {
  return {
    type: actionTypes.AFFILIATE_START
  };
};

export const resgiterSuccess = user => {
  return {
    type: actionTypes.AFFILIATE_SUCCESS,
    user
  };
};

export const getAffliateUsersStart = () => {
  return {
    type: actionTypes.AFFILIATE_START
  };
};


export const getAffliateUsersSucceess = data => {
  return {
    type: actionTypes.AFFILIATE_GET_USERS_SUCCESS,
    data
  }
}

export const getAffliateUsers = () => {
  return dispatch => {
    dispatch(getAffliateUsersStart())
    axios.get('http://127.0.0.1:8000/affiliate/get-affiliates/')
    .then(res => {
      const user_list = res.data;
      dispatch(getAffliateUsersSucceess(user_list))
    })
  }
}

export const handleGetCodes = (token) => {

  return dispatch => {
    dispatch(getAffliateUsersStart())
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
  axios.get('http://127.0.0.1:8000/affiliate/get-ref-codes/').then(res =>{
      if (res.status == 200){
          const aff_users = res.data[0]
          dispatch(getAffliateUsersSucceess(aff_users))
      }
  })
  }
}

// export const registerUser = (
//   username,
//   email,
//   password1,
//   password2,
//   is_buyer,
//   is_seller,
//   is_marketer,
//   affiliate_link
// ) => {
//   return dispatch => {
//     dispatch(authStart());
//     const user = {
//       username,
//       email,
//       password1,
//       password2,
//       is_buyer,
//       is_seller: !is_buyer,
//       is_marketer: !is_buyer,
//       affiliate_link
//     };
//     axios
//       .post("http://127.0.0.1:8000/rest-auth/registration/", user)
//       .then(res => {
//         const user = {
//           token: res.data.key,
//           username,
//           userId: res.data.user,
//           is_buyer,
//           is_seller: !is_buyer,
//           is_marketer: !is_buyer,
//           affiliate_link,
//           expirationDate: new Date(new Date().getTime() + 3600 * 1000)
//         };
//         // localStorage.setItem("user", JSON.stringify(user));
//         dispatch(authSuccess(user));
//         //dispatch(fetchCart())
//         dispatch(checkAuthTimeout(3600));
//       })
//       .catch(err => {
//         dispatch(authFail(err));
//       });
//   };
// };

