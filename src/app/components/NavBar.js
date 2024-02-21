'use client';

import styles from '../navbar.module.css';
import { useContext, useState } from 'react';
import { DisplayContext } from '../DisplayContext';

const NavBar = () => {
  const [isActive, setIsActive] = useState('All');
  const { toggleDisplay } = useContext(DisplayContext);

  const handleItemClick = (item) => {
    setIsActive(item);
    toggleDisplay(item);
  }

  return (
    <div className={styles.navbar}>
      <ul className={styles.navbar__list}>
        <li className={`${styles.navbar__item} ${isActive === 'All' ? styles.active : ''}`} onClick={() => handleItemClick('All')}>All</li>
        <li className={`${styles.navbar__item} ${isActive === 'About' ? styles.active : ''}`} onClick={() => handleItemClick('About')}>About</li>
        <li className={`${styles.navbar__item} ${isActive === 'Skills' ? styles.active : ''}`} onClick={() => handleItemClick('Skills')}>Skills</li>
        <li className={`${styles.navbar__item} ${isActive === 'Projects' ? styles.active : ''}`} onClick={() => handleItemClick('Projects')}>Projects</li>
        <li className={`${styles.navbar__item} ${isActive === 'Contact' ? styles.active : ''}`} onClick={() => handleItemClick('Contact')}>Contact</li>
      </ul>
    </div>
  )
}

export default NavBar
