import search from "../src/modules/dictionary.js"; //The module under test
import assert from "assert"; //Utilities to help the test

//A list of words we SHOULD find
const goodWords = [
    "aardvark",
    "fermenting",
    "photograph",
    "zygotes",
    "Texas"
]

//added new set of words for the spellchecker to find. All begin with lowercase.
    const lowerCase =[
        "zulu",
        "cheese",
        "grommit",
        "garfield",
        "jordan"
]

//A list of words we SHOULD NOT find
const badWords = [
    "squanchy",
    "cromulent",
    "Habamanosa"
]

//Define a teste suite
describe("Dictionary Functional Tests:", function () {

    //For eachgood word...
    for (const word of goodWords) {
        //Define a test...
        it(`Finds the word ${word}`, function () {
            //That makes sure we find the word
            assert.ok(search(word));
        });
    }

    for (const word of badWords) {
        it(`Does not find the word ${word}`, function () {
            assert.ok(!search(word));
        });
    }
//this is to search for those words
    for (const word of lowerCase) {
        it(`Finds words that are lower case in the dictionary ${word}`, function () {
            assert.ok(search(word));
        });
    }




});