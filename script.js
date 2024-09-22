let btn = document.querySelector("#submit");
let inputs = document.querySelectorAll("input");
let tbody = document.querySelector("#book-list");

btn.addEventListener("click", data); // close the parentheses here

function data(e) {
    e.preventDefault(); // prevent the default form submission behavior
    let newRow = tbody.insertRow(); // insert a new row
    for(let i=0; i<inputs.length; i++){
        let cell = newRow.insertCell(); // insert a new cell
        cell.innerText = inputs[i].value;
        inputs[i].value = ''; // clear the input field after adding the data to the table
    }
	cell =newRow.insertCell()
	let clearbtn=document.createElement("button")
	clearbtn.innerText="X"
	clearbtn.classList.add("delete")
	cell.append(clearbtn)
	clearbtn.addEventListener("click", ()=>deletedata(newRow))	
	function deletedata(row) {
	tbody.removeChild(row);
}
}

