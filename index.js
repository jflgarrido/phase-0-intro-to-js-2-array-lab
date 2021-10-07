const cats = ["Milo", "Otis", "Garfield"]
function cuties(name) {
    console.log(cats)
}
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo");
}
const newcats = [...cats, "Broom"];
function appendCat(name) {
    return newcats;
}
const kitties = ["Arnold", ...cats]
function prependCat(name) {
    return kitties;
}
function removeLastCat(name) {
    return cats.slice(0,2);
}
function removeFirstCat(name) {
    return cats.slice(-2);
}
