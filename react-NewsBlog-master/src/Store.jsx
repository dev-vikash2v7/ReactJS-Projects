import { configureStore } from "@reduxjs/toolkit"
import  userReducer  from "./UserSlice"

// console.log(userReducer , ' userreduces')
// ƒ (state, action) {
//   if (state === void 0) {
//     state = frozenInitialState;
//   }

//   var caseReducers = [actionsMap[action.type]].concat(finalActionMatchers.filter(function (_ref2) {
//     var … " userreduces"

export default configureStore ({
  reducer : {
      user : userReducer
  }
})
