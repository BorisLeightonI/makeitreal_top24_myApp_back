

function routes(app){
  app.use('/api/favs/', require('./api/routes/fav.routes'));
  app.use('/api/favLists/', require('./api/routes/favList.routes'));
  app.use('/auth/local/', require("./api/routes/user.routes"));
}

module.exports = {routes}