import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { Trash, ThumbsUp } from "phosphor-react";

export function Comment({ content, onDeleteComment }) { 

    const [LikeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content); 
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Jiimmypage.png" alt="" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luis Felipe</strong>
                            <time title="21 de março às 08:13" dateTime="2025-03-21T08:13:00">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer className={styles.commentFooter}>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Like <span>{LikeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
