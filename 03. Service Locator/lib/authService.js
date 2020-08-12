module.exports = (serviceLocator) => {
  const db = serviceLocator.get("db");
  const tokenSecret = serviceLocator.get("tokenSecret");

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
