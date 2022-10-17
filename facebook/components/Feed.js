import React from "react";
import LeftSideBar from "./LeftSideBar";
import Stories from "./Stories";
import CreatePost from "./CreatePost";

const Feed = () => {
  return (
    <div className="flex bg-[#f2f3f7]">
      {/* LeftSidebar */}
      <LeftSideBar />
      <div className="mx-auto">
        {/* Stories */}
        <Stories />
        {/* CreatePost */}
        <CreatePost />
        {/* Post */}
      </div>

      {/* RightSidebar */}
    </div>
  );
};

export default Feed;
