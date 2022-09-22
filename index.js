const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) { 
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)

}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

function appendCat(name) {
    const copyofcats = [...cats];
    copyofcats.push(name)
    return copyofcats

}

function prependCat(name) {
    const copyofcats_first = [...cats];
    copyofcats_first.unshift(name)
    return copyofcats_first

}

function removeLastCat(name) {
    const copyofcats_last = [...cats];
    copyofcats_last.pop(name)
    return copyofcats_last

}

function removeFirstCat(name) {
    const copyofcats_remove = [...cats];
    copyofcats_remove.shift(name)
    return copyofcats_remove

}