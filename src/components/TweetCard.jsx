import { useState } from 'react'

function TweetCard({ username, handle, time, text, likes, comments, reposts }) {
  const [likeCount, setLikeCount] = useState(likes)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1)
      setIsLiked(false)
    } else {
      setLikeCount(likeCount + 1)
      setIsLiked(true)
    }
  }

  return (
    <div style={{ border: "1px solid #333", padding: "16px", marginBottom: "8px" }}>
      <div>
        <strong>{username}</strong> {handle} · {time}
      </div>
      <p>{text}</p>
      <div>
        💬 {comments} &nbsp;
        🔁 {reposts} &nbsp;
        <span onClick={handleLike} style={{ cursor: "pointer" }}>
          {isLiked ? "❤️" : "🤍"} {likeCount}
        </span>
      </div>
    </div>
  )
}

export default TweetCard