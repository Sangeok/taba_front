import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import {Link, useLocation} from "react-router-dom";


export default function Header() {
    const location = useLocation();
    const pathSegments:string[] = location.pathname.split('/');
    const path:string = `/${pathSegments[1]}`;

    return (
        <div className="flex">
            <div className="flex w-screen justify-between padding p-10">
                <div className="flex">
                    <div className="text-stone-900 text-base font-normal font-['Asar']"><Link to="/">CAMPSHARE</Link></div>
                    <div className="flex pl-14">
                    <div className="w-[372px] h-[27px] justify-start items-start gap-[50px] inline-flex">
                        <div className={`text-stone-900 text-base font-medium font-['Poppins'] ${path === "/" ? "font-bold" : "text-opacity-50"}`}><Link to="/">Home</Link></div>
                        <div className={`text-stone-900 text-base font-medium font-['Poppins'] ${path === "/categories" ? "font-bold" : "text-opacity-50"}`}><Link to="/categories">Categories</Link></div>
                        <div className={`text-stone-900 text-base font-medium font-['Poppins'] ${path === "/recommend" ? "font-bold" : "text-opacity-50"}`}><Link to="/recommend">Recommend</Link></div>
                        </div>
                    </div>
                </div>
                <div className="w-[71px] h-6 justify-start items-center gap-[23px] inline-flex">
                    {/* 여기도 Link로 바꿔줘야 함 */}
                    <div className="w-6 h-6 relative"><FontAwesomeIcon icon={faHeart} /></div>
                    <div className="w-6 h-6 relative"><FontAwesomeIcon icon={faUser} /></div>
                </div>
            </div>
        </div>
    )
}