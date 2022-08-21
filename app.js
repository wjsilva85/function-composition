"use strict";

const {
  createUserObject,
  createAdminUserObject,
  createModeratorUserObject,
} = require("./framework/functions");

const regularUser = createUserObject({
  firstName: "Wellington",
  lastName: "Silva",
  email: "wjsilva85@gmail.com",
});

const adminUser = createAdminUserObject({
  firstName: "Bob",
  lastName: "Dillan",
  email: "dillan@gmail.com",
});

const moderatorUser = createModeratorUserObject({
  firstName: "John",
  lastName: "Doe",
  email: "jhondoe@gmail.com",
});

adminUser.createUser();

// exports.User = class User {
//   constructor({ firstName, lastName, email }) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//   }

// getData = () => {
//     console.log('Getting data from the user');
// }

// setData = (data) => {
//     console.log('Setting data for the user');

// }

// };

// exports.Admin = class Admin extends User {
//     constructor(user){
//         super(user);

//     }

// setConfiguration = ()=>{
//     console.log('Setting configuration for the admin');
// }

// createUser = ()=>{
//     console.log('Creating user for the admin');
// }

// };

// exports.ModeratorUser = class ModeratorUser extends User {
//     constructor(user){
//         super(user);
//     }

//     setConfiguration = ()=>{
//         console.log('Setting configuration for the moderator');
//     }
// }
