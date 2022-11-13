

function routes(app){
  app.use('/api/categories/', require('./api/routes/category.routes'));
  app.use('/api/products/', require('./api/routes/product.routes'));
  app.use('/auth/local/', require("./api/routes/user.routes"));
  app.use('/auth0/', require("./api/routes/user.auth0.routes"));
  app.use('/api/media/', require('./api/routes/media.routes'));
}

module.exports = {routes}