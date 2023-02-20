const jwt = require("jsonwebtoken");
const secret =
  "jalksjdlanlkcnlakjslknencjoiqnlnlkjsalbbfbjasiuurdiwhejbjvhlasnkcvjoaisnenlkqjpripolwjetnljsdlkfhlvljslkdjflkjldskgnklsjdlkvjiuwijerlkwjenclksjdbabjsbdkjbqjkwherjwqhfrlnldskfnclkajd;lkjalksj2u301283saldfjhl21u38094lkajsldkjalskjdlkad"; //签 名

const setToken = (obj, time) => {
  try {
    return jwt.sign(obj, secret, { expiresIn: time });
  } catch (err) {
    throw new Error(err);
  }
};

const verifyToken = value => {
  try {
    if (value.indexOf("Bearer") != -1) {
      return jwt.verify(value.split(" ").pop(), secret);
    }
    return jwt.verify(value, secret);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  setToken,
  verifyToken,
  secret,
};
