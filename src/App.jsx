import { useState } from 'react'
import TweetCard from './components/TweetCard'

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

  const handleDelete = (id) => {
  setTweets(tweets.filter(tweet => tweet.id !== id))
}

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

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Home</h2>
      <div style={{ marginBottom: "20px" }}>
        <textarea
          rows={3}
          placeholder="What is happening?!"
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
          style={{ width: "100%", padding: "10px", fontSize: "16px" }}
        />
        <button onClick={handlePost}>Post</button>
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