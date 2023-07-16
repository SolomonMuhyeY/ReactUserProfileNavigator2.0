import React from "react";
export default function NavBar() {
  return (
    <nav className='bg-black w-full text-white'>
      <ul className='flex w-full list-none p-2 justify-end'>
        <li className='mr-auto'>JSOM</li>
        <li>Authors</li>
        <li className='text-gray-400'>Most Liked Post</li>
        <li className='text-gray-400'>Most Commented Post</li>
      </ul>
    </nav>
  );
}
