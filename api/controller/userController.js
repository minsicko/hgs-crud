import userService from "../service/userService";

let userDB = [
  {
    name: "kaeun",
    email: "kaeun@gmail.com",
  },
  {
    name: "minsik",
    email: "minsik@gmail.com",
  },
  {
    name: "najeong",
    email: "najeong@gmail.com",
  },
];

export default {
  add_user(req, res) {
    try {
      const { name, email } = req.body;

      if (!name || !email) throw new Error("keyErr");

      userDB.push({ name: name, email: email });
      res.status(201).json({ userDB });
    } catch (err) {
      if (err.message == "keyErr") {
        const error = new Error("KEY_ERROR");
        error.statusCode = 400;
        res
          .status(error.statusCode)
          .json({ error: true, message: error.message });
      } else {
        const error = new Error("CANNOT_ADD_USER");
        error.statusCode = 400;
        res
          .status(error.statusCode)
          .json({ error: true, message: error.message });
      }
    }
  },

  get_user(req, res) {
    try {
      const index = req.params.index;

      if (!userDB[index]) throw new Error("keyErr");

      const result = userDB[index];
      res.status(200).json({ result });
    } catch (err) {
      if (err.message == "keyErr") {
        const error = new Error("USER_NOT_FOUND");
        error.statusCode = 400;
        res
          .status(error.statusCode)
          .json({ error: true, message: error.message });
      } else {
        const error = new Error("CANNOT_GET_USER");
        error.statusCode = 400;
        res
          .status(error.statusCode)
          .json({ error: true, message: error.message });
      }
    }
  },

  update_user(req, res) {
    try {
      const { index, email } = req.body;

      if (!index || !email) throw new Error("keyErr");

      userDB[index].email = email;
      res.status(200).json({ userDB });
    } catch (err) {
      if (err.message == "keyErr") {
        const error = new Error("KEY_ERROR");
        error.statusCode = 400;
        res
          .status(error.statusCode)
          .json({ error: true, message: error.message });
      } else {
        const error = new Error("CANNOT_UPDATE_USER");
        error.statusCode = 400;
        res
          .status(error.statusCode)
          .json({ error: true, message: error.message });
      }
    }
  },

  delete_user(req, res) {
    try {
      const index = req.params.index;

      if (!userDB[index]) throw new Error("keyErr");

      userDB.splice(index, 1);
      res.status(200).json({ userDB });
    } catch (err) {
      if (err.message == "keyErr") {
        const error = new Error("CANNOT_FIND_USER");
        error.statusCode = 400;
        res
          .status(error.statusCode)
          .json({ error: true, message: error.message });
      } else {
        const error = new Error("CANNOT_DELETE_USER");
        error.statusCode = 400;
        res
          .status(error.statusCode)
          .json({ error: true, message: error.message });
      }
    }
  },

  //! Sequelize
  async get_all_users(req, res) {
    const result = await userService.get_all_users();
    res.status(200).json({ result });
  },
};
