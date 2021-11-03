
import React from 'react'
import Link from 'next/link';

const ejemplo = () => {
    return (
      <div>
          <p>Este es un ejemplo</p>
          <Link href='/admin/usuarios'>
          <p>Ir a admin de usuarios</p>
          </Link>
      </div>
    )
  }
  
export default ejemplo
