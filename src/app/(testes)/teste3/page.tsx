"use client"

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

      <div className={styles.rotate_scale_down}><p>nome</p></div>

      <button onClick={toggleCardVirado}>
        <div className={cardVirado ? styles.flip_horizontal_top : ""}>{texto}</div>
      </button>


    </div>
  )
}

export default Teste3;