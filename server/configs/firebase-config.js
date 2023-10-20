
//!\\ Do not edit without the scrum's permission

var admin = require("firebase-admin");

var serviceAccount = require("./fitness_app-b884e-firebase-adminsdk-liv59-daeedee660.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin