import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const App = () => (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
)

export default App;