const users = require("./users/users.service.js");
const messages = require("./messages/messages.service.js");
const friends = require("./friends/friends.service.js");
const rooms = require("./rooms/rooms.service.js");

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(messages);
  app.configure(friends);
  app.configure(rooms);
};
