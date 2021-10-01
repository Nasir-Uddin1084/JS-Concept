let val;
val = this;
val = window;
console.log(val);
val = window.document;
console.log(val);
val = document;
console.log(val);

val = document.all;
console.log(val);
val = document.all[20];
console.log(val);
val = document.all.length;
console.log(val);

val = document.head;
console.log(val);
val = document.body;
console.log(val);

val = document.doctype;
console.log(val);

val = document.domain;
console.log(val);

val = document.URL;
console.log(val);

val = document.characterSet;
console.log(val);

val = document.contentType;
console.log(val);

val = document.forms;
console.log(val);

val = document.links;
console.log(val);

val = document.links[0];
console.log(val);

val = document.links[0].href;
console.log(val);

val = document.images;
console.log(val);

val = document.scripts;
console.log(val);
val = document.scripts[0];
console.log(val);
val = document.scripts[0].src;
console.log(val);
val = document.scripts[0].getAttribute('src');
console.log(val);
