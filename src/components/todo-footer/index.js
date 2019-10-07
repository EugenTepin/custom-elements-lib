import { connect } from 'react-redux';
import { changeTheme } from 'actions';
import  TodoFooter  from "components/todo-footer/todo-footer";

const mapStateToProps = (state) => {
    return {
        theme: state.theme,
        count: state.count
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      changeTheme: (theme) => {
            dispatch(changeTheme(theme));
        }
    }
  }
  
  const ComponentTodoFooter = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoFooter);

  export default ComponentTodoFooter;