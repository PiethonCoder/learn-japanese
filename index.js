$(function () {
    $("#run").click(function () {
        run();
    })
})

//Katakana 	
var kana = {
    "ア": "a",
    "イ": "i",
    "ウ": "u",
    "エ": "e",
    "オ": "o",
    "カ": "ka",
    "キ": "ki",
    "ク": "ku",
    "ケ": "ke",
    "コ": "ko",
    "サ": "sa",
    "シ": "shi",
    "ス": "su",
    "セ": "se",
    "ソ": "so",
    "タ": "ta",
    "チ": "chi",
    "ツ": "tsu",
    "テ": "te",
    "ト": "to",
    "ナ": "na",
    "ニ": "ni",
    "ヌ": "nu",
    "ネ": "ne",
    "ノ": "no",
    "ハ": "ha",
    "ヒ": "hi",
    "フ": "fu",
    "ヘ": "he",
    "ホ": "ho",
    "マ": "ma",
    "ミ": "mi",
    "ム": "mu",
    "メ": "me",
    "モ": "mo",
    "ヤ": "ya",
    "ユ": "yu",
    "ヨ": "yo",
    "ラ": "ra",
    "リ": "ri",
    "ル": "ru",
    "レ": "re",
    "ロ": "ro",
    "ワ": "wa",
    "ヲ": "o",
    "ン": "n",
    "ガ": "ga",
    "ギ": "gi",
    "グ": "gu",
    "ゲ": "ge",
    "ゴ": "go",
    "ザ": "za",
    "ジ": "ji",
    "ズ": "zu",
    "ゼ": "ze",
    "ゾ": "zo",
    "ダ": "da",
    "ヂ": "ji",
    "ヅ": "zu",
    "デ": "de",
    "ド": "do",
    "バ": "ba",
    "ビ": "bi",
    "ブ": "bu",
    "ベ": "be",
    "ボ": "bo",
    "パ": "pa",
    "ピ": "pi",
    "プ": "pu",
    "ペ": "pe",
    "ポ": "po"
}

var symbols = [];
var turn = 0;
var mode = "show"
var learn_count = 0;
var current_symbol = "";
var current_word = "";
var current_list = [];

for (var k in kana) {
    symbols.push(k);
}


function spin(){
    turn += 360;
    $("#card").css("transform",`rotateY(${turn}deg)`);
}

function setColor() {
    var color = randomColor(); // a hex code for an attractive color
    var i = `url(https://www.transparenttextures.com/patterns/60-lines.png)`;
    $("#card").css("background", `${i} ${color}`);
}

function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function generate() {
    for (var i = 0; i < 5; i++) {
        var r = randInt(0, symbols.length);
        current_list[i] = symbols[r];
    }
}

function next() {
    current_symbol = current_list[learn_count];
    current_word = kana[current_list[learn_count]];
}

function show(symbol) {
    $("#word").text(symbol);
}

function run() {

    spin();

    if (mode == "show") {
        mode = "next";
        show(current_word);
        readText(current_word,{voice:13});
    } else { //next
        learn_count++;
        setColor();
        mode = "show"

        if (learn_count == 4) {
            generate();
            learn_count = 0;
        }

        next();
        show(current_symbol);
    }
}

setColor();
generate();
next();
show(current_symbol);
