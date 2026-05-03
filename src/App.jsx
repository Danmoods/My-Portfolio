import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import articles from "./data/blog";

function App() {
  return (
    <div>
      <Header />
      <About />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;