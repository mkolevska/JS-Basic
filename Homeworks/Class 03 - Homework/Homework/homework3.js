
function atm(requestMoney, accountMoney) {
    
    if (Number.isNaN(requestMoney) || requestMoney <= 0) {
        return "Enter valid ammount";
    } else if (requestMoney > accountMoney) {
        return `Not enough money. You have ${accountMoney}$ on the account.`;
    } else {
        let ammountLeft = accountMoney - requestMoney;
        return `Ammount withdrawn: ${requestMoney}$ \nAmmount left: ${ammountLeft}$`;
    }
}

let accountMoney = 5000;
let requestMoney = parseInt(prompt("Enter the ammount you want to withdraw:"));

let result = atm(requestMoney, accountMoney)
console.log(result)
alert(result)