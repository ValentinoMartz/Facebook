import React from "react";
import LeftSideBar from "./LeftSideBar";
import Stories from "./Stories";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import RightSidebar from "./RightSidebar";

const Feed = () => {
  return (
    <div className="flex bg-[#f2f3f7]">
      {/* LeftSidebar */}
      <LeftSideBar />
      <div className="mx-auto">
        {/* Stories */}
        <Stories />
        {/* CreatePosts */}
        <CreatePost />
        {/* Posts */}
        <Posts />
      </div>
      {/* RightSidebar */}
      <RightSidebar />
    </div>
  );
};

export default Feed;
