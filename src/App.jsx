import TweetCard from './components/TweetCard'

const tweets = [
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
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Home</h2>
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
        />
      ))}
    </div>
  )
}

export default App