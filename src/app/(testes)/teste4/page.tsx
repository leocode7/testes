'use client'

import clsx from "clsx";
import styles from "./teste4.module.css"
import { useState } from "react";

const Teste4 = () => {
  const [ativo, setAtivo] = useState<boolean>(false);

  return (
    <div className={styles.containerPrincipal}>
      <h1>Teste 4</h1>

      <button
        onClick={() => setAtivo(prev => (!prev))}
        className={clsx(styles.button, ativo && styles.ativo)}
      >
        {ativo ? 'Ativo' : 'Inativo'}
      </button>

      {ativo && <p className={styles.ativo}>A</p>}
      {!ativo && <p className={styles.inativo}>B</p>}

    </div>
  ) 
}

export default Teste4;