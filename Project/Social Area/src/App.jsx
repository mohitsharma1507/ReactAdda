import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Slidebar from "./components/slidebar";
import PostCreate from "./components/PostCreate";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/Posts-List";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Slidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <PostCreate />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}
export default App;
