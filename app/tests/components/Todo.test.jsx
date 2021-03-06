var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var {Todo} = require('Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle prop with id on click', () => {
        var id=99;

        var todoData = {
            id: id,
            text: 'Write todo.test.jsx test',
            completed: true
        };

        var action = {
            type: 'TOGGLE_TODO',
            id: id,
        };
        var spy = expect.createSpy();

        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);

        var $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });
});
