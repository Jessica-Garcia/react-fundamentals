import styles from './App.module.css';
import './global.css';
import { Post } from "./components/Post/Post";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80&h=500",
      name: 'Lorem',
      role: 'Dev'
    },
    content: [
      {type: 'paragraph', content: 'Lorem Ipsum' },
      {type: 'paragraph', content: 'Lorem ipsum dolor sit.'},
      {type: 'link', content: 'Lorem.ipsum/dolorsit'},
    ],
    publishedAt: new Date('2022-10-01 16:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80&h=500",
      name: 'Lorem',
      role: 'Dev'
    },
    content: [
      {type: 'paragraph', content: 'Lorem Ipsum' },
      {type: 'paragraph', content: 'Lorem ipsum dolor sit.'},
      {type: 'link', content: 'Lorem.ipsum/dolorsit'},
    ],
    publishedAt: new Date('2022-10-01 14:00'),
  }
]

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          {
            posts.map(post => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
