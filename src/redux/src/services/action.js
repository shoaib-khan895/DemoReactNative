import { SET_DATA } from "./constants";


export const setFunction = (value) => (dispatch) => {
    console.log("action",value)
    dispatch({
        type: SET_DATA,
        data: value
    })
}