import { BASE_URL } from "../Utils";

const USER_API = {
  /**
   * @method GET
   * @param { string } user_id
   */
  GET_USERINFO: `${BASE_URL}/user/:user_id`,
};

const APIConstant = {
  ...USER_API,
};

export default APIConstant;
