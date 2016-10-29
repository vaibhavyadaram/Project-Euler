document.getElementById("submit").onclick = function() {
    
    var a = $("#avalue").val();
    var b = $("#bvalue").val();
    var c = $("#cvalue").val();
    
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    
    var h = (-Math.abs(b) / (2*a));
    
    var k = ( c - (Math.pow(b, 2) / (4*a)) ); 
    
    if ( isNaN(a) || isNaN(b) || isNaN(c) ) {  
        document.getElementById("h").innerHTML = "no answer :(";
        document.getElementById("k").innerHTML = "";
    } else {
        document.getElementById("h").innerHTML = "x = " + Math.round(h*10)/10;
        document.getElementById("k").innerHTML = "y = " + Math.round(k*10)/10; 
    }
};