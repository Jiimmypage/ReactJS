import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Jiimmypage.png',
      name: 'Luis Felipe',
      role: 'Aprendiz',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu Github.' },
      { type: 'paragraph', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-02-01 12:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/tcc0lin.png',
      name: 'tcc0lin',
      role: 'Senior Frontend Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Codei o melhor jogo de todos os tempos.' },
      { type: 'paragraph', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-02-10 12:00:00'),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id} 
              publishedAt={post.publishedAt}
              author={post.author}
              content={post.content} 
            />
          ))}
        </main>
      </div>
    </>
  );
}
