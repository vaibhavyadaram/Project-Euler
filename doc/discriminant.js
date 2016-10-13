document.getElementById("submit").onclick = function() {
    
    var b = $("#bvalue").val();
    var a = $("#avalue").val();
    var c = $("#cvalue").val();
    
    
    b = parseFloat(b);
    a = parseFloat(a);
    c = parseFloat(c);
    
    var bsqaured = Math.pow(b, 2);
    
    var ac  = (4 * a * c);

    var d  = (bsqaured - ac);
    
    if ( d < 0 ) {  
        
        document.getElementById("discriminant").innerHTML = "No Roots";
   
    } else if (d > 0) {
        
        document.getElementById("discriminant").innerHTML = "2 Roots";
        
    }
    
     else if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("discriminant").innerHTML = "No answer oops :(";
    }
    
    else {
        
        document.getElementById("discriminant").innerHTML = "1 Root";

    }
};