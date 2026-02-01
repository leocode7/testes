'use client'

import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.containerPrincipal}>
      <h1>LISTA DOS TESTES</h1>

      <ul>
        <li><Link href={"/teste1"} className={styles.testeLink}>Teste 1 - Mudar frase através de um input</Link></li>
        <li><Link href={"/teste2"} className={styles.testeLink}>Teste 2 - Toggle com 4 opções (usando css.module)</Link></li>
        <li><Link href={"/teste3"} className={styles.testeLink}>Teste 3 - Animação css (site animista)</Link></li>
      </ul>
    </div>
  );
}
