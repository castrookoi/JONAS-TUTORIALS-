"use strict"
const billTotal = parseInt(prompt('Number of Bills to calculate for')) || 0


const billsArray = []

for(let i = 1; i < billTotal + 1; i++)
{
const receieveBills = parseInt(prompt(`Enter Bill ${i}`))

billsArray.push(receieveBills)
}

const billTips = function (bill) {
if (bill >= 50 && bill <= 300 ){
return bill * 0.15;
}
else {
return bill * 0.20;
}
}

const tipsArray = billsArray.map(billTips)

alert(tipsArray)
