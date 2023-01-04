import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import logo from './logo.svg'
import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://github.com/EliEladElrom/react-tutorials" target="_blank" rel="noopener noreferrer">
          Eli Elad Elrom - React Tutorials
        </a>
        <List>
          {[{ name: 'MyPage', url:'/MyPage' }].map((itemObject, index)=>(
            <NavLink
              to={itemObject.url}
              key={itemObject.url}
            >
              <ListItem>
                {itemObject.name}
              </ListItem>

            </NavLink>
          ))}
        </List>
      </header>
    </div>
  )
}

const List = styled.div``;
const ListItem = styled.span``;

export default App
