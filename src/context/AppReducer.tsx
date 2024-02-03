import {InitialStateType} from "./GlobalState";

type ActionType = {
    type: string;
    payload: any;
}

export default (state: InitialStateType, action: ActionType) => {
    switch(action.type) {
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(item => item.id !== action.payload)
            }
        default: 
            return state;
    }
   }