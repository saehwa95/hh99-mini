import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Main from "./pages/Main";

// import Post from "./pages/Post";
// import PostDetail from "./pages/PostDetail";
// import PostRemove from "./pages/PostRemove";

// import SignUp from "./pages/SignUp";

// 컴포넌트 작성 확인때문에 지금만 임포트
import PostBody from "./Component/PostBody";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Main />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} /> */}

          {/* <Route path="/Post" element={<Post />} />
          <Route path="/PostDetail" element={<PostDetail />} />
          <Route path="/PostRemove" element={<PostRemove />} /> */}

          <Route path="/" element={<PostBody />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
