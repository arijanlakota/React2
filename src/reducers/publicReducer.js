const initialState = {
    publicList:[],
    categoryList:[],
    activeApi:{}
};
export default function publicReducer(state = initialState, action){
    switch(action.type){
        case "publicApi/entries":
            return {...state, publicList:[...action.payload]}
        case "publicApi/category":
            return{...state, categoryList:[...action.payload]}
        case "publicApi/entry":
            return {...state, activeApi: {...action.payload}}
        default:
            return state;
    }
}