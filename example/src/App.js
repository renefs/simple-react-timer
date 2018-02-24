import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Timer from 'react-timer-component'

class App extends Component {
  render () {
    const now = new Date()
    const fourHours = new Date().setHours(now.getHours() + 4)

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>Timer starts now</h3>
        <div><Timer /></div>
        <h3>Four hours countdown</h3>
        <div><Timer startTime={fourHours} countDown /></div>
      </div>
    )
  }
}

export default App
