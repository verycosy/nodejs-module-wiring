module.exports = (db, tokenSecret) => {
  const users = db.sublevel("users");
  const authService = {};

  authService.login = (username, password, cb) => {
    //
  };

  authService.checkToken = (token, cb) => {
    //
  };

  return authService;
};
