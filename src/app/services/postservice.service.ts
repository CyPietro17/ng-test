import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostserviceService {
  constructor() {}

  posts: Post[] = [];

  InitPost() {
    let p: Post;
    p = {
      id: 100,
      text: "Certo che Angular è proprio bello!!! O.o'",
      likes: 12,
      comments: [
        {
          id: 50,
          text: 'Che strani gusti amico mio! x.x',
          likes: 5,
          creator: 'paky12',
          postId: 100,
        },
        {
          id: 51,
          text: "Mani rubate all'agricoltura!! xD",
          likes: 17,
          creator: 'XiU',
          postId: 100,
        },
      ],
      creator: 'petrov17',
    };
    this.posts.push(p);
    p = {
      id: 101,
      text: 'Raga, meglio GOW o TLOU?',
      likes: 7,
      comments: [
        {
          id: 52,
          text: 'Non saprei, ma attacca Fifa che sto arrivando!',
          likes: 2,
          creator: 'XiU',
          postId: 101,
        },
      ],
      creator: 'paky12',
    };
    this.posts.push(p);
    p = {
      id: 102,
      text: 'Chi fuma le Camel?',
      likes: 3,
      comments: [
        {
          id: 53,
          text: 'La smetti di rubare le siga a tua madre?',
          likes: 6,
          creator: 'paky12',
          postId: 102,
        },
        {
          id: 55,
          text: 'Le ho rubate al prete in realtà :P',
          likes: 8,
          creator: 'petrov17',
          postId: 102,
        },
      ],
      creator: 'petrov17',
    };
    this.posts.push(p);
    p = {
      id: 103,
      text: 'Donne, dududu...',
      likes: 2,
      comments: [
        {
          id: 54,
          text: 'Che è successo? Raccontami in pvt...',
          likes: 1,
          creator: 'petrov17',
          postId: 103,
        },
      ],
      creator: 'paky12',
    };
    this.posts.push(p);
    p = {
      id: 104,
      text: '@paky12, Che dovevo scrivere su ChatGPT?',
      likes: 14,
      comments: [
        {
          id: 56,
          text: 'Chiedigli se sei stato adottato?',
          likes: 13,
          creator: 'petrov17',
          postId: 104,
        },
        {
          id: 57,
          text: 'Lo sa già, fagli scrivere qualcosa che non sia ovvio...',
          likes: 11,
          creator: 'paky12',
          postId: 104,
        },
      ],
      creator: 'XiU',
    };
    this.posts.push(p);
  }

  getPost() {
    return this.posts;
  }

  addPost(post: Post) {
    this.posts.push(post);
  }

  addComment(comment: PostComment) {
    for (let post of this.posts) {
      if (post.id === comment.postId) {
        post.comments.push(comment);
      }
      console.log(comment);
    }
  }
}
