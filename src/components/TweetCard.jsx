import { useState } from 'react'

function TweetCard({ username, handle, time, text, likes, comments, reposts, onDelete }) {
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
    <div className="tweet-card">
      <div className="avatar">
        {username[0]}
      </div>
      <div className="tweet-content">
        <div className="tweet-header">
          <span className="tweet-username">{username}</span>
          <span className="tweet-handle">{handle}</span>
          <span className="tweet-handle">· {time}</span>
          <button className="delete-btn" onClick={onDelete}>🗑️</button>
        </div>
        <p className="tweet-text">{text}</p>
        <div className="tweet-actions">
          <button className="action-btn">💬 {comments}</button>
          <button className="action-btn">🔁 {reposts}</button>
          <button
            className={`action-btn like-btn ${isLiked ? 'liked' : ''}`}
            onClick={handleLike}
          >
            {isLiked ? "❤️" : "🤍"} {likeCount}
          </button>
        </div>
      </div>
    </div>
  )
}

export default TweetCard