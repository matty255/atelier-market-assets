import React from 'react'; 
import tw from "tailwind-styled-components"
import { useHistory } from "react-router-dom";

const Btn = tw.button`
    m-auto
    bg-blue-300
    rounded-md
`

const ButtonMain = (props) => {
    const history = useHistory();


    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
    return (
        <div>
            <Btn onClick={() => {history.goBack()}}>뒤로 가기</Btn>
        </div>

    );
}

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default ButtonMain;

