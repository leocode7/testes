'use client'

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.containerPrincipal}>
      <h1>LISTA DOS TESTES</h1>

      <ul className={styles.containerLinks}>
        <li><Link href={"/teste1"} className={styles.testeLink}>Teste 1 - Mudar frase através de um input: usando o onChange e value do input e </Link></li>
        <li><Link href={"/teste2"} className={styles.testeLink}>Teste 2 - Toggle com 4 opções: usando css.module</Link></li>
        <li><Link href={"/teste3"} className={styles.testeLink}>Teste 3 - Animação css (site animista)</Link></li>
        <li><Link href={"/teste4"} className={styles.testeLink}>Teste 4 - Toggle com duas opções: alternando as classes usando a biblioteca clsx</Link></li>
      </ul>
    </div>
  );
}
