import React from "react";
import tw from "tailwind-styled-components"
import {Link} from "react-router-dom";


const Head = tw.div`
    w-full bg-yellow-900 text-white text-4xl
    p-3 
`
const Nabis = tw.ul`
    w-full bg-yellow-400 text-white text-md md:text-2xl 
    flex flex-row justify-center 
`
const L = tw.ul`
    m-4 
`

const Nabi = (props) => {

  return <div>        
  <Head>나만의 사전</Head>
    <Nabis>
      <L><Link to="/">HOME</Link></L>
      <L><Link to="/main"> 사전 구경하기</Link></L>
      <L><Link to="/making"> 사전 만들러가기</Link></L>
    </Nabis>
  </div>
  
};

export default Nabi;