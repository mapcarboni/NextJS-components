import styles from "../styles/GameCard.module.css";

export default function GameCard({ name, image, link, className }) {
    return (
        <li className={`${styles.card} ${className || ""}`}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={`Imagem do jogo ${name}`} />
                <p>{name}</p>
            </a>
        </li>
    );
}
