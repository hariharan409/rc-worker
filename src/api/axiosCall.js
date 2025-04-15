import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {EXPO_BACKEND_API_URL} from "../config/environment";

export const getRequest = async (path, params, headers = {}) => {
  try {
    let tokens = await AsyncStorage.getItem("auth_tokens");
    const response = await axios.get(EXPO_BACKEND_API_URL + path, {
      params: { payload: params },
      headers: {
        Authorization: `Bearer ${JSON.parse(tokens).idToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.error || error.message);
  }
};

export const postRequest = async (path, body, headers = {}) => {
  try {
    let tokens = await AsyncStorage.getItem("auth_tokens");
    if (!tokens) {
      throw new Error("No authentication token found.");
    }
    const parsedTokens = JSON.parse(tokens);

    if (!parsedTokens.idToken) {
      throw new Error("idToken is missing in the authentication tokens.");
    }

    const response = await axios.post(EXPO_BACKEND_API_URL + path, JSON.stringify(body), {
      headers: {
        ...headers,
        "Content-Type": "application/json",
        Authorization: `Bearer ${parsedTokens.idToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.error || error.message);
  }
};

export const postFile = async (path, body, headers = {}) => {
  try {
    let tokens = await AsyncStorage.getItem("auth_tokens");
    const response = await axios.post(EXPO_BACKEND_API_URL + path, body, {
      headers: { Authorization: `Bearer ${JSON.parse(tokens).idToken}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.error || error.message);
  }
};
