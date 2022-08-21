"use strict";

const getData = () => {
  return {
    getData: () => {
      console.log("Getting data for the user");
    },
  };
};

const setData = () => {
  return {
    setData: () => {
      console.log("Setting data for the user");
    },
  };
};

const setConfiguration = () => {
  return {
    setConfiguration: () => {
      console.log("Setting configuration for the user");
    },
  };
};

const createUser = () => {
  return {
    createUser: () => {
      console.log("Creating user");
    },
  };
};

exports.createUserObject = ({ firstName, lastName, email }) => {
  const user = {
    firstName,
    lastName,
    email,
  };

  return {
    ...user,
    ...getData(),
    ...setData(),
  };
};

exports.createAdminUserObject = (user) => {
  return {
    ...user,
    ...setConfiguration(),
    ...createUser(),
  };
};

exports.createModeratorUserObject = (user) => {
  return {
    ...user,
    ...setConfiguration(),
  };
};
