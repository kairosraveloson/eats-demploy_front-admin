import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Corps from "../component/corps";
import "bootstrap-icons/font/bootstrap-icons.css";
import Barre from "../component/barre";
import Dashboard_bar from "../component/dashboard";

export default function Home() {
  return (
    <>
      <Barre />
      <Dashboard_bar />
      <Corps />
    </>
  );
}
