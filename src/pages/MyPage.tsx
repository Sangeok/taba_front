import {useState} from 'react';
import MyInfo from '../components/MyInfo';
import LendItem from '../components/LendItem';
import RentItem from '../components/RentItem';

export default function MyPage() {
    const [myPageComponent, setMyPageComponent] = useState<string>("내 정보");
    
    return (
        <div className="flex w-full">
            <div className="w-[25vw] flex flex-col pl-8">
                {/* 변수로 받아서 바꿔야함. */}
                <div className="text-lg font-semibold">My page</div>
                <div className="w-[200px] h-[0px] border border-black my-4 "/>
                <strong className="mb-1">함상억님. 반갑습니다.</strong>
                <div onClick={()=>setMyPageComponent("내 정보")} className={`mb-1 cursor-pointer ${myPageComponent === "내 정보" ? "font-bold" : null}`}>내 정보</div>
                <div onClick={()=>setMyPageComponent("등록 상품")} className={`mb-1 cursor-pointer ${myPageComponent === "등록 상품" ? "font-bold" : null}`}>등록 상품</div>
                <div onClick={()=>setMyPageComponent("대여 상품")} className={`mb-1 cursor-pointer ${myPageComponent === "대여 상품" ? "font-bold" : null}`}>대여 상품</div>
            </div>
            <div className="w-[75vw]">
                {
                    (myPageComponent === "내 정보") && <MyInfo/>
                }
                {
                    (myPageComponent === "등록 상품") && <LendItem/>
                }
                {
                    (myPageComponent === "대여 상품") && <RentItem/>
                }
            </div>
        </div>
    )
}