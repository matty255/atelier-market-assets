import React from 'react'; 
import tw from "tailwind-styled-components"

const Di = tw.ul`
    bg-yellow-300
    rounded-md
    p-4
    m-2
`



const CardMain = (props) => {

    const my_lists = [{"word" : "놀기", "desc" : "신나게 놀기라는 뜻" , "use" : "놀자놀자" }, 
    { "word" : "신나기", "desc" : "신나야 한다는 뜻" , "use" : "오늘의 계획 : 신나기" }, 
    { "word" : "데스크북", "desc" : "데스크탑과 노트북의 합성어, 배터리 없이 움직일 수 없는 노트북을 뜻함" , "use" : "와 이건 데스크북이다" }] 

    return (
        <div>
            { // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
                my_lists.map((list, index) => {
                    return (<div key={index}>
                       <Di> 
                       <li className={"rounded-md text-4xl p-4"}>{list.word}</li>
                       <li>{list.desc}</li>
                       <li className={"text-blue-400"}>{list.use}</li></Di>
                        </div>);
                })
            }

        </div>
    );
}

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default CardMain;

