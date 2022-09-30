import { HandsClapping, ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
    return (
        
        <div className={styles.comment}>
            <img src="https://github.com/Jessica-Garcia.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jéssica</strong>
                            <time title="29 de setembro às 10:24h" dateTime="2022-09-29 10:24:32">
                                Publicado à cerca de 1 hora
                            </time>
                        </div>
                        <button title="Excluir comentário"> 
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Lorem ipsum dolor sit. <HandsClapping/> <HandsClapping/></p>
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