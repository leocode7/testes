'use client'

import styles from "./teste2.module.css"
import { useState } from "react";

type Option = 'A' | 'B' | 'C' | 'D';

const Teste2 = () => {
  const [active, setActive] = useState<Option>('A');

  return (
    <div className={`${styles.base} ${styles[active]}`}>
      <div className={styles.containerBotoes}>
        <button onClick={() => setActive('A')}>Azul</button>
        <button onClick={() => setActive('B')}>Vermelho</button>
        <button onClick={() => setActive('C')}>Verde</button>
        <button onClick={() => setActive('D')}>Roxo</button>
      </div>
    </div>
  )
}

export default Teste2;