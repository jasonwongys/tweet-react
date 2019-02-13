class ListTweets extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name} <span>@{this.props.screen_name}</span></h2>
        <p>{this.props.text}</p>
        <p>Likes: {this.props.favorite_count}</p>
  
      </div>
    );
  }
}

class Tweet extends React.Component {

    render() {
        let tweetContent = this.props.tweets.map( (tweet, index) => {
                              return <ListTweets key={tweet.id} 
                              text={tweet.text} 
                              name={tweet.user.name}
                              screen_name={tweet.user.screen_name}
                              favorite_count={tweet.favorite_count}>
                              </ListTweets>
                            });
        return (
          <div>
            {tweetContent}
          </div>
        );
    }
}

ReactDOM.render(
    <Tweet tweets = {tweets} />,
    document.getElementById('root')
);