import React from 'react'

const NavBar = ({menuItems, displayNavMenu}) => {
  return (
    <nav className={`${displayNavMenu ? 'showMenu': ''}`}>
      <ul>
        {
          menuItems.map((item) =>
            <li className='menu-link' key={item.id}>
              {item.text}
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default NavBar
