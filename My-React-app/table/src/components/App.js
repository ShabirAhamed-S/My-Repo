import React from 'react';
import './App.css';
import Todo from './Todo'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      id: 0,
      item: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let num = this.state.item.length + 1
    if (this.state.task.length === 0 ) {
      alert('All fields are required')
      return;
    }
    if(this.state.task.length <= 20){
    alert('Enter valid Task Name and Task Description minimum 10 characters')
    return
    }
    const newItem = {
      task: this.state.task,
      id: num
    };

    this.setState(state => ({
      item: state.item.concat(newItem),
      task: '',
    }));
  }

  render(props) {
    return (
      <div className='header'>
        <center><h3>TODO</h3>
          <Todo {...props} item={this.state.item} />
          <br></br>

          <form onSubmit={this.handleSubmit}>
            <label><b> Write Todo Task </b></label>
            <input className='input'
              required
              onChange={(e) => this.setState({ task: e.target.value })}
              value={this.state.task}
            />
            <br></br>
            <button> Add </button>
          </form>
        </center>
      </div>
    );
  }
}

export default App;
