import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
    const publishedDate = new Date(publishedAt);
    
    const [comments, setComments] = useState(['Golaço!!!']);
    const [newCommentText, setNewComment] = useState(''); 

    const publishedDateFormatted = format(
        publishedDate, 
        "d 'de' LLLL 'às' HH:mm'h'", 
        { locale: ptBR } 
    );

    const publishedDateRelativeToNow = formatDistanceToNow(publishedDate, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment(event) {
        event.preventDefault();

        if (newCommentText.trim() !== '') {
            setComments([...comments, newCommentText]); 
            setNewComment(''); 
        }
    }

    function deleteComment(commentToDelete) {
        setComments(comments.filter(comment => comment !== commentToDelete));
    }

    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function handleNewCommentChange(event) {
        event.target.setCustomValidity('');
        setNewComment(event.target.value);
    }

    const isNewCommentEmpty = newCommentText.length == 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedDate.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line, index) => {
                    if (line.type === 'paragraph') {
                        return <p key={index}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return (
                            <p key={index}>
                                <a href="#">{line.content}</a>
                            </p>
                        );
                    }
                    return null;
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange} 
                    onInvalid={handleNewCommentInvalid}
                    required={true}
                />

                <button type="submit" disabled={isNewCommentEmpty}>
                    Publicar
                </button>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment, index) => (
                    <Comment 
                    key={index}
                    content={comment} 
                    onDeleteComment={() => deleteComment(comment)} 
                    />
                ))}
            </div>
        </article>
    );
}
