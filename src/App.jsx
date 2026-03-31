import { useState } from 'react'
import TweetCard from './components/TweetCard'
import './index.css'

const initialTweets = [
  {
    id: 1,
    username: "Elon Musk",
    handle: "@elonmusk",
    time: "2h",
    text: "Propaganda words work so well",
    likes: 89000,
    comments: 3200,
    reposts: 12000
  },
  {
    id: 2,
    username: "Gayathri Yatheesh",
    handle: "@gayathriyatheesh",
    time: "1h",
    text: "Just built my first React component!",
    likes: 100,
    comments: 20,
    reposts: 15
  },
  {
    id: 3,
    username: "SRM AP",
    handle: "@srmap",
    time: "30m",
    text: "Welcome to semester 4 everyone!",
    likes: 500,
    comments: 80,
    reposts: 120
  }
]

function App() {
  const [tweets, setTweets] = useState(initialTweets)
  const [newTweet, setNewTweet] = useState("")

  const handlePost = () => {
    if (newTweet.trim() === "") return
    const tweet = {
      id: tweets.length + 1,
      username: "Gayathri Yatheesh",
      handle: "@gayathriyatheesh",
      time: "now",
      text: newTweet,
      likes: 0,
      comments: 0,
      reposts: 0
    }
    setTweets([tweet, ...tweets])
    setNewTweet("")
  }

  const handleDelete = (id) => {
    setTweets(tweets.filter(tweet => tweet.id !== id))
  }

  return (
    <div className="container">
      <div className="header">Home</div>
      <div className="tweet-input-container">
        <div className="avatar">G</div>
        <div className="tweet-input">
          <textarea
            rows={3}
            placeholder="What is happening?!"
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
          />
          <button className="post-button" onClick={handlePost}>Post</button>
        </div>
      </div>
      {tweets.map(tweet => (
        <TweetCard
          key={tweet.id}
          username={tweet.username}
          handle={tweet.handle}
          time={tweet.time}
          text={tweet.text}
          likes={tweet.likes}
          comments={tweet.comments}
          reposts={tweet.reposts}
          onDelete={() => handleDelete(tweet.id)}
        />
      ))}
    </div>
  )
}

export default App