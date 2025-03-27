import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <img
          src="https://avatars.githubusercontent.com/u/165434562?v=4"
          alt="Foto de Marcello na frente de um laptop"
        />
      </div>
    </header>
  );
}
