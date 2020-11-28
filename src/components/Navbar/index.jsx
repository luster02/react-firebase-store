import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Nav, Link } from './styles'
import { MdHome, MdPersonOutline, MdBookmark } from 'react-icons/md'

const SIZE = "32px"

export const Navbar = () => {
    const { pathname } = useLocation()
    const [showFixed, setShowFixed] = useState(true)

    useEffect(() => {
        const onScroll = () => {
            const newShowFixed = window.scrollY < 120
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])


    return (
        showFixed && <Nav>
            <Link active={pathname === '/' ? "true" : null} to="/" >
                <MdHome size={SIZE} />
            </Link>
            <Link active={pathname === '/favs' ? "true" : null} to="/favs" >
                <MdBookmark size={SIZE} />
            </Link>
            <Link active={pathname === '/user' ? "true" : null} to="/user" >
                <MdPersonOutline size={SIZE} />
            </Link>
        </Nav>
    )
}