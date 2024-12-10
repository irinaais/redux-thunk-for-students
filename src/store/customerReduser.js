const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';

export const customerReducer = (state = [{name:'Антон'}] , action) =>{
    switch(action.type){
        case ADD_MANY_CUSTOMERS:
            return [...state, ...action.payload]
        default:
            return state;
    }
}

export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
