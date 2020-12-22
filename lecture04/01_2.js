// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
// а) конструктор Post, который принимает параметры author, text, date и 
// сохраняет их как свойства объекта. Объекты типа Post должны иметь метод 
// edit, который будет принимать текст и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. 
// Проинициализируйте эти свойства с помощью конструктора Post, чтобы не 
// дублировать код. Также в конструкторе AttachedPost должно создаваться 
// свойство highlighted со значением false. Унаследуйте в объектах типа 
// AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который 
// будет назначать свойству highlighted значение true.
'use strict';

function PostEs5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
PostEs5.prototype.edit = function(text) {
    this.text = text
};
PostEs5.prototype.print = function() {
    return `author: ${this.author};\ntext:${this.text};\ndate:${this.date}`;
};

function AttachedPostEs5(author, text, date) {
    PostEs5.call(this, author, text, date);
    this.highlighted = false;
};
AttachedPostEs5.prototype = Object.create(PostEs5.prototype);
AttachedPostEs5.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

class PostEs6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    set edit(text) {
        this.text = text;
    }

    get print() {
        return `author: ${this.author};\ntext:${this.text};\ndate:${this.date}`;
    }
}
class AttachedPostEs6 extends PostEs6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let myobj01 = new PostEs5("one", "two", "three");
console.log(`INIT myobj01:\n${myobj01.print()}`);
myobj01.edit("four");
console.log(`TEXT CHANGED myobj01:\n${myobj01.print()}`);

let myobj02 = new PostEs6("five", "six", "seven");
console.log(`INIT myobj02:\n${myobj02.print}`);
myobj02.edit = "eight";
console.log(`TEXT CHANGED myobj01:\n${myobj02.print}`);

let myobj03 = new AttachedPostEs5("nine", "ten", "eleven");
console.log(`INIT myobj03:\n${myobj03.print()}`);
myobj03.edit("twelve")
console.log(`TEXT CHANGED myobj03:\n${myobj03.print()}`);
console.log(`myobj03.highlighted initial: ${myobj03.highlighted}`);
myobj03.makeTextHighlighted();
console.log(`myobj03.highlighted after change: ${myobj03.highlighted}`);


let myobj04 = new AttachedPostEs6("thirteen", "fourteen", "fifteen");
console.log(`INIT myobj04:\n${myobj04.print}`);
myobj04.edit = "sixteen";
console.log(`TEXT CHANGED myobj04:\n${myobj04.print}`);
console.log(`myobj04.highlighted initial: ${myobj04.highlighted}`);
myobj04.makeTextHighlighted();
console.log(`myobj04.highlighted after change: ${myobj04.highlighted}`);