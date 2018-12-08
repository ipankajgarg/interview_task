import axios from "axios";
import { COMPANIES, DELETE_COMPANY, ADD_COMPANY } from "./types";
import { LOADING } from "../../common/types";
import { notification } from "antd";

export const fetchCompany = () => async dispatch => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    const res = await axios.get(
      `http://vettedtest.online/admin/company/list/`,
      {
        headers: {
          "AUTH-TOKEN": token,
          "USER-TYPE": "admin"
        }
      }
    );
    console.log(res);
    dispatch({ type: COMPANIES, payload: res.data.data });
  } catch (err) {
    console.log("error block", err);
  }
};
export const deleteCompany = obj => async dispatch => {
  console.log("object", obj);
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    const res = await axios.delete(
      `http://vettedtest.online/admin/company/delete/`,
      {
        data: obj,
        headers: {
          "AUTH-TOKEN": token,
          "USER-TYPE": "admin"
        }
      }
    );
    console.log(res);
    dispatch({ type: DELETE_COMPANY, payload: obj.company_id });
  } catch (err) {
    console.log("error block", err);
  }
};

export const loadingFun = () => {
  return { type: LOADING };
};

export const createCompany = obj => async dispatch => {
  try {
    console.log(obj);
    const newObj = {
      company_details: obj,
      manager_details: {
        first_name: "Puneet",
        last_name: "Gupta",
        designation: "CEO",
        contact_number: 8859986748,
        company_email: "manager@devastryx.tech"
      }
    };
    const token = localStorage.getItem("token");
    console.log(token);
    const res = await axios.post(
      "http://vettedtest.online/admin/company/create/",
      newObj,
      {
        headers: {
          "AUTH-TOKEN": token,
          "USER-TYPE": "admin"
        }
      }
    );
    console.log(res);
    if (res.data.response_code === 80) {
      dispatch({ type: ADD_COMPANY, payload: newObj });
      dispatch({ type: LOADING });
      // console.log(res);
      // localStorage.setItem("token", res.data.data.session_token);
      // browserHistory.push("/");
    } else {
      for (var i in res.data.error) {
        notification["error"]({
          message: res.data.error[i]
        });
      }
    }
  } catch (err) {
    console.log("error block", err);
  }
};
