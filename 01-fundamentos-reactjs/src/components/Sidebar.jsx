import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1687201986600-3303920c99b5?fm=jpg&q=90&w=200&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVyZGUlMjBlc2N1cm8lMjBkaWF8ZW58MHx8MHx8fDA%3D"
        alt="Imagem de capa"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/tcc0lin.png" className={styles.avatar} />
        <strong>Luis Felipe</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
