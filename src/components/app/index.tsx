import * as React from 'react';
import styles from './styles.module.scss';
import Header from './header';
import Navbar from './nav';
import Profile from './profile';

const App = ({}) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
