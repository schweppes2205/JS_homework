// Выведите в консоль значения, указанные рядом с комментариями: 
'use strict';

const post = {
    author: "John", //вывести этот текст 
    postId: 23,
    comments: [{
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
            likes: 10,
            dislikes: 2 //вывести это число 
        }
    }, {
        userId: 5, //вывести это число 
        userName: "Jane",
        text: "lorem ipsum 2", //вывести этот текст 
        rating: { likes: 3, dislikes: 1 }
    }, ]
};

console.log(`author: ${post.author}\n 
dislikes: ${post.comments[0].rating.dislikes}\n
userId: ${post.comments[1].userId}\n
text: ${post.comments[1].text}`);