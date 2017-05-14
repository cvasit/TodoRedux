//functions returing actions are called action generators
//somehow people started calling them as actions.

export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    }
};

export var addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    }
};

export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    }
};

export var toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED',
    }
}

