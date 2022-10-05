import { HandsClapping, ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

export function Comment({content}) {
    return ( 
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60&h=500" alt="" 
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Joan</strong>
                            <time title="29 de setembro às 10:24h" dateTime="2022-09-29 10:24:32">
                                Publicado à cerca de 1 hora
                            </time>
                        </div>
                        <button title="Excluir comentário"> 
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir
                        <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
