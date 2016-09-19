document.getElementById("submit").onclick = function() {
    
    var a = $("#avalue").val();
    var b = $("#bvalue").val();
    var c = $("#cvalue").val();
    
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    
    var insideSquareRoot = (a * c * -4);

    insideSquareRoot = (Math.pow(b, 2) + insideSquareRoot);

    var squareRoot = (Math.sqrt(insideSquareRoot));

    var negativeBValue = (0 - b);
    
    var denominator = (2 * a);

    var numeratorPlus = (negativeBValue + squareRoot);

    var answerPlus = (numeratorPlus / denominator);
    
    var numeratorNegative = (negativeBValue - squareRoot);

    var answerNegative = (numeratorNegative / denominator);
    
    var finalAnswerPlus = ("x = " + answerPlus);
    
    var finalAnswerNegative = ("x = " + answerNegative);
    
    if ( isNaN(answerPlus, answerNegative) ) {
        
        document.getElementById("xvaluefirst").innerHTML = "no answer :(";
        
        document.getElementById("xvaluesecond").innerHTML = "";
    
    } else {
    
        document.getElementById("xvaluefirst").innerHTML = finalAnswerPlus;
        
        document.getElementById("xvaluesecond").innerHTML = finalAnswerNegative;
    
    }
    
};