import React from "react";
import guy from "../assets/guy7.jpg";
import dots from "../assets/dots.png";
import car from "../assets/c-class.jpg";
import hearth from "../assets/hearth.png";
import like from "../assets/like.png";
import { BiLike, BiSmile } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import share from "../assets/share.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineCamera, AiOutlineGif } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";

const Post = () => {
  return (
    <div className="bg-white rounded-[1rem] px-5 py-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12">
            <Image src={guy} className="rounded-full" />
          </div>
          <div className="ml-3">
            <p className="font-bold">Joe Doe</p>
            <div className="flex">
              <p className="text-xs">3 hours ago &#8226;</p>
              <BiWorld className="ml-1 shrink-0" />
            </div>
          </div>
        </div>

        <div className="w-10 h-10">
          <Image src={dots} />
        </div>
      </div>

      {/* Input */}
      <div className="my-3">
        <p>My brand new car</p>
      </div>

      {/* Image */}
      <div className="-mx-5">
        <Image src={car} />
      </div>

      {/* Number of Likes + buttons */}
      <div className="">
        <div className="flex justify-between text-[#8e8d8d]">
          <div className="flex items-center ">
            <div className="w-[1.1rem] h-[1.1rem]">
              <Image src={like} />
            </div>
            <div className="ml-[2.px] w-5 h-5">
              <Image src={hearth} />
            </div>
            <p className="pl-2">Emily Doe and another 117</p>
          </div>
          <p>72 comments </p>
        </div>
        <div className="border-b my-2"></div>
        <div className="flex justify-between mx-6">
          <div className="flex items-center">
            <BiLike className="w-6 h-6" />
            <p className="pl-2 text-[18px]">Like</p>
          </div>
          <div className="flex items-center">
            <FaRegCommentAlt className="w-5 h-5" />
            <p className="pl-2 text-[18px]">Comment</p>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6">
              <Image src={share} />
            </div>
            <p className="pl-2 text-[18px]">Share</p>
          </div>
        </div>
        <div className="border-b my-2"></div>
      </div>

      {/* Comment Section */}
      <div className="max-h-40 overflow-y-auto">
        <div className="flex justify-between text-[#8e8d8d]">
          <p>See 71 previous comments</p>
          <div className="flex items-center">
            <p>Most Relevant </p>
            <RiArrowDownSLine />
          </div>
        </div>
        <div className="">
          {/* First Comment */}
          <div className="">
            <div className="flex items-center mt-3">
              <div className="w-10 h-10">
                <Image src={guy} className="rounded-full" />
              </div>
              <p className="ml-2 font-bold">Joe Doe</p>
              <p className="ml-2">I love the color</p>
            </div>
            <div className="flex ml-[3rem] -1mt-1.5">
              <p className="mr-2">Like</p>
              <p>Reply</p>
            </div>
          </div>
          {/* Second Comment */}
          <div className="">
            <div className="flex items-center mt-3">
              <div className="w-10 h-10">
                <Image src={guy} className="rounded-full" />
              </div>
              <p className="ml-2 font-bold">Joe Doe</p>
              <p className="ml-2">Second comment</p>
            </div>
            <div className="flex ml-[3rem] -1mt-1.5">
              <p className="mr-2">Like</p>
              <p>Reply</p>
            </div>
          </div>
        </div>
      </div>

      {/* Inputs */}
      <div className="flex items-center mt-4">
        <div className=" w-10 h-10 shrink-0">
          <Image src={guy} className="rounded-full" />
        </div>
        <div className="flex items-center w-full ml-2 bg-[#f2f3f7] rounded-full relative">
          <input
            type="text"
            placeholder="Write a comment"
            className="outline-0 p-2 rounded-full w-full bg-[#f2f3f7]"
          />
          <div className="flex absolute right-[4.5rem] space-x-2 text-[#8e8d8d]">
            <BiSmile />
            <AiOutlineCamera />
            <AiOutlineGif />
          </div>

          <div className="mr-4 bg-blue-400 text-white rounded-full">
            <button className="font-bold px-2">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;