import {useState} from "react";

import picture1 from '../assets/picture1.jpg';
import DropDownForm from '../components/form/DropDownForm';

import { SelectChangeEvent } from '@mui/material/Select';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Dropdown } from 'flowbite-react';

import styled from 'styled-components';

const StyledDropDown = styled(Dropdown)`
    border : none;

`;

const StyledDropdownItem = styled(Dropdown.Item)`
    width : 220px;
    &:hover {
        background-color: transparent; // 배경색을 투명하게 하여 hover 효과 제거
        color: inherit; // 기존 텍스트 색상을 유지하도록 설정
        // 다른 hover 스타일도 여기에 추가할 수 있습니다.
`;


const itemFilterOption:dropwDownOption[] = [
    { value: 0, label: 'None'},
    { value: 10, label: '조회순' },
    { value: 20, label: '최신순' },
]

export default function Category() {
    const [categoryfilter, setCategoryFilter] = useState<string>("");
    const [itemFilter, setItemFilter] = useState<string>("0");
    const category:string[] = ["텐트","캠핑 의자"];

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | SelectChangeEvent<string>) : void => {
        setItemFilter(e.target.value);
    }

    const handleFilter = (value: string) => {
        setCategoryFilter(value);
    };

    return (
        <div className="flex flex-col px-10">
            {/* Home이랑 공통 부분이라 하나로 빼도 될듯 */}
            <div className="flex flex-col justify-between rounded-3xl bg-black shrink-0 bg-contain text-white" style={{ minHeight:"80%", backgroundImage: `url(${picture1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div></div>
                <div className="flex flex-col align-middle pt-20 pl-20">
                    <div className="text-5xl">
                        CampShare
                    </div>
                    <div className="flex flex-col min-h-[4/12] max-w-[6/12] text-2xl pt-8 pb-40">
                        <strong className="pb-5">캠핑, 부담은 감소하고 즐거움은 증가하다.</strong>
                    </div>
                </div>
                <div/>
            </div>
            <div className="flex justify-between py-16">
                <div className="flex flex-col">
                    <div className="text-stone-900 text-[25px] font-medium font-['Poppins'] px-1">filter</div>
                    <div className="w-[200px] h-[0px] border border-black"/>
                    <div className="px-1 w-[200px]">
                        <StyledDropDown label="categoryfilter" dismissOnClick={false} renderTrigger={() => <span className="text-stone-900 text-base font-light font-['Poppins']">Category<FontAwesomeIcon className="pt-3 pl-28 text-[14px] text-black" icon={faPlus} /></span>}>
                        {
                            category.map((item,index)=>{
                                return (
                                    <StyledDropdownItem onClick={()=>handleFilter(`${item}`)}>{item}</StyledDropdownItem>
                                )
                            })
                        }
                        </StyledDropDown>
                    </div>
                </div>
                <div>
                    <DropDownForm
                        title=""
                        label="Sort"
                        name="정렬"
                        value={itemFilter}
                        onChange={onChange}
                        options={itemFilterOption}
                    />
                </div>
            </div>
        </div>
    )
}