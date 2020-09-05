import Head from "next/head";
import styles from "styles/Home.module.css";
import Location from 'components/location/location'
import WeatherWidget from "components/weather-widget/weather-widget";
import RunWidget from "components/run-widget/run-widget";
import ClothingWidget from "components/clothing-widget/clothing-widget";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paul's Run and Weather App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Paul's Local Weather App</h1>
        <Location />
        <WeatherWidget />
        <RunWidget />
        <ClothingWidget />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
