import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './Post.module.css';

export function Post({author, publishedAt, content}) {
    const setPublishedDateFormat = format(publishedAt, "dd 'de' LLLL 'às' HH:mm",{
        locale: ptBR
    });

    const setPublishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    const setContentByType = line => {
        if(line.type === 'paragraph') {
            return <p>{line.content}</p>
        }
        return <p><a href='#'>{line.content}</a></p>
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={setPublishedDateFormat} dateTime={publishedAt.toISOString()}>
                    {setPublishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                
                {content.map(setContentByType)}
   
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
