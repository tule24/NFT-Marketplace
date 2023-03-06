import React from 'react'
import Link from 'next/link'
// INTERNAL IMPORT
import Style from './Discover.module.css'
import { discover } from '../NavBarData'
const Discover = () => {
  return (
    <div>
      {discover.map((el, i) => (
        <div key={i} className={Style.discover}>
          <Link href={{ pathname: `/${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Discover