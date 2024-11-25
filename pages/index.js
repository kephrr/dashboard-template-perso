import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SideBar from "./components/side-bar";

export default function Home() {
  return (
      <div className={styles.container}>
          <div className={styles.left}>hop</div>
          <div className={styles.mid}>hop</div>
          <div className={styles.right}>hop</div>
      </div>
  );
}
