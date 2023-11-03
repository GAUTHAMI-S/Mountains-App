const axios = require("axios");

exports.homeRoutes = (req, res) => {
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      console.log("👽This is a GET request");

      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.add_user = (req, res) => {
  res.render("add_user");
};
exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } })
    .then(function (userdata) {
      console.log(userdata.data);
      res.render("update_user", { users: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
  //res.render("./update_user");
};
