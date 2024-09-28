////////////////////////////////////////////////////////////// 


function currencyExchange() {
    let from = document.querySelector(".from").value;
    let to = document.querySelector(".to").value;
    let amount = document.querySelector(".amount");
    let btn = document.querySelector(".btn");
    let result = document.querySelector(".result");

    if (from && to && amount.value) {
        
        fetch(`https://v6.exchangerate-api.com/v6/034e53a532ac91b323e4aa4f/latest/${from}`)
        .then((currency)=>{

            let response = currency.json()
            return response;

        }).then((ele)=>{
            let rat = ele.conversion_rates[to];
            let amountValue = amount.value;
        
            result.innerHTML = `${amountValue} from ${from} to ${to} is ${amountValue*rat}`;

        }).catch((error)=>console.log(error))

    } else {
        result.innerHTML = "Please Fill All the Field"
    }


}

currencyExchange();

/////////////////////////////////////////////////////////////////////  table of currency


function exchangeAll() {
    let getCurrencyValue = document.querySelector(".currency").value;
    
    console.log(getCurrencyValue);
    let textContent = document.querySelector(".choose .content");

    fetch(`https://v6.exchangerate-api.com/v6/034e53a532ac91b323e4aa4f/latest/${getCurrencyValue}`)
    .then ((data)=>{
        let result = data.json();
        return result;
    }).then(rats=>{


        
        // console.log(Object.keys(rats.conversion_rates).length)
        // console.log(Object.keys(rats.conversion_rates))
        // console.log(Object.values(rats.conversion_rates))

        for(let i=0; i<Object.keys(rats.conversion_rates).length; i++) {
            let paragraph = document.createElement("p");
            paragraph.innerHTML = `Currency From 1 ${getCurrencyValue} To ${Object.keys(rats.conversion_rates)[i]} Is: ${Object.values(rats.conversion_rates)[i]}`;
            textContent.appendChild(paragraph);
        }
            
    }).catch((error)=>console.log(error))
}


exchangeAll()



