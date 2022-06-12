function toggleFunction() {
    var x = document.getElementById("navbar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function resize() {
    
    if (window.innerWidth === 1220)
    {
        var x = document.getElementById("navbar");
        if (x.style.display === "none")
        {
            x.style.display = 'block';
        }
    }
    else if (window.innerWidth >= 1220)
    {
        var x = document.getElementById("navbar");
        x.style.display = null;
    }
}

window.onresize = resize;