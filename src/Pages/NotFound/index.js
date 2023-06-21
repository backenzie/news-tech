import { Button } from "Components/Button";
import styles from "./NotFound.module.css";
import error404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>

        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>

        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>

        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>
        <div onClick={() => navigate(-1)} className={styles.botaoContainer}>
          <Button tamanho="lg">Voltar</Button>
        </div>
        <img
          className={styles.imagemCachorro}
          src={error404}
          alt="dog de óculos vestido de humano."
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
};
