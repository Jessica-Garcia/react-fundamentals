import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './Post.module.css';
export function Post({author, publishedAt, content}) {
    
    const [comments, setComments] = useState([
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const setPublishedDateFormat = format(publishedAt, "dd 'de' LLLL 'às' HH:mm",{
        locale: ptBR
    });

    const setPublishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });


    function handleCreateNewComment(e) {
        e.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(e) {
        setNewCommentText(e.target.value)     
    }

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

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea
                    onChange={handleNewCommentChange}
                    name="comment"
                    value={newCommentText}
                    placeholder='Deixe seu comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                
                {comments.map(comment => {
                    return <Comment content={comment}/>
                })}

            </div>
        </article>
    )
};
