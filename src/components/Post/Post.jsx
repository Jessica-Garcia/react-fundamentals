import { HandWaving } from 'phosphor-react';
import styles from './Post.module.css';

export function Post() {
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://github.com/Jessica-Garcia.png"
                    />
                    <div className={styles.authorIfo}>
                        <strong>Jéssica</strong>
                        <span>Dev</span>
                    </div>
                </div>

                <time title="29 de setembro às 10:24h" dateTime="2022-09-29 10:24:32">
                    Publicado à 1 hora
                </time>
            </header>

            <div className={styles.content}>
                <p>Lorem, ipsum <HandWaving color="yellow" weight='bold' size={18}/> </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod facilis, assumenda ipsa aperiam dolorum veritatis aliquid magni minima consequuntur excepturi!</p>
                <p> <a  href="#">jessi.dev/dev</a></p>
                <p><a href="#">#novoprojeto</a></p>
            </div>
        </article>
    )
};