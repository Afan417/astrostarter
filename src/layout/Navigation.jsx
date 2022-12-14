import React, { useState } from 'react'

const NavItem = ({ children, href }) => {
  return (
    <li className="w-full md:w-auto md:mr-6">
      <a
        href={href}
        className="block py-4 md:py-0 border-b border-gray-200 md:border-b-0 md:border-transparent"
      >
        {children}
      </a>
    </li>
  )
}

export default function Navigation() {
  const [menu, setMenu] = useState(false)

  return (
    <div className="bg-white shadow-lg flex items-center">
      <div className="container">
        <div className="flex flex-wrap items-center py-6 justify-between">
          <div className="w-1/2">
            <p className="font-bold text-gray-800 text-2xl">Next Starter</p>
          </div>
          <div className="w-auto md:hidden block">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <img
                src="../svg/menu.svg"
                alt="Hamburger"
                onClick={() => setMenu(!menu)}
                className="fill-current text-black w-6 h-6"
              />
            </label>
          </div>

          <div
            className={`md:w-1/2 md:flex justify-center md:justify-end ${
              menu ? ' flex w-full' : ' hidden'
            }`}
          >
            <ul className="flex w-full p-5 flex-col md:w-auto md:p-0 md:flex-row items-center">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/about">About</NavItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
