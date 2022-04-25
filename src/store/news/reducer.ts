import { AnyAction } from "redux";
import { IStore } from "./types";

const inititalState = {
	list: []
}

const newsReducer = (state: IStore = inititalState, action: AnyAction) => {
	switch (action.type) {
		case "news/setNews":
			return {...state, list: [...action.payload]};
		default:
			return state;
	}

}

export default newsReducer;