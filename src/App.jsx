import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./component/Footer";
import SideBar from "./component/SideBar";
import CreatePost from "./component/CreatePost";
import { useState } from "react";
import PostList from "./component/PostList";
import PostListProvider from "./store/Post-list-store";
function App() {
  const [selectTab, setSelectTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar selectedTab={selectTab} setSelectTab={setSelectTab}></SideBar>
        <div className="content">
          <Header></Header>
          {selectTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
