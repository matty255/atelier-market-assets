import './App.css';
import React from 'react';
import tw from "tailwind-styled-components"
import BucketList from './BucketList';
import Header from './Header';
import { Route, Link } from "react-router-dom";


const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-64
    h-64
    m-auto
    bg-indigo-600
    hover:bg-red-400
`

const Container2 = tw.div`
    w-full m-auto bg-purple-500
    cursor-pointer
    rounded-xl
    animate-bounce
`

function App() {
  
  return (
    <div className="App">
      <div>
        <Link to="/">홈으로 가기</Link>
        <Link to="/header/:head_name">헤더로 가기</Link>
      </div>
    <Container>
          <h1 className="text-3xl font-bold underline text-red-600">
      Hello world!
    </h1>
    
    </Container>
    <Container2>
    <Route path="/" exact component={BucketList} />
    <Route path="/header/:head_name" component={Header} />
    </Container2>
    </div>
  );
}

export default App;
