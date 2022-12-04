export default AuthHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user & user.accessToken) {
    return { Authorization: "Bearer" + user.accessToken };
  } else {
    return {};
  }
};

// The code above check Local storage for user Item. if there is a logged in user with accessToken (JWT),
// return HTTP Authorization header. Otherwise return an empty object.
