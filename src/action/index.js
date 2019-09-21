import firebase from "../apis/firebase";
import history from '../history'
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_PRESENTATION,
  FETCH_PRODUCTS
} from './types'
export const signin = userId => {
    return {
      type: SIGN_IN,
      payload: userId
    };
  }
  
  export const signout = () => {
    return { type: SIGN_OUT };
  }

  export const fetchPresentation = () =>  async dispatch => {
    const response = await firebase.get(`/category/shirts.json`)
    dispatch({type: FETCH_PRESENTATION, payload:response.data})
  }

  export const fetchProducts = nameModel => async dispatch => {
    const response = await firebase.get(`/category/shirts.json`)
    dispatch({type: FETCH_PRODUCTS, payload:{nameModel: nameModel,data: response.data}})
  }
  