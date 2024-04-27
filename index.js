const billAmountInput=document.querySelector("#bill-amount")
const customTipInput=document.querySelector(".custom-tip")
const numberOfPeopleInput=document.querySelector(".number-of-people")
const generateBillBtn=document.querySelector(".generate-btn")
const tipAmountOutput=document.querySelector(".tip-amount span")
const TotalBillOutput=document.querySelector(".total-amount span")
const eachPersonBillOutput=document.querySelector(".each-person-bill span")
const tipsContainer=document.querySelector(".tip-container")
const resetBtn=document.querySelector(".reset-btn")


let tipPercentage=0;

generateBillBtn.addEventListener('click', ()=>{ 
    const billAmount= parseInt(billAmountInput.value) // Converting string value into integer value
    const numberofPeople= parseInt(numberOfPeopleInput.value)
    
    const tipAmount=billAmount*(tipPercentage/100) // 
    const TotalBill=billAmount+tipAmount
    const eachPersonBill= TotalBill / numberofPeople
    

    tipAmountOutput.innerText=`₹${Math.ceil(tipAmount)}`;
    TotalBillOutput.innerText=`₹${Math.ceil(TotalBill)}`
    eachPersonBillOutput.innerText=`₹${Math.ceil(eachPersonBill)}`;
    resetBtn.disabled=false
   

})

 // Event delegation (whenever tips are clicked this event listner shall triggered)   
tipsContainer.addEventListener('click',(e)=>{ 
    if(e.target!=tipsContainer){
        [...tipsContainer.children].forEach((tip) => tip.classList.remove('selected')); /* this statement is removing previously selected tips becoz no two tips can be selected at one time*/
        e.target.classList.add('selected')
        tipPercentage=parseInt(e.target.innerText) // here tipPercentage will store the tips when clicked on it.
        customTipInput.value=""
    }
})

// custom tip--> whenever you input any custom tip. 
customTipInput.addEventListener('input',(e)=>{ 
    tipPercentage=parseInt(customTipInput.value); // here tipPercentage will store the input value of custom tips when inputed on it. 
    [...tipsContainer.children].forEach((tip) => tip.classList.remove('selected')); // this will remove the previously selected tip if any, when you input the custom value. 
})

resetBtn.addEventListener('click',()=>{
    tipPercentage=0
    billAmountInput.value=" "
    customTipInput.value=" "
    numberOfPeopleInput.value=" ";
    [...tipsContainer.children].forEach((tip) => tip.classList.remove('selected'))
    tipAmountOutput.innerText=" "
    TotalBillOutput.innerText=" "
    eachPersonBillOutput.innerText=" "
    resetBtn.disabled=true
    
})