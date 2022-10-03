// import React, { useState, useEffect } from 'react';
// const Header = () => {
//     return (
//         <header className="sm:flex sm:justify-between mb-6">
//             {/* <p className="mr-2 mb-5 lg:mb-0">Welcome: </p> */}

//             <a>Home</a>
//             <a>Pricing</a>
//             <a>LogOut</a>


//             <button
//                 type="button"
//                 className="bg-blue-800 w-full sm:w-auto font-bold uppercase text-xs rounded py-1 px-2 text-white shadow-md">
//                 Log out
//             </button>
//         </header>
//     );
// };

// export default Header;
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillBank } from "react-icons/ai";
const navigationRoutes = ["home", "about", "Pricing", "Contact"];

export default function Navbar() {
    const router = useRouter();
    return (
        <nav className="nav_container">
            <input
                placeholder=" Search Box....."
                style={{ height: '40px', width: '380px', borderRadius: "5px"}}
                title='Search bar'
            />
            {navigationRoutes.map((singleRoute) => {
                return (
                    <NavigationLink
                        key={singleRoute}
                        href={`/${singleRoute}`}
                        text={singleRoute}
                        router={router}
                    />
                );
            })}
            <h3> <AiFillBank /></h3>
            <button
                type="button"
                className="bg-blue-800 w-full sm:w-auto font-bold uppercase text-xs rounded py-1 px-2 text-white shadow-md">
                Log out
            </button>
        </nav>

    );
}

function NavigationLink({ href, text, router }) {
    const isActive = router.asPath === (href === "/home" ? "/" : href);
    return (
        <Link href={href === "/home" ? "/" : href} passHref>
            <a
                href={href === "/home" ? "/" : href}
                className={`${isActive && "nav_item_active"} nav_item`}>
                <span>{text} </span>
            </a>
        </Link>

    );
}