var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI=require('TodoAPI');

store.subscribe(() => {
    var state = store.getState();
    TodoAPI.setTodos(state.todos);
});


// Load foundation
$(document).foundation();
// App css
require('style!css!sass!applicationStyles')

var initialTodos=TodoAPI.getTodos();

store.dispatch(actions.addTodos(initialTodos));

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);
