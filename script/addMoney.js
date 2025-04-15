document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const ammount = document.getElementById('amount').value;
    const convertedAmmount = parseFloat(ammount);
    const pin = document.getElementById('pin').value;
    const covertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const covertedMainBalance = parseFloat(mainBalance);
    

    if(covertedPin === 1234){
        const sum = covertedMainBalance + convertedAmmount;
        document.getElementById('main-balance').innerText = sum;
        
        
        
    }
    else{
        console.log('pin is incorrect');
        
    }
})