'use client'

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.containerPrincipal}>
      <h1>LISTA DOS TESTES</h1>

      <ul>
        <li><Link href={"/teste1"} className={styles.testeLink}>Teste 1 - Mudar frase através de um input</Link></li>
      </ul>
    </div>
  );
}
