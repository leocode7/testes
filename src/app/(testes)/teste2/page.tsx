'use client'

import styles from "./teste2.module.css"
import { useState } from "react";

type Option = 'A' | 'B' | 'C' | 'D';

const Teste2 = () => {
  const [active, setActive] = useState<Option>('A');

  return (
    // Adicionado mais uma classe baseada no valor de "active" com css.module
    <div className={`${styles.base} ${styles[active]}`}>
      <div className={styles.containerBotoes}>
        <button className={active === "A" ? styles.buttonActive : ''} onClick={() => setActive('A')}>Azul</button>
        <button className={active === "B" ? styles.buttonActive : ''} onClick={() => setActive('B')}>Vermelho</button>
        <button className={active === "C" ? styles.buttonActive : ''} onClick={() => setActive('C')}>Verde</button>
        <button className={active === "D" ? styles.buttonActive : ''} onClick={() => setActive('D')}>Roxo</button>
      </div>
    </div>
  )
}

export default Teste2;