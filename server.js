/*   ============ DEPENDENCIES ============ */
const express = require("express");
const path = require('path');


/*   ============ SET UP OUR WEB APPLICATION ============ */
const app = express();

/*   ============ TEMPLATING USING PUG ============ */
app.set("views", __dirname + "/views");
app.set('view engine', 'pug');
app.set('view options', { layout: false });

/*   ============ STATIC FILES ============ */
app.use(express.static(path.join(__dirname, 'public')));


/*   ============ ROUTES ============ */
app.get('/', function (req, res) {
    res.render('home');
  });
  
/*   ============ MAKE IT LIVE ============ */
  app.listen(8080, function(){
      console.log("API is live listening on http://localhost:8080");
  })