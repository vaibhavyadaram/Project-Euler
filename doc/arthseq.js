document.getElementById("submit").onclick = function() {
    
    var firstTerm = $("#firstTerm").val();
    var commonDif = $("#commonDif").val();
    var nTerm = $("#nTerm").val();
    
    
    firstTerm = parseFloat(firstTerm);
    commonDif = parseFloat(commonDif);
    nTerm = parseFloat(nTerm);
    
    var termNumber = nTerm - 1
    
    var d = termNumber*commonDif
    
    var termValue = (firstTerm + d)
    
    var finalAnswer = "An = " + termValue
        

    if ( isNaN(firstTerm) || isNaN(commonDif) || isNaN(nTerm) ) { 
        
        document.getElementById("term").innerHTML = "No answer";
        
    } else {
        
        document.getElementById("term").innerHTML = finalAnswer
    }
};