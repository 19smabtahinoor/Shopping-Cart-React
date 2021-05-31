import React from 'react';


function Navbar() {
    return (
        <>
            <header className="flex flex-row flex-grow items-center">
                <div className="flex flex-row flex-grow relative items-center space-x-2">
                    <input className="px-4 py-2 w-66 rounded-full text-sm text-gray-600 outline-none" type="text" placeholder="Search" />

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 top-0 left-10 text-gray-500 bg-white p-3 w-10 h-10 rounded-full cursor-pointer hover:bg-blue-400 hover:text-white transition duration-700 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <div className="flex flex-row mr-4 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>

                    <span className="absolute top-0 left-5 bg-blue-500 text-white w-5 h-5 rounded-full items-center flex flex-row justify-center">0</span>
                </div>

                <div className="flex flex-row items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                    <span className="hidden lg:inline-flex items-center text-gray-400 font-semibold cursor-pointer">S.M.Abtahi Noor</span>
                </div>
            </header>
        </>
    );
}

export default Navbar;