"use client"

import clsx from "clsx";
import { useState } from "react";
import styles from "./teste3.module.css"

const Teste3 = () => {
  const [texto, setTexto] = useState<string>("A");
  const [cardVirado, setCardVirado] = useState<boolean>(false);

  const toggleCardVirado = () => {
    setCardVirado(prev => !prev);
    setTexto(texto === "B" ? "A" : "B")
  }
  return (
    <div>
      <h1>Teste 3</h1>

      <button onClick={toggleCardVirado} className={styles.buttonToggle}>
        {cardVirado && <div className={styles.flip_horizontal_top}>{texto}</div>}
        {!cardVirado && <div className={styles.flip_horizontal_top}>{texto}</div>}
      </button>

    </div>
  )
}

export default Teste3;