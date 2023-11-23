import DropDownForm from "./form/DropDownForm";

import {useState} from "react";

import ItemDetailModal from "./form/modal/ItemDetailModal";

import { SelectChangeEvent } from '@mui/material/Select';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";

const categoryOptions:dropwDownOption[] = [
    { value: 10, label: '텐트' },
    { value: 20, label: '타프' },
    { value: 30, label: '캠핑의자' },
    { value: 40, label: '화로대' },
    { value: 50, label: '랜턴' },
];

const yearOptions:dropwDownOption[] = [
    { value: 10, label: '1년 이하' },
    { value: 20, label: '3년 이하' },
    { value: 30, label: '5년 이상' },
];

interface propsType {
    DetailItem : string,
    itemName : string,
    onChange : (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement> | SelectChangeEvent<string>) => void,
    CategoryItem : string,
    usingYearItem : string,
    handlePage : () => void,
}

export default function PostPageFirst({DetailItem, itemName, onChange, CategoryItem, usingYearItem, handlePage} : propsType) {
    const [showDetailModal, setShowDetailModal] = useState<boolean>(false);
    const [explanation, setExplnation] = useState<string>("입력하기...");

    const handleClose = () => setShowDetailModal(false);

    const checkDetail = () => {
        if(DetailItem.length > 8) {
            let strSlice = DetailItem.slice(0,8) + "...";
            setExplnation(strSlice);
        }
        else if(!DetailItem) {
            setExplnation("입력하기...")
        }
        else {
            setExplnation(DetailItem);
        }
        handleClose();
    }

    return (
        <div className="flex flex-col w-6/12 float-right p-4 justify-around">
            <div className="flex h-full flex-col">
                <div className="flex flex-col">
                    <strong className="text-base">상품 이름</strong>
                    <input
                        className="pt-3 text-sm bg-transparent border-b-2 border-solid border-gray-300 text-gray-500 box-border font-arvo h-50 w-400 focus:outline-none"
                        name="itemName"
                        type="text"
                        value={itemName}
                        onChange={onChange}
                        placeholder="ex) 텐트"
                    />
                </div>
                <div className="flex flex-col pt-4">
                    <strong className="text-base">상품 설명</strong>
                    <button onClick={()=> setShowDetailModal(true)} className="mt-3 text-sm border rounded-md border-solid border-gray-300 px-4 py-2 text-gray-700">
                        {explanation}
                    </button>
                </div>
                <DropDownForm 
                    title="카테고리 설정"
                    label="Category"
                    name="CategoryItem"
                    value={CategoryItem}
                    onChange={onChange}
                    options={categoryOptions}
                />
                <DropDownForm
                    title="사용 연수"
                    label="UsingYear"
                    name="usingYearItem"
                    value={usingYearItem}
                    onChange={onChange}
                    options={yearOptions}
                />
            </div>
                <Button 
                    variant="outlined"
                    onClick={()=> handlePage()}
                ><FontAwesomeIcon className="text-[20px] text-black" icon={faArrowRight} /></Button>
            <ItemDetailModal 
                showDetailModal={showDetailModal}
                handleClose={handleClose}
                checkDetail={checkDetail}
                DetailItem={DetailItem}
                onChange={onChange}
            />
        </div>
    )
}