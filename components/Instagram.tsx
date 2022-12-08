import React from 'react';

interface Props {
  // The username of the Instagram user to display the feed for
  username: string;
}

interface State {
  // The array of posts from the Instagram user's feed
  posts: any[];
  // A flag indicating whether the feed is currently being loaded
  loading: boolean;
  // An error message if there is an error loading the feed
  error: string;
}

class InstagramFeed extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: '',
    };
  }

  componentDidMount() {
    // Fetch the feed for the specified user
    fetch(`https://www.instagram.com/${this.props.username}/?__a=1`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          posts: data.graphql.user.edge_owner_to_timeline_media.edges,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          loading: false,
        });
      });
  }

  render() {
    const { posts, loading, error } = this.state;

    if (loading) {
      return <p>Loading Instagram feed...</p>;
    }

    if (error) {
      return <p>Error loading Instagram feed: {error}</p>;
    }

    return (
      <ul>
        {posts.map((post) => (
          <li key={post.node.id}>
            <img src={post.node.thumbnail_src} alt={post.node.accessibility_caption} />
          </li>
        ))}
      </ul>
    );
  }
}

export default InstagramFeed;
