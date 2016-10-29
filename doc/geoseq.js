document.getElementById("submit").onclick = function() {
    
    var firstTerm = $("#firstTerm").val();
    var nTerm = $("#nTerm").val();
    var commonR = $("#commonR").val();

    firstTerm = parseFloat(firstTerm);
    nTerm = parseFloat(nTerm);
    commonR = parseFloat(commonR);
    
    var nthTermExpo = Math.pow(commonR, nTerm - 1)
    
    var termValue = firstTerm * nthTermExpo
    
    var finalAnswer = "An = " + termValue
   

    if ( isNaN(firstTerm) || isNaN(commonR) || isNaN(nTerm) ) { 
        
        document.getElementById("term").innerHTML = "No answer";
        
    } else {
        
        document.getElementById("term").innerHTML = finalAnswer; 
    }
};