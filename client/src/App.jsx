import "./App.css";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 style={{ color: "#333" }}>Blog Application</h1>
        <BlogForm />
        <BlogList />
      </header>
    </div>
  );
}

export default App;
