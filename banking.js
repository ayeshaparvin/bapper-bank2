document.getElementById('btn-deposit').addEventListener('click',function(){
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
})