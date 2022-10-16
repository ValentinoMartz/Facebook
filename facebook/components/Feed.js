import React from "react";
import LeftSideBar from "./LeftSideBar";
import Stories from "./Stories";

const Feed = () => {
  return (
    <div className="flex">
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
