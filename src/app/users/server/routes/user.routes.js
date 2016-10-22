const user = require('../controllers/user.controller');
const schemas = require('../schemas/user.schema');
const graphqlHTTP = require('express-graphql');

/**
* @name exports
* @static
* @summary Routes for working with user models and schemas
*/
module.exports = function (app) {
  /**
  * @name /user
  * @summary GraphQL Endpoint for user information
  * @see user.schema
  * @memberof Router
  */
  app.use('/user', graphqlHTTP({
    graphiql: true,
    schema: schemas.UserQuerySchema
  }));

  /**
  * @name /auth/signout
  * @see user.controller
  * @memberof Router
  */
  app.route('/auth/signout').get(user.signout);

  /**
  * @name /auth/signin
  * @see user.controller
  * @memberof Router
  */
  app.route('/auth/signin').post(user.signin);

  /**
  * @name /auth/signup
  * @see user.controller
  * @memberof Router
  */
  app.route('/auth/signup').post(user.signup);

  /**
  * @name /auth/forgot
  * @see user.controller
  * @memberof Router
  */
  app.route('/auth/forgot').post(user.forgot);

};