import React from "react";
import tw from "tailwind-styled-components"
import ButtonMaking from './ButtonMaking'

const Inputs = tw.div`
    flex flex-col
    bg-yellow-200 p-10
    rounded-md w-full md:w-2/3 m-auto
`

const Making = (props) => {

  return (
    <div>


    <Inputs> 
    <h1 className={"text-xl md:text-3xl mb-10"}>나만의 단어를 추가해보자!</h1>
    <h2 className={"p-2 text-left"}>단어</h2> <input className={"w-full h-12"} />
    <h2 className={"p-2 text-left"}>뜻</h2> <input className={"w-full h-24"} />
    <h2 className={"p-2 text-left"}>용례</h2> <input className={"w-full h-24"} />
    <ButtonMaking />
    </Inputs>
    
  </div>
  )
  
};

export default Making;