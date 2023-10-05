import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Albums from "./components/albums/Albums";

function App() {
  return (
    <div className="App">
        <Users />
        <Posts />
      <Albums />
    </div>
  );
}

export default App;
