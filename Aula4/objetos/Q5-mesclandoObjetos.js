function mesclarObjetos(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

let objA = { a: 1, b: 2 };
let objB = { c: 3, d: 4 };
console.log(mesclarObjetos(objA, objB));
