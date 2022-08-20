document.getElementById("btn-calculate").addEventListener("click",function(){
    const incomeElement =  document.getElementById("btn-income");
    const incomeTotalString =incomeElement.value;
    const incomeNewAmount =parseInt(incomeTotalString);

    const foodElement=document.getElementById("btn-food");
    const foodItemString =foodElement.value
    const foodTotalAmount =parseInt(foodItemString);

    const rentElement =document.getElementById("btn-rent");
    const rentTotalString=rentElement.value;
    const rentTotalAmount =parseInt(rentTotalString);

    const clothesElement =document.getElementById("input-clothes");
    const clothesTotalString =clothesElement.value;
    const clothesTotalAmount =parseInt(clothesTotalString);

    const totalNewAmount =foodTotalAmount + rentTotalAmount + clothesTotalAmount;
    
    const expensesElement = document.getElementById("expenses");
    expensesElement.innerText =totalNewAmount;
    

    const  remainingBalance =document.getElementById("balance");
     remainingBalance.innerText = incomeNewAmount - totalNewAmount;
   


})