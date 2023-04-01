const cats =["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
   cats.push('Ralph');
}

function destructivelyPrependCat(name) {
   cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
   cats.pop();
}

function destructivelyRemoveFirstCat() {
   cats.shift();
}

function appendCat(name) {
   const appendCat = [...cats, 'Broom']
   return appendCat;
}

function prependCat(name) {
   const copyCat2 = ['Arnold', ...cats]
   return copyCat2;
}

function removeLastCat() {
   const copyCat3 = cats.slice(0,2);
   return copyCat3;
}

function removeFirstCat() {
   const copyCat4 = cats.slice(1)
   return copyCat4;
}