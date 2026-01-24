'use client'

import { useState } from "react";
import styles from "./teste1.module.css";
import { useRouter } from "next/navigation";

const Teste1 = () => {
  const [frase, setFrase] = useState<string>("Frase inicial");
  const [texto, setTexto] = useState<string>("");

  const alterarFrase = () => {
    setFrase(texto);
  }

  const router = useRouter();

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

      <h2>Sua mensagem: <span className={styles.frase}>{frase}</span ></h2>
      <button onClick={() => router.back()}>Voltar</button>
    </div>
  );
}

export default Teste1;
