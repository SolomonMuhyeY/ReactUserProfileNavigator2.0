import React from "react";
export default function NavBar() {
  return (
    <nav className='nav-bar'>
      <ul>
        <li className='left'>JSOM</li>
        <li>Authors</li>
        <li className='gray'>Most Liked Post</li>
        <li className='gray'>Most Commented Post</li>
      </ul>
    </nav>
  );
}
