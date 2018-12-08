import axios from "axios";
import { browserHistory } from "react-router-3";
import { notification } from "antd";

export const onLogin = (
  { identifier, password },
  history
) => async dispatch => {
  try {
    console.log(identifier, password);
    const res = await axios.post(
      "http://vettedtest.online/admin/native/login/",
      {
        login_credentials: {
          email: identifier,
          password
        },
        user_device: {
          device_id: "1o2u391je89sdas129s8129s18j19su",
          device_type: "ios",
          fcm_id: "askdna39122di2ddsan2kdn2"
        }
      }
    );
    console.log(res);
    if (res.data.response_code === 80) {
      console.log(res);
      localStorage.setItem("token", res.data.data.session_token);
      browserHistory.push("/");
    } else {
      notification["error"]({
        message: "Invalid Emailid or Password"
      });
    }
  } catch (err) {
    console.log("error block", err);
  }
};
