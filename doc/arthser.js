document.getElementById("submit").onclick = function() {
    
    var firstTerm = $("#firstTerm").val();
    var nTerm = $("#nTerm").val();
    var commonDif = $("#commonDif").val();
    var numberOfTerm = $("#numberOfTerm").val();
    
    firstTerm = parseFloat(firstTerm);
    nTerm = parseFloat(nTerm);
    commonDif = parseFloat(commonDif);
    numberOfTerm = parseFloat(numberOfTerm);
    
    var termSum = firstTerm + nTerm;
    
    var xNumberOfTerms = numberOfTerm*termSum;
    
    var sumOfTerms = xNumberOfTerms/2;
    
    var finalAnswer = ("Sn = " + sumOfTerms); 

    if ( isNaN(firstTerm) || isNaN(commonDif) || isNaN(nTerm) || isNaN(numberOfTerm) ) { 
        
        document.getElementById("term").innerHTML = "No answer";
        
    } else {
        
        document.getElementById("term").innerHTML = finalAnswer; 
    }
};