import Head from 'next/head';
import styles from '../styles/Index.module.css';
import Header from '../components/Header';
import Installation from '../components/Installation'
import Intro from '../components/Intro';
import HowToUseIt from '../components/HowToUseIt';
import MeetTheTeam from '../components/MeetTheTeam';
import Footer from '../components/Footer';

export default function Splash() {
  return (
    <>
    <div> 
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap&family=Montserrat&display=swap" rel="stylesheet"></link>
        <title>pinocchio</title>
        <link rel="icon" href="/vertical-blue.jpeg" />
        </Head> 
      <main className={styles.main}>
        <Header />
        <Installation />
        <Intro/> 
        <HowToUseIt /> 
        <MeetTheTeam/> 
        <Footer/>
        {/* <div>Description</div>
        <div>Description</div>
        <div>Install Puppeteer, Mocha, and Chai before running your tests.</div>
        <div></div>
        <div>Contact Us</div> */}
      </main>
    </div>
    </>
    )
};