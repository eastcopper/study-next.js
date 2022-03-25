import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "../src/components/list";
import { BASE_URL } from "../src/lib/export/data";
import { Dimmer, Loader } from "semantic-ui-react";

const Home: NextPage = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  console.log(data);

  async function getData() {
    await axios
      .get(BASE_URL + "api/v1/products.json?brand=maybelline")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>공부용</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      ) : (
        <ItemList item={data} />
      )}
    </div>
  );
};

export default Home;
