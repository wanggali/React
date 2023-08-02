import {ADD_PERSON} from "../constant";

//创建人的action
export const createAddPersonAction = person => ({type: ADD_PERSON, data: person})