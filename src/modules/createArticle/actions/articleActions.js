import axios from "axios";
import { browserHistory } from "react-router-3";
import { notification } from "antd";
import { ARTICLE } from "./types";
export const createArticle = article => async dispatch => {
  console.log("article", article);
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    const res = await axios.post(
      `https://api.rendemo.com/article/create/`,
      article,
      {
        headers: {
          "Content-Type": "application/json",
          "AUTH-TOKEN": token,
          "USER-TYPE": "admin"
        }
      }
    );
    if (res.data.responseCode === 80) {
      console.log(res);
      browserHistory.push("/");
    } else {
      console.log(res);
      notification["error"]({
        message: "some server problem try again later"
      });
    }
  } catch (err) {
    console.log("error block", err);
  }
};
export const fetchArticle = id => async dispatch => {
  console.log("article", id);
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    const res = await axios.get(
      `https://api.rendemo.com/article/admin/?id=${id}`,

      {
        headers: {
          "Content-Type": "application/json",
          "AUTH-TOKEN": token,
          "USER-TYPE": "admin"
        }
      }
    );
    console.log("response", res.data);
    dispatch({ type: ARTICLE, payload: res.data.data });
  } catch (err) {
    console.log("error block", err);
  }
};
