import React from 'react'; 
import tw from "tailwind-styled-components"
// import ButtonMain from './ButtonMain';
import CardMain from './CardMain';


const Main = (props) => {

    const Cards = tw.div`
    bg-yellow-500
    rounded-md p-4 m-2
`
    
    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
    return (
        <div>
            <Cards>
                <CardMain />
            </Cards>
        </div>

    );
}

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default Main;

