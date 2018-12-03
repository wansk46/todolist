import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList.js'
import TodoItems from './Components/TodoItems.js'

class App extends Component {
  constructor() {
    super()
    this.sate = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }

  // handleInput = e => {
  //   const itemText = e.target.value
  //   const currentItem = { text: itemText, key: Date.now() }
  //   this.setState({
  //     currentItem,
  //   })
  // }

  // addItem = e => {
  //   e.preventDefault()
  //   const newItem = this.state.currentItem
  //   if (newItem.text !== '') {
  //     console.log(newItem)
  //     const items = [...this.state.items, newItem]
  //     this.setState({
  //       items: items,
  //       currentItem: { text: '', key: '' },
  //     })
  //   }
  // }
  render() {
    return (
      <div className="App">
        <TodoList/>
        {/* <TodoItems entries = {this.state.items} /> */}
      </div>
    );
  }
}
export default App;
