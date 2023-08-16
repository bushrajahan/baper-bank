//At first find the value of button 
//Then find the value of input field 

//then set this value into the withdraw field 

//then find the difference between the value of withdraw and the value of balance 

//put this value into the Balance




const withdrawButton =document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-input');
    const valueOfWithdraw = withdrawField.value;
     const FloatValueOfWothdraw = parseFloat(valueOfWithdraw);

    //Find the value of deposite total 
    
   //put this value into the withdraw 
   
   const BalanceTotal = document.getElementById('Balance-total');
   const valueOfBalanceTotal= BalanceTotal?.innerText;
   const FloatValueOfBalanceTotal = parseFloat(valueOfBalanceTotal);  
     let withdraw = document.getElementById('withdraw');
     if(isNaN(valueOfWithdraw)){
        alert('please provide a number');
        return;
     }
     if(FloatValueOfBalanceTotal<valueOfWithdraw ){
        alert('Check your balance ');
        return; 
    }
   else{

     
     withdraw.innerText = FloatValueOfWothdraw;
    //  console.log(withdraw?.innerText)

    // withdraw?.innerText  =  FloatValueOfWothdraw;

     //Find the difference between them 

     const differ = FloatValueOfBalanceTotal - FloatValueOfWothdraw ;

    //  console.log(differ);

    // put this value into the BalanceTotal 
    if(differ>=0)
     BalanceTotal.innerText = differ;
    //  console.log(BalanceTotal?.innerText)

    // clear the value 

    withdrawField.value = '';
   }

})