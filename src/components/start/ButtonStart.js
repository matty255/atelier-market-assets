import React from "react";
import tw from "tailwind-styled-components"
import { useHistory } from "react-router-dom";

const Btn = tw.button`
    m-auto p-2
    bg-yellow-300
    rounded-md
`

const ButtonStart = (props) => {
  let history = useHistory();
  return (
    <div>
      <Btn onClick={() => {history.goBack()}}>깃허브 구경하러 가기</Btn>
    </div>
  );
};

export default ButtonStart;