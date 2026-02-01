"use client"

import { useState } from "react";
import styles from "./teste3.module.css"

const Teste3 = () => {
  const [texto, setTexto] = useState<string>("A");
  const [classe, setClasse] = useState<string>("");

  const toggleTexto = () => {
    setTexto("B");
    setClasse("flip_horizontal_top")
  }
  return (
    <div>
      <h1>Teste 3</h1>

      <div className={styles.rotate_scale_down}><p>nome</p></div>

      <button onClick={toggleTexto}>
        <div className={styles[classe]}>{texto}</div>
      </button>


    </div>
  )
}

export default Teste3;