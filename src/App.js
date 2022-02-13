import './App.css';
import React from 'react';
import tw from "tailwind-styled-components"
import { Route, Switch } from "react-router-dom";

import Start from './components/start/Start'
import Main from './components/main/Main'
import Making from './components/making/Making'
import NotFound from './components/nabis/NotFound';
import Nabi from './components/nabis/Nabi'

const Container = tw.div`
  w-full h-screen bg-yellow-400
`

// const Container2 = tw.div`
//     w-full m-auto bg-purple-500
//     cursor-pointer
//     rounded-xl
//     animate-bounce
// `

function App() {
  
  return (
    <div className="App" style={{}}>
      <Container>
      <Nabi />
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="/main" component={Main} />
          <Route path="/making" component={Making} />
          <Route component={NotFound} />
        </Switch>
      </Container>

    </div>
  );
}

export default App;
