import type { NextPage } from 'next'
import Link from 'next/link';
import React from 'react';

const Home: NextPage = () => {
     return (
      <div className='bg-green-500'>
          <p>Página de index</p>
          <Link href='/admin/usuarios'>
          <a className='cursor-pointer'>Ir a admin de usuarios</a>
          </Link>
      </div>
    )
  }
  
export default Home
