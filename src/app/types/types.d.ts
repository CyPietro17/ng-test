interface User {
  id: number;
  username: string;
  email: string;
  postsId: number[];
}

interface Post {
  id: number;
  text: string;
  likes: number;
  comments: PostComment[];
  creator: string;
}

interface PostComment {
  id: number;
  text: string;
  likes: number;
  creator: string;
  postId: number;
}
