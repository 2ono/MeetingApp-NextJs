import { useEffect, useState, useContext } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "@/store/notification-context";
import Notification from "../ui/notification";

function Comments(props) {
  const notificationCtx = useContext(NotificationContext)
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);

  const [comments, setComments] = useState([]);

  const [isFetchingCOmments, setIsFetchngComments] = useState(false)

 

  useEffect(() => {
    if (showComments) {
      setIsFetchngComments(true)
      fetch("/api/comments/" + eventId)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.comments);
          setIsFetchngComments(false)
        });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);

  }

  function addCommentHandler(commentData) {
    // send data to API

    notificationCtx.showNotification({
      title: "Sending comments...",
      message: "Your comment is currently being sotred into a database.",
      status: "pending",
    });

    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        response.json().then((data) => {
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Success",
          message: "Your comment was a Success",
          status: "success",
        });
      }).catch((error) => {
        notificationCtx.showNotification({
          title: "Error",
          message: error.message || "Something went wrong",
          status: "error",
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetchingCOmments && <CommentList items={comments} />}
      {showComments && isFetchingCOmments && <p>Loading...</p>}
    </section>
  );
}

export default Comments;
