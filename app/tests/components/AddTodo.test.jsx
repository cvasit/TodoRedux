var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO when valid todo text is provided', () => {

        var todoText = 'Check mail';

        var spy = expect.createSpy();

        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);

        addTodo.refs.todoText.value = todoText;

        var action={type:'ADD_TODO',text:todoText};

        var $el = $(ReactDOM.findDOMNode(addTodo));

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not call onAddTodo prop when invalid input', () => {
      var todoText = '';

      var spy = expect.createSpy();

      var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);

      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoText.value = todoText;

      var action={type:'ADD_TODO',text:todoText};

      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled();
    });
});
