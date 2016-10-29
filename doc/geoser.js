document.getElementById("submit").onclick = function() {
    
    var firstTerm = $('#firstTerm').val();
    var nTerm = $('#nTerm').val();
    var commonR = $('#commonR').val();

    firstTerm = parseFloat(firstTerm);
    nTerm = parseFloat(nTerm);
    commonR = parseFloat(commonR);
    
    var num = 1 - Math.pow(commonR,nTerm);
    
    var numxA = (firstTerm * num);
    
    var demo = 1 - commonR;
    
    var divide = numxA / demo
    
    var finalAnswer = "Sn = " + divide 
    
     if ( isNaN(firstTerm) || isNaN(nTerm) || isNaN(commonR) ) { 
        
        document.getElementById("term").innerHTML = "No answer";
        
    } else {
        
        document.getElementById("term").innerHTML = finalAnswer; 
    }
};