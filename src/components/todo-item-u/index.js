import { connect } from 'react-redux';
import TodoItemU from 'components/todo-item-u/todo-item-u';

const mapStateToProps = (state) => {
    return {
        theme: state.theme
    }
  }
  
  const ComponentTodoItemU = connect(
    mapStateToProps,
  )(TodoItemU);

  export default ComponentTodoItemU;