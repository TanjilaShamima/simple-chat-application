const getLoginPage = (req, res) => {
  res.render("login", {
    title: "Login Page - Simple Chat Application",
    error: null,
  });
}

module.exports = {
  getLoginPage,
};