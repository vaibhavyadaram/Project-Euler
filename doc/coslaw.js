document.getElementById("submit").onclick = function() {
    
    var b = $("#avalue").val();
    var a = $("#bvalue").val();
    var c = $("#cvalue").val();


    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    
    var ang = (Math.PI*c)/180
    
    var cside = ((a*a) + (b*b) - (2*a*b)*(Math.cos(ang))); 
    
    var sqrt = Math.sqrt(cside);
    
    if ( isNaN(a) || isNaN(b) || isNaN(c) ) { 
        
        document.getElementById("c").innerHTML = "No answer";
        
    } else {
        
        document.getElementById("c").innerHTML = "c = " + Math.round(sqrt*1000)/1000;
    }
};