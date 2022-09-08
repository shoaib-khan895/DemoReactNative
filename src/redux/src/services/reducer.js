
import { SET_DATA } from "./constants"

const initialState = {
    homeData: 'Knowledge Meet',
    userData: ''
}

export default function homeReducer (state=initialState, action){
    console.log("reducer",action)
    switch (action.type) {
        case SET_DATA:
            return {...state, homeData:action.data}
        default:
            return state
    }
}