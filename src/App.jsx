import { Post } from "./Post";
import styles from './App.module.css';
import './global.css';
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          <Post 
            author="Jéssica" 
            content="Lorem ipsum dolor, sit amet consectetur "
          />
        </main>
      </div>
    </div>
  )
}
