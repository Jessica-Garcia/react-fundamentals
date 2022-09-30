import { HandWaving } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './Post.module.css';

export function Post() {
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60&h=500"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Mick</strong>
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

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea 
                    placeholder='Deixe seu comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
};
