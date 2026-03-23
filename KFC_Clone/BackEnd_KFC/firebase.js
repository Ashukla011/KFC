const admin = require("firebase-admin");
const servicerAccount = require("./firebase-key.json")

admin.initializeApp({
  credential: admin.credential.cert(servicerAccount)
});

module.exports = {admin};
