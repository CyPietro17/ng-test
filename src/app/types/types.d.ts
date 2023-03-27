interface UsersByDummy {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
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
