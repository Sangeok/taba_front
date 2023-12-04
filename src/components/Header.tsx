import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

import {Link, useLocation} from "react-router-dom";
import { useRecoilState } from 'recoil';
import { userInfoAtom } from '../data/userInfoAtom';


export default function Header() {
    const location = useLocation();
    const pathSegments:string[] = location.pathname.split('/');
    const path:string = `/${pathSegments[1]}`;
    let [userInfo, setUserInfo] = useRecoilState<UserInfoType>(userInfoAtom);

    // const [isLogged, setIsLogged] = useState<boolean>(false);

    return (
        <div className="flex px-5">
            <div className="flex w-screen justify-between padding p-10">
                <div className="flex">
                    <div className="text-stone-900 text-base font-normal font-['Asar']"><Link to="/">CAMPSHARE</Link></div>
                    <div className="flex pl-14">
                    <div className="w-[372px] h-[27px] justify-start items-start gap-[50px] inline-flex">
                        <div className={`text-stone-900 text-base font-medium font-['Poppins'] ${path === "/" ? "font-bold" : "text-opacity-50"}`}><Link to="/">Home</Link></div>
                        <div className={`text-stone-900 text-base font-medium font-['Poppins'] ${path === "/category" ? "font-bold" : "text-opacity-50"}`}><Link to="/category">Categories</Link></div>
                        </div>
                    </div>
                </div>
                <div className="w-[71px] h-6 justify-start items-center gap-[23px] inline-flex mr-6">
                    <Link to="/posts"><div><FontAwesomeIcon icon={faPenToSquare} /></div></Link>
                    <Link to={`${userInfo.name === '' ? '/loginOauth2' : '/mypage'}`}><div><FontAwesomeIcon icon={faUser} /></div></Link>
                </div>
            </div>
        </div>
    )
}