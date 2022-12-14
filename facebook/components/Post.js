import React, { useEffect, useState } from "react";
import guy from "../assets/guy7.jpg";
import dots from "../assets/dots.png";
import car from "../assets/c-class.jpg";
import hearth from "../assets/hearth.png";
import like from "../assets/like.png";
import share from "../assets/share.png";
import blacklike from "../assets/2unlike.png";
import bluelike from "../assets/25like.png";
import nouser from "../assets/nouser.png";
import { BiLike, BiSmile } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineCamera, AiOutlineGif } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";
import Moment from "react-moment";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useSession, signIn, signOut } from "next-auth/react";

const Post = ({ id, timestamp, caption, userImg, username, img }) => {
  const { data: session } = useSession();
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  //When likes update in the db update the likes in the app as well
  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  //Checking if user liked already
  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  //When clicked once add like to firebase
  //When clicked twice delete like from db
  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session?.user?.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session?.user?.uid), {
        username: session?.user?.name,
      });
    }
  };

  //Send the comments to the db
  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session?.user?.name,
      image: session?.user?.image,
      timestamp: serverTimestamp(),
    });
  };

  //When comments update in db update them in the app as well
  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => setComments(snapshot.docs)
    );
  }, [db, id]);

  return (
    <div className="bg-white rounded-[1rem] px-5 py-4 mt-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12">
            <img src={userImg} className="rounded-full" />
          </div>
          <div className="ml-3">
            <p className="font-bold">{username}</p>
            <div className="flex">
              <p className="text-xs">
                <Moment fromNow>{timestamp?.toDate()}</Moment> &#8226;
              </p>
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
        <p>{caption}</p>
      </div>

      {/* Image */}
      <div className="-mx-5">
        <img src={img} />
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
            <p className="pl-2 whitespace-nowrap text-[15px] sm:text-[16px]">
              {likes.length < 1
                ? `Luc??a Gri???? likes`
                : `Luc??a Gri???? and another ${likes.length}`}
            </p>
          </div>
          <p className="whitespace-nowrap text-[15px] sm:text-[16px]">
            {comments.length === 1
              ? `${comments.length} Comment`
              : `${comments.length} Comments`}
          </p>
        </div>
        <div className="border-b my-2"></div>
        <div className="flex justify-between mx-6">
          <div className="flex items-center" onClick={likePost}>
            <img
              src={hasLiked ? bluelike.src : blacklike.src}
              className="w-6 h-6"
            />
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
          <p>
            {comments.length === 1
              ? `See the previous comment`
              : `See ${comments.length} previous comments`}
          </p>
          <div className="flex items-center">
            <p>Most Relevant </p>
            <RiArrowDownSLine />
          </div>
        </div>
        <div className="">
          {/* First Comment */}
          {comments.map((comment) => (
            <div key={comment.id} className="">
              <div className="flex items-center mt-3">
                <div className="w-10 h-10">
                  <img src={comment.data().image} className="rounded-full" />
                </div>
                <p className="ml-2 font-bold">{comment.data().username}</p>
                <p className="ml-2">{comment.data().comment}</p>
              </div>
              <div className="flex ml-[3rem] -1mt-1.5">
                <p className="mr-2">Like</p>
                <p>Reply</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inputs */}
      <div className="flex items-center mt-4">
        <div className=" w-10 h-10 shrink-0">
          <img
            src={session ? session?.user?.image : nouser.src}
            className="rounded-full"
          />
        </div>
        <div className="flex items-center w-full ml-2 bg-[#f2f3f7] rounded-full relative">
          <input
            type="text"
            placeholder="Write a comment"
            className="outline-0 p-2 rounded-full w-full bg-[#f2f3f7]"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex absolute right-[4.5rem] space-x-2 text-[#8e8d8d]">
            <BiSmile />
            <AiOutlineCamera />
            <AiOutlineGif />
          </div>

          <div className="mr-4 bg-blue-400 text-white rounded-full">
            <button className="font-bold px-2" onClick={sendComment}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
