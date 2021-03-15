import React from 'react';
import styles from './styles.module.scss';
import Logo from '@assets/images/datadog.svg';

const Header = ({}) => {
  return (
    <header className={styles.header}>
      <img className={styles.header_logo} src={Logo} alt="1" />
    </header>
  );
};

export default Header;
