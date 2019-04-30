module.exports.routes = {
    /**
   * Auth routes
   */
  'post /api/register/confirm': 'AuthController.confirm',
  'post /api/login': 'AuthController.login',
  'get /api/check-login': 'AuthController.check-login',
  'post /api/logout': 'AuthController.logout',
}