function ActiveName(i, j) {
    //var name = document.getElementsByClassName("Myform")[0];
    var labelF = document.getElementsByClassName("label-form")[j];
    var input = document.getElementsByClassName("Myform")[i];

    labelF.style.color = "#590096";
    input.setAttribute("style", "width: 100%; border: none!important; border-bottom: 2px solid #590096!important; border-radius: 0px!important; padding-left: 10px; padding-bottom: 5px; margin-top: 5px;   color: rgb(82, 89, 107)");
}

function NonActiveName(i, j) {
    var input = document.getElementsByClassName("Myform")[i];
    if (input.value == "") {
        document.getElementsByClassName("label-form")[j].style.color = "white";
    } else {
        document.getElementsByClassName("label-form")[j].style.color = "rgb(82, 89, 107)";
    }
    input.setAttribute("style", "width: 100%; border: none!important; border-bottom: 2px solid rgb(82, 89, 107)!important; color: rgb(82, 89, 107)!important; border-radius: 0px!important; padding-left: 10px; padding-bottom: 5px; margin-top: 5px;   color: rgb(82, 89, 107)");
}