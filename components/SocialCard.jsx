import styles from "../styles/SocialCard.module.css";

export default function SocialCard({ link, color, svg }) {
    return (
        <li>
            <a target="_blank" href={link}>
                <svg className={styles.imgCard} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g fill={color}>{svg}</g>
                </svg>
            </a>
        </li>
    );
}
