
export const initallState = {
  todo: [
    {
      listName: "Compelet todolist",
      timeRanges: "2h-15h",
      status: "",
      level: "easy",
    },
  ],
};

export const CreateAction = payload => {
    return {
        type: "CREATE_WORK",
        payload: payload
    }
}

export const RemoveItemAction = payload => {
    return {
        type: "REMOVE_ITEM",
        payload: payload
    }
}

export const UpdateItemAction = payload => {
    return {
        type : "UPDATE",
        payload: payload
    }
}

export const StatusItemAction = payload => {
     return {
        typeof : "SET_STATUS"
     }
}

const TodoListReducer = (state, action) => {
    switch(action.type){
        case "CREATE_WORK":
            return {
              ...state,
              todo: [...state.todo,action.payload],
            };

        case "REMOVE_ITEM":
            return {
                ...state,
               todo: state.todo.filter(todo => {
                  return todo.id !== action.payload
               })
            }

        case  "UPDATE":
            const itemUpdate = state.todo.find(todo => {

                return todo.id === action.payload.id
            })
            const statusRep = action.payload.status
            if(itemUpdate){
                itemUpdate.status = statusRep;
            }
            return {
              ...state,
              itemUpdate,
            };
        default:
            return state
    }
}

export default TodoListReducer