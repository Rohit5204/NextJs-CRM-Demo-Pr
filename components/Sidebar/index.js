import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Sidebar = () => {
    const router = useRouter();

    return (
        <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
            <div>
                <p className="text-white text-2xl font-black">CRM Demo</p>
            </div>

            <nav className="mt-5 list-none">
                <li className={router.pathname === '/' ? 'bg-blue-800 p-2' : 'p-2'}>
                    <Link href="/">
                        <a className="text-white block">Dashboard</a>
                    </Link>
                </li>
                <li className={router.pathname === '/about' ? 'bg-blue-800 p-2' : 'p-2'}>
                    <Link href="/about">
                        <a className="text-white block">Leads</a>
                    </Link>
                </li>
                <li className={router.pathname === '/products' ? 'bg-blue-800 p-2' : 'p-2'}>
                    <Link href="/products">
                        <a className="text-white block">Platform</a>
                    </Link>
                </li>
                {/* <li className={router.pathname === '/master' ? 'bg-blue-800 p-2' : 'p-2'}>
                    <Link href="/master">
                        <a className="text-white block">Master</a>
                    </Link>
                </li> */}
            </nav>

            <div className="sm:mt-10">
                <p className="text-white text-2xl font-black">Master</p>
            </div>
            <nav className="mt-5 list-none">
                <li className={router.pathname === '/master' ? 'bg-blue-800 p-2' : 'p-2'}>
                    <Link href="/master">
                        <a className="text-white block" href="/master">System Master</a>
                    </Link>
                </li>
                <li className={router.pathname === '/userMaster' ? 'bg-blue-800 p-2' : 'p-2'}>
                    <Link href="/userMaster">
                        <a className="text-white block">User Master</a>
                    </Link>
                </li>
            </nav>
        </aside>
    );
};

export default Sidebar;
