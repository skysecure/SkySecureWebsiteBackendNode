// import the routes from the routes files

const ebook_routers = require("./ebook_router");
const form_routes = require("./form.routes")

// making a router plugin
module.exports = {
  name: "api Routes",
  version: "1.0.0",
  register: (server, options) => {
    server.route(form_routes);
    server.route(ebook_routers)
  },
};
