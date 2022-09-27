import { Post } from "./Post";
import './global.css';
import { Header } from "./components/Header/Header";

export function App() {

  return (
    <div>

    <Header/>

      <Post 
        author="Janis" 
        content="Kozmic blues"
      />
    </div>
    
  )
}


