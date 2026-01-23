'use client'

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [frase, setFrase] = useState<string>("");
  const [texto, setTexto] = useState<string>("");

  const alterarFrase = () => {
    setFrase(texto);
  }

  return (
    <div className={styles.containerPrincipal}>
      <h1>HOME</h1>

      <div>
        <input type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button onClick={alterarFrase}>Mudar frase</button>
      </div>

      <h2>Sua mensagem: { frase}</h2>
    </div>
  );
}
