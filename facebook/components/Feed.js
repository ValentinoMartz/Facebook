import React from "react";
import LeftSideBar from "./LeftSideBar";
import Stories from "./Stories";

const Feed = () => {
  return (
    <div className="flex bg-[#f2f3f7] h-screen">
      {/* LeftSidebar */}
      <LeftSideBar />
      {/* Stories */}
      <Stories />

      {/* CreatePost */}
      {/* Post */}
      {/* RightSidebar */}
    </div>
  );
};

export default Feed;
