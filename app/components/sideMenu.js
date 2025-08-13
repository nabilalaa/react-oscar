"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
export default function SideMenu() {
    const [isShow, setIsShow] = useState(false);

    const handleClickOutside = (e) => {
        console.log("ss");
        e.target.id == "closemenu"
            ? setIsShow(false)
            : e.target.id === "btn_sideBar"
            ? setIsShow(true)
            : setIsShow(false);
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    return (
        <div
            id="sidemenu"
            className={`sidemenu bg-amber-400 z-50 fixed h-full ${
                isShow ? "right-0" : "-right-full"
            } bottom-0 top-0 w-full sm:w-72 lg:right-0 lg:fixed lg:hidden overflow-hidden transition-all active`}
        >
            <div
                id="closemenu"
                className="closemenu w-7 h-7 bg-white lg:hidden absolute right-0 flex justify-center items-center"
            >
                X
            </div>
            <div className="logo font-logo font-bold tracking-wider text-xl space-x-2 uppercase p-4 text-center">
                oscar
            </div>
            <ul className="links p-4 text-white">
                <Link
                    onClick={handleClickOutside}
                    href="/"
                    className="router-link-active router-link-exact-active hover:bg-secondaryColor flex p-4 rounded-xl mb-2 font-bold"
                    aria-current="page"
                >
                    <li className="">الصفحة الرئيسية</li>
                </Link>
                <Link
                    onClick={handleClickOutside}
                    href="/about"
                    className="hover:bg-secondaryColor flex p-4 rounded-xl mb-2 font-bold"
                >
                    <li className="">افلام</li>
                </Link>
                <Link
                    href={""}
                    className="hover:bg-secondaryColor flex p-4 rounded-xl mb-2 font-bold"
                >
                    <li className="">مسلسلات</li>
                </Link>
                <Link
                    href={""}
                    className="hover:bg-secondaryColor flex p-4 rounded-xl mb-2 font-bold"
                >
                    <li className="">اتصل بنا</li>
                </Link>
                <Link
                    href={""}
                    className="hover:bg-secondaryColor flex p-4 rounded-xl mb-2 font-bold"
                >
                    <li className="">عنا</li>
                </Link>
            </ul>
        </div>
    );
}
