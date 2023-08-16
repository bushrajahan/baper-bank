// console.log('deposite.js')

document.getElementById('btn-deposite')?.addEventListener('click',function(){
    // console.log('deposite is clicked');
    const depositeField = document.getElementById('deposite-field');
    const newdepositeAmount =depositeField.value;
     //console.log(depositeAmount)

    //  step3:get deposite curremnt amount
    // non input use innerText to get other text
     const depositTotalElement = document.getElementById('deposite-total');
     const previouspedepositeTotal = depositTotalElement?.innerText;

    //  step4:ADD numbers to the deposite
     const currentDepositeTotal = parseFloat(previouspedepositeTotal)+parseFloat(newdepositeAmount);
    //  console.log(depositeTotal)
      if(currentDepositeTotal>=0)
      depositTotalElement.innerText =currentDepositeTotal;

    //   step5:get balance total

    const b = document.getElementById('Balance-total');
    const previousBalanceTotalString = b.innerText;
    // console.log(previousBalanceTotalString);
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step:6 calculate current balance total 
    // console.log(previousBalanceTotal)
     const currentBalanceTotal = parseFloat(newdepositeAmount);
    //  console.log(currentBalanceTotal);
     const TOTAL = currentBalanceTotal+previousBalanceTotal;
    //  console.log(TOTAL)
    // balanceTotal.innerText = TOTAL;
    if(TOTAL>=0){
    b.innerText=TOTAL;
    }
     //set the balance tota 
    
    
     
    depositeField.value='';


})