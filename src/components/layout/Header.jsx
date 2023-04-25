import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'


const links = [{
    label: 'Home',
    route: '/'
  }, {
    label: 'About',
    route: '/about'
  }, {
    label: 'Photos',
    route: '/photos'
  }, {
    label: 'Posts',
    route: '/posts'
  }]

export default function Header() {
  return (
    <header className={styles.header}>
        <nav>
            <ul className={styles.ul}>
                {links.map(( {label, route }) => (
                <li key={route} className = {styles.li}>
                    <Link href={route}>
                    {label}
                    </Link>
                </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}
