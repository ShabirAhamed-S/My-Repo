import React from 'react';
import './App.css';
import Table from './Table'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: 0,
      email: '',
      phone: '',
      item: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  shouldComponentUpdate() {
    console.log('shouldupdate')
    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
    let num = this.state.item.length + 1
    if (this.state.name.length === 0 || this.state.email.length === 0 || this.state.phone.length === 0) {
      alert('All fields are required')
      return;
    }
    const newItem = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      id: num
    };

    this.setState(state => ({
      item: state.item.concat(newItem),
      name: '',
      email: '',
      phone: ''
    }));
  }

  getSnapshotBeforeUpdate() {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was ";
    console.log('getbeforesnap')
  }

  componentDidMount() {
    console.log('didmount')
  }


  componentWillUnmount() {
    alert('unmount')
  }


  static getDerivedStateFromProps() {
    console.log('getDerived')
    return;
  }

  render(props) {
    return (

      <div className='header' id='div1'>
        <center><h3>TABLE</h3>
          <Table {...props} item={this.state.item} />
          <form onSubmit={this.handleSubmit}>
            <label>
            </label>
            <input
              placeholder='name'
              required
              onChange={(e) => this.setState({ name: e.target.value })}
              value={this.state.name}
            />
            <input
              placeholder='email'
              required
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
            <input
              placeholder='phone'
              required
              onChange={(e) => this.setState({ phone: e.target.value })}
              value={this.state.phone}
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
