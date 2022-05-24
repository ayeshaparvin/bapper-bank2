



function getBalance(inputId,depositId){
   const newInputDeposit = document.getElementById(inputId);
    const newInputDepositTotalText = newInputDeposit.value;

    const newInputDepositTotalBalance = parseFloat(newInputDepositTotalText);


     


    const depositBank = document.getElementById(depositId);
    const depositPreviousTotalText = depositBank.innerText;
    const depositPreviousTotalBalance = parseFloat(depositPreviousTotalText);
    
    const depositBalance = newInputDepositTotalBalance + depositPreviousTotalBalance;
    if(depositBalance > 0){
         depositBank.innerText = depositBalance;
    }
    

   
    //deposit input clear
    newInputDeposit.value = '';

    return newInputDepositTotalBalance;
}


function addBalance(balanceId,inputBalance,isAdd){
    if(isAdd == true){
        const currentBalance = document.getElementById(balanceId);
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceTotal = parseFloat(currentBalanceText);
    const currentTotalBalance = currentBalanceTotal +inputBalance;
    currentBalance.innerText = currentTotalBalance;
    }
    else {
        const currentBalance = document.getElementById(balanceId);
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceTotal = parseFloat(currentBalanceText);
    if(inputBalance > 0 && currentBalanceTotal > inputBalance){
      const currentTotalBalance = currentBalanceTotal - inputBalance;
    currentBalance.innerText = currentTotalBalance;
    }
    else {
        console.log('deposit first');
    }
    
    }

}


function isWithdrawPossible(inputId,depositId,balanceId){

    const currentBalance = document.getElementById(balanceId);
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceTotal = parseFloat(currentBalanceText);


    const newInputDeposit = document.getElementById(inputId);
    const newInputDepositTotalText = newInputDeposit.value;

    const newInputDepositTotalBalance = parseFloat(newInputDepositTotalText);


     


    const depositBank = document.getElementById(depositId);
    const depositPreviousTotalText = depositBank.innerText;
    const depositPreviousTotalBalance = parseFloat(depositPreviousTotalText);
    const depositBalance = newInputDepositTotalBalance + depositPreviousTotalBalance;

    if( newInputDepositTotalBalance <= currentBalanceTotal){
        depositBank.innerText = depositBalance;
    }
    else{
        console.log('desposit first otherwise you cantt withdraw');
    }

    newInputDeposit.value = '';

    return newInputDepositTotalBalance;
}



document.getElementById('btn-deposit').addEventListener('click',function(){
   
    const TotalDepositInputBalance = getBalance('input-deposit','deposit-bank');
    if(TotalDepositInputBalance > 0){
        addBalance('current-balance',TotalDepositInputBalance,true);
    }
    else {
        console.log('please input positive value');
    }
     
});


document.getElementById('btn-withdraw').addEventListener('click',function(){

     

    const totalInputWithdrawBalance = isWithdrawPossible('input-withdraw','withdraw-balance','current-balance');

    
    if(totalInputWithdrawBalance > 0 ){
       addBalance('current-balance',totalInputWithdrawBalance,false);
    }
    
    
});



/* document.getElementById('btn-deposit').addEventListener('click',function(){
   //deposit amount
    const newDepositAmount = document.getElementById('input-deposit');
    const newDepositTotal = newDepositAmount.value;
    const depositBankAmount = document.getElementById('deposit-bank');
     const previousDepositAmount = depositBankAmount.innerText;


     const newDeposit = parseFloat(previousDepositAmount) + parseFloat(newDepositTotal);
    

     depositBankAmount.innerText = newDeposit;


     //adding with balance

     const currentBalance = document.getElementById('current-balance');
     
     const previousCurrentBalance = currentBalance.innerText;

     const newCurrentBalance = parseFloat(previousCurrentBalance) + parseFloat(newDepositTotal);
     currentBalance.innerText = newCurrentBalance;


      
    //clear input
     newDepositAmount.value = '';
     
    
});

document.getElementById('btn-withdraw').addEventListener('click',function(){
    // withdraw balance
    const inputWithdraw = document.getElementById('input-withdraw');
    const newWithdrawAmount = inputWithdraw.value;
    
    const withdrawBalance = document.getElementById('withdraw-balance');
     const previousWithdrawBalance = withdrawBalance.innerText;

     const newWithdrawBalance = parseFloat(previousWithdrawBalance) + parseFloat(newWithdrawAmount);
     withdrawBalance.innerText = newWithdrawBalance;

     //reduce in balance when we withdraw balance

     const currentBalance = document.getElementById('current-balance');
     
     const previousCurrentBalance = currentBalance.innerText;

     const newCurrentBalance = parseFloat(previousCurrentBalance) - parseFloat(newWithdrawAmount);
     currentBalance.innerText = newCurrentBalance;

     

    //clear withdraw input
    inputWithdraw.value = '';
}) */