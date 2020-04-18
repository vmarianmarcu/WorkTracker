// import { userConstants } from 'container/login/constants/user.constants'

// export function users(state = {}, action) {
//   switch (action.type) {
//     case userConstants.GETALL_REQUEST:
//       return {
//         loading: true
//       };
//     case userConstants.GETALL_SUCCESS:
//       return {
//         items: action.users
//       };
//     case userConstants.GETALL_FAILURE:
//       return { 
//         error: action.error
//       };
//     case userConstants.DELETE_REQUEST:
//       // add 'deleting:true' property to user being deleted
//       return {
//         ...state,
//         items: state.items.map(user =>
//           user.id === action.id
//             ? { ...user, deleting: true }
//             : user
//         )
//       };
//     case userConstants.DELETE_SUCCESS:
//       // remove deleted user from state
//       return {
//         items: state.items.filter(user => user.id !== action.id)
//       };
//     case userConstants.DELETE_FAILURE:
//       // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
//       return {
//         ...state,
//         items: state.items.map(user => {
//           if (user.id === action.id) {
//             // make copy of user without 'deleting:true' property
//             const { deleting, ...userCopy } = user;
//             // return copy of user with 'deleteError:[error]' property
//             return { ...userCopy, deleteError: action.error };
//           }

//           return user;
//         })
//       };
//     default:
//       return state
//   }
// }



import {
  ACTION_USERS_REQUESTING,
  ACTION_USERS_SUCCESS,
  ACTION_USERS_FAIL
} from 'data/constants';

export function users(state = {}, action) {
  switch (action.type) {
    case ACTION_USERS_REQUESTING:
      return {
        loading: true
      };
    case ACTION_USERS_SUCCESS:
      return {
        items: action.response
      };
    case ACTION_USERS_FAIL:
      return {};
    default:
      return state
  }
}
