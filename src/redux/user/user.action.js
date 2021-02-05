const currentUser = (user) => {
  return {
    type: "CURRENT_USER",
    payload: user,
  };
};

export default currentUser;
