let btn = document.querySelector("#submit");
let inputs = document.querySelectorAll("input");
let tbody = document.querySelector("#book-list");

btn.addEventListener("click", data); // close the parentheses here

function data(e) {
    e.preventDefault();
    let newRow = tbody.insertRow();
    for(let i=0; i<inputs.length; i++){
        let cell = newRow.insertCell();
        cell.innerText = inputs[i].value;
        inputs[i].value = '';
    }
	let clearbtn=document.createElement("button")
	clearbtn.innerText="X"
	clearbtn.classList.add("delete")
	cell.append(clearbtn) // append the button to the new cell
	clearbtn.addEventListener("click", ()=>deletedata(newRow))	
}