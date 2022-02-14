let highlight = document.getElementById("highlight");
let aktivhighlight = 1;

function filmSwitch(e) {
    console.log("funksjonene aktiveres")

    console.log(aktivhighlight)
    aktivhighlight += e;
    console.log(aktivhighlight)

    if (aktivhighlight == 1) {
        highlight.className = "storrelse a";
    } else if (aktivhighlight == 2) {
        highlight.className = "storrelse b";
    } else if (aktivhighlight == 3) {
        highlight.className = "storrelse c";
    } else {
        highlight.className = "storrelse d";
    }
    console.log(highlight.class)

    if (aktivhighlight < 0) {
        aktivhighlight = 4;
    } else if (aktivhighlight > 4) {
        aktivhighlight = 0;
    }
}



function bokser(id, rader, filmer){
    document.getElementById(id).innerHTML = '';
    var x = 0;
    var i = 0;

    while (i<rader){
        document.getElementById(id).innerHTML += '<div class="rad" id="rad'+i+'"></div> '

        x=0;
        while (x<filmer){
            document.getElementById("rad"+i).innerHTML += '<a href="/html/film.html"><div class="film fr'+i+x+'"></div><a>';
            x++;    
        }
    i++;
    }

}