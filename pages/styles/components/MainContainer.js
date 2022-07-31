import React from 'react';
import Head from 'next/dist/shared/lib/head';
import styles from '../index.module.scss';
import A from "./A";

const MainContainer = ({children, keywords}) => {
  return (
    <>
      <Head>
        <meta keywords="ELEKS project + keywords"></meta>
        <title>Breakthrough1000</title>
      </Head>
      <div className={styles.nav}>
        <A  href={'/'} text="Головна" />
        <A  href={'/home'} text="Домашня" />
        <A  href={'/users'} text="Користувачі" />
        <A  href={'/advices'} text="Поради" />
      </div>
      <div>
        {children}
      </div>
    </>
  );
};

export default MainContainer;