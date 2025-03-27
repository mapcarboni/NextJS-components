import Header from "../components/Header";
import Section from "../components/Section";
import SocialCard from "../components/SocialCard";

import styles from "../styles/Section.module.css";
import { games } from "../data/games";
import { streamers } from "../data/streamers";
import { socialList } from "../data/socialList";

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <Section title="Meus jogos" description="Os games que eu mais curto jogar!" data={games} cardClassName={styles.card} />
                <Section title="Canais e streamers" description="Lista de canais e transmissões que não perco!" data={streamers} cardClassName={styles.roundedCard} />
            </main>
            <footer>
                <ul className="footer">
                    {socialList.map((social, index) => (
                        <SocialCard key={index} link={social.link} color={social.color} svg={social.svg} />
                    ))}
                </ul>
            </footer>
        </div>
    );
}
