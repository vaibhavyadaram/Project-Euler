document.getElementById("submit").onclick = function() {
    
    var b = $("#bvalue").val();
    var a = $("#avalue").val();

    b = parseFloat(b);
    a = parseFloat(a);

    var aSqrt = (a * a);
    
    var bSqrt  = (b * b);

    var c  = Math.sqrt(aSqrt + bSqrt);
    
    if ( isNaN(c) ) {  
        
        document.getElementById("hypotenuse").innerHTML = "No answer";
        
    } else {
        
        document.getElementById("hypotenuse").innerHTML = Math.round(c);

    }
};