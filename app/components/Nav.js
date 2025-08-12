"use client";
import Link from "next/link";
export default function Nav() {
    return (
        <nav className="text-white bg-amber-400 w-full py-4">
            <div className="container">
                <div className="flex flex-row-reverse justify-between items-center">
                    <div className="logo font-logo font-bold tracking-wider text-xl space-x-2 uppercase">
                        oscar
                    </div>
                    <ul className="lg:flex hidden">
                        <li>
                            <Link
                                aria-current="page"
                                href="/"
                                className="router-link-active router-link-exact-active p-2 ml-4 opacity-80 font-bold hover:opacity-100 transition-opacity"
                            >
                                {" "}
                                الصفحة الرئيسية
                            </Link>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="p-2 ml-4 opacity-80 font-bold hover:opacity-100 transition-opacity"
                            >
                                افلام
                            </a>
                        </li>
                        <li>
                            <a
                                navigateto="about"
                                className="p-2 ml-4 opacity-80 font-bold hover:opacity-100 transition-opacity"
                            >
                                مسلسلات
                            </a>
                        </li>
                        <li>
                            <a
                                navigateto="about"
                                className="p-2 ml-4 opacity-80 font-bold hover:opacity-100 transition-opacity"
                            >
                                اتصل بنا
                            </a>
                        </li>
                        <li>
                            <a
                                navigateto="about"
                                className="p-2 ml-4 opacity-80 font-bold hover:opacity-100 transition-opacity"
                            >
                                عنا
                            </a>
                        </li>
                    </ul>
                    <div
                        id="btn_sideBar"
                        className="btn_sideBar text-2xl lg:hidden"
                    >
                        {" "}
                        XX{" "}
                    </div>
                </div>
            </div>
        </nav>
    );
}
