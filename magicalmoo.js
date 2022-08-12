/* MENU */

var site1 = "url('https://mywowo.net/media/images/cache/new_york_museum_of_modern_art_03_notte_stellata_van_gogh_jpg_1200_630_cover_85.jpg')"
var site2 = "url('https://thumbs.dreamstime.com/b/beautiful-sky-clouds-sunset-purple-summer-sunset-beautiful-sky-clouds-sunset-purple-summer-sunset-199058333.jpg')"
var site3 = "url('https://i.imgur.com/fgFsQJp.png')"

document.title = "MagicalMoo 0.1-ALPHA"

document.getElementById("linksContainer2").parentNode.removeChild(document.getElementById("linksContainer2"))
document.getElementById("ot-sdk-btn-floating").parentNode.removeChild(document.getElementById("ot-sdk-btn-floating"))
document.getElementById("joinPartyButton").parentNode.removeChild(document.getElementById("joinPartyButton"))

document.getElementById("gameName").style.color = "lightblue"
document.getElementById("gameName").innerHTML = "MagicalMoo"

document.getElementById("guideCard").style.backgroundImage = site1
//document.getElementById("promoImgHolder").parentNode.removeChild(document.getElementById("promoImgHolder"))

document.getElementById("serverBrowser").style.backgroundColor = "black"
document.getElementById("serverBrowser").style.color = "red"

document.getElementsByClassName("menuText")[0].id = "menuTextManagerId"
document.getElementById("menuTextManagerId").style.color = "yellow"
document.getElementById("desktopInstructions").style.color = "yellow"

document.getElementById("nativeResolution").style.color = "orange"
document.getElementById("showPing").style.color = "orange"

document.getElementById("setupCard").style.backgroundImage = site1

document.getElementById("enterGame").style.backgroundImage = site2
document.getElementById("nameInput").style.backgroundImage = site2
document.getElementById("nameInput").style.color = "orange"

document.getElementById("youtuberOf").style.color="orange"
document.getElementById("youtuberOf").innerHTML="Developed by: <a href='https://www.github.com/ThaMessia'>ThaMessia</a>"

document.getElementById("partyButton").style.color="orange"

if (localStorage.moo_name != "GigaChad") {
    document.getElementById("promoImgHolder").innerHTML = `
      <div class='musicSquareManager' id="musicSquare"><h1>MUSIC PLAYER</h1></div>
      <iframe width="10" height="10" src="https://www.youtube.com/embed/3RqvQ1krY0Y?start=1&end=10000"></iframe>`
    document.getElementById("promoImgHolder").style.backgroundImage = site1
    document.getElementById("musicSquare").style.color = "orange"
} else {
    document.getElementById("promoImgHolder").innerHTML = `
      <div class='musicSquareManager' id="musicSquare"><h1>MUSIC PLAYER</h1></div>
      <iframe width="10" height="10" src="https://www.youtube.com/embed/EZEfN5z8Mlg?start=15&end=10000"></iframe>`
    document.getElementById("promoImgHolder").style.backgroundImage = site1
    document.getElementById("musicSquare").style.color = "orange"
}
/* MENU */
/* GAME */

setInterval(() => window.follmoo && follmoo(), 10);

CanvasRenderingContext2D.prototype.roundRect = ((oldFunc) => function() {
    if (this.fillStyle == "#8ecc51") this.fillStyle = "lightblue";
    return oldFunc.call(this, ...arguments);
})
(CanvasRenderingContext2D.prototype.roundRect);

CanvasRenderingContext2D.prototype.fillText = ((oldFunc) => function() {
    this.fillStyle = "pink";
    return oldFunc.call(this, ...arguments);
})
(CanvasRenderingContext2D.prototype.fillText);

document.getElementById("pingDisplay").style.color = "pink"

document.getElementById("diedText").style.color = "lightblue"
document.getElementById("diedText").innerHTML = "Not as magical as I thought!"

document.getElementById("leaderboard").style.color = "pink"

document.getElementById("killCounter").style.color = "lightblue"

document.getElementById("chatBox").style.color = "orange"

document.getElementById("ageText").style.color = "lightblue"
document.getElementById("ageBarBody").style.backgroundColor = "pink"

document.getElementById("allianceButton").style.color = "pink"
document.getElementById("storeButton").style.color = "pink"
document.getElementById("chatButton").style.color = "pink"

document.getElementById("foodDisplay").style.color = "lightblue"
document.getElementById("woodDisplay").style.color = "lightblue"
document.getElementById("stoneDisplay").style.color = "lightblue"
document.getElementById("scoreDisplay").style.color = "lightblue"

document.getElementsByClassName("storeTab")[0].id = "hats"
document.getElementById("hats").style.color = "pink"

document.getElementsByClassName("storeTab")[1].id = "accessories"
document.getElementById("accessories").style.color = "pink"

document.getElementById("mapDisplay").style.backgroundImage = site3

var unequipManager = { Unequip: 0 };

function unequip(name) {
    var manager = unequipManager.name;
    storeBuy(manager);
    storeEquip(manager);
}
//Seems a little too cheaty for a "normal" client ;)

document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 16: unequip('Unequip'); break;
    }
});


/*const button = document.createElement("button")
//button.innerText = "Rate"

button.addEventListener("click", (event) => {
    window.open("https://www.github.com/ThaMessia")
}, false);

document.body.appendChild(button)*/

console.log("Your experience is about to turn magical!")
/* GAME */
