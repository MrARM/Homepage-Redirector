var thepage = "unselected";
//Here Is My code that is used
//document.getElementById("content").innerHTML = "whatever";
//loader:
//setTimeout(function(){ 
//        link = true; 
//    }, 5000);
function showpage() {
    if (thepage == "unselected") {
        alert("Page unselected");
    }
    if (thepage == "home") {
        alert("My Homepage");
    }
}

function loader() {
    document.getElementById("progress").innerHTML = "<progress max=100 vaule=1></progress><br><H3>Loading...</h3>";
    setTimeout(function () {
        load1()
    }, 3000);


    return false;
}

function load1() {
    document.getElementById("progress").innerHTML = "<progress max=100 vaule=6></progress><br><H3>Sending request...</h3>";
    setTimeout(function () {
        load2()
    }, 5000);
    return false;
}

function load2() {
    document.getElementById("progress").innerHTML = "<progress max=100 vaule=23></progress><br><H3>Waiting Response...</h3>";
    setTimeout(function () {
        load3()
    }, 2576);
    return false;
}

function load3() {
    document.getElementById("progress").innerHTML = "<progress max=100 vaule=47></progress><br><H3>Link Reviving...<progress max=100 vaule=68></progress></h3>";
    setTimeout(function () {
        load4()
    }, 7576);
    return false;
}

function load4() {
    document.getElementById("progress").innerHTML = "<progress max=100 vaule=47></progress><br><H3>Decrypting...</h3>";
    setTimeout(function () {
        load5()
    }, 9576);
    return false;
}

function load5() {
    document.getElementById("progress").innerHTML = "<H1>Done.</h1>";
    if (thepage == "unselected") {
        document.getElementById("link").innerHTML = "<H5>Link not Specified.</h5>";
    }
    if (thepage == "home") {
        document.getElementById("link").innerHTML = "<a href=http://thesmokinggnu.us>Go!</a>";
    }

    return false;
}

function selhome() {
    thepage = home;
    return false
}