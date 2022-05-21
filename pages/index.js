import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

import FirstHerosection from "../components/FirstHerosection";
import SecondHero from "../components/SecondHero";
import ThirdHeroSection from "../components/ThirdHeroSection";
import FourthHero from "../components/FourthHero";
import CardSection from "../components/CardSection";
import MailSection from "../components/MailSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Findtrend | Home</title>
        <meta name="description" content="Find Trend Figma UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <FirstHerosection />
        <SecondHero />
        <ThirdHeroSection />
        <FourthHero />
        <CardSection />
        <MailSection />
        <Footer />
      </main>
    </div>
  );
}
