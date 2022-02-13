import React from "react";
import tw from "tailwind-styled-components"
import { useHistory } from "react-router-dom";

const Btn = tw.button`
    bg-yellow-400
    rounded-md
    p-4 m-2 mt-2
`

const ButtonMaking = (props) => {
  let history = useHistory();
  return (
    <div className={"flex flex-row justify-between md:justify-evenly"}>
      <Btn onClick={() => {history.goBack()}}>돌아가기</Btn>
      <Btn onClick={() => {history.goBack()}}>등록하기</Btn>
    </div>
  );
};

export default ButtonMaking;