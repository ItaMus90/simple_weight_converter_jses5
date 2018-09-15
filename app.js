var UICtrl = (function(){

    var output = document.getElementById('output');
    output.style.visibility = 'hidden';

    var lbsInput = document.getElementById('lbsInput');
    lbsInput.addEventListener('input',calculateLbs);

    function calculateLbs(e){
        output.style.visibility = 'visible';
        var lbs = e.target.value;
        var gramsOutput = document.getElementById('gramsOutput');
        gramsOutput.innerHTML = lbs/0.0022046;

        var kgOutput = document.getElementById('kgOutput');
        kgOutput.innerHTML = lbs/2.2046;
        
        var ozOutput = document.getElementById('ozOutput');
        ozOutput.innerHTML = lbs*16;
    }

    return {
        callCaculateLbs: lbsInput
    }
})();

UICtrl.callCaculateLbs;