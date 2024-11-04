import { server } from '../store';
import axios from 'axios';

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });

    const { data } = await axios.post(`${server}/login`, { email, password }, { withCredentials: true });

    dispatch({ type: 'loginSuccess', payload: data });

    return { success: true };
  } catch (error) {
    dispatch({ type: 'loginFail', payload: error.response.data.message });
    return { success: false };
  }
};


export const register = formData => async dispatch => {
  try {
    dispatch({ type: 'registerRequest' });

    const { data } = await axios.post(`${server}/register`, formData, {
      headers: { 'Content-type': 'multipart/form-data' },
      withCredentials: true,
    });

    dispatch({ type: 'registerSuccess', payload: data });

    return { success: true, data }; // Return success status and data
  } catch (error) {
    dispatch({ type: 'registerFail', payload: error.response.data.message });
    return { success: false, message: error.response.data.message }; // Return failure status and message
  }
};


export const loadUser = () => async dispatch => {
  try {
    console.log("roinfrfnrio....")
    console.log("coming inside it",server)
    dispatch({ type: 'loadUserRequest' });

    console.log("cmoing below")

    const { data } = await axios.get(
      `${server}/me`,

      {
        withCredentials: true,
      }
    );
    console.log("data =>",data)
    dispatch({ type: 'loadUserSuccess', payload: data.user });
  } catch (error) {
    console.log("==========>",error.message)
    dispatch({ type: 'loadUserFail', payload: error.response.data.message });
  }
};

export const logout = () => async dispatch => {
  try {
    dispatch({ type: 'logoutRequest' });

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });
    dispatch({ type: 'logoutSuccess', payload: data.message });
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error.response.data.message });
  }
};

export const buySubscription = () => async dispatch => {
  try {
    dispatch({ type: 'buySubscriptionRequest' });

    const { data } = await axios.get(`${server}/subscribe`, {
      withCredentials: true,
    });

    dispatch({ type: 'buySubscriptionSuccess', payload: data.subscriptionId });
  } catch (error) {
    dispatch({
      type: 'buySubscriptionFail',
      payload: error.response.data.message,
    });
  }
};

export const cancelSubscription = () => async dispatch => {
  try {
    dispatch({ type: 'cancelSubscriptionRequest' });

    const { data } = await axios.delete(`${server}/subscribe/cancel`, {
      withCredentials: true,
    });

    dispatch({ type: 'cancelSubscriptionSuccess', payload: data.message });
  } catch (error) {
    dispatch({
      type: 'cancelSubscriptionFail',
      payload: error.response.data.message,
    });
  }
};
