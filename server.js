// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================
var express = require("express");

// ==============================================================================
// HANDLEBARS CONFIGURATION
// This sets up the basic properties for our handlebars server
// ==============================================================================
var handlebars = require("express-handlebars");


// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up Handlebars
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set ("view engine", "handlebars");

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
