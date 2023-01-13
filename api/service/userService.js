import userDao from "../model/userDao";

export default {
  get_user() {
    return userDao.get_user();
  },
};
