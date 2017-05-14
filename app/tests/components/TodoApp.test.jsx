var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var configureStore = require('configureStore');
var TodoApp = require('TodoApp');
import TodoList from 'TodoList';
var {Provider} = require('react-redux');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('It should render todo list', () => {

        var store = configureStore.configure();

        var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <TodoApp/>
            </Provider>)

        var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];

        //var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

        //expect(todoApp.length).toEqual(1)

    });

});
