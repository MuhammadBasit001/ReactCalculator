import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section>
        <div>
            <ul className='flex  justify-around py-4 bg-red-950 text-white text-2xl'>
                <Link to={"/"}>Calculator 1</Link>
                <Link to={"/cal"}>Calculator 2</Link>
            </ul>
        </div>
    </section>
  )
}

export default Header
