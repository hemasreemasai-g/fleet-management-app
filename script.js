let data = [];
function addFleet(){
    let reg = document.getElementById("reg").value;
    let category = document.getElementById("category").value;
    let driver = document.getElementById("driver").value;
    let status = document.getElementById("status").value;
    if(!reg || !cat || !driver){
        alert("All fields are required.");
        return;
    }
    let obj = {reg , category: cat,  driver , status};

    data.push(obj);
    render(data);
    document.getElementById("reg").value = "";
    document.getElementById("category").value = "";
    document.getElementById("driver").value = "";
    document.getElementById("status").value = "";
}
function render(arr){
    let box = document.getElementById("cards");
    box.innerHTML = "";
    arr.forEach((item, index) =>{
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <img src = "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5e80fcb6-3f8e-480c-945b-30a5359eb40e/JNmYjkVr3WOjsrbu.png" alt= "vechicle">
        <p><b>Reg No:</b> ${item.reg}</p>

        <p><b>Category:</b> ${item.category}</p>
        <p><b>Driver:</b> ${item.driver}</p>
        <p><b>Status:</b> ${item.status}</p>
        `;
        let btn1 = document.createElement("button");
        btn1.innerText = "Update Driver"
        btn1.onclick = ()=>{
            let newName = prompt("Enter new driver name:");
            if(newName && newName.trim() !== ""){
                data[index].driver = newName;
                render(data);
            }
                else{
                alert("Driver name cannot be empty.");
                }
            };
        let btn2 = document.createElement("button");
        btn2.innerText = "Change Availability"
        btn2.onclick = ()=>{
            data[index].status = data[index].status === "Available" ? "Unavailable" : "Available";
            render(data);
        };
        let btn3 = document.createElement("button");
        btn3.innerText = "Delete"
        btn3.onclick = ()=>{
            if(confirm("Delete this vechicle?")){
                data.splice(index, 1);
                render(data);
            }
        };
        card.appendChild(btn1);
        card.appendChild(btn2);
        card.appendChild(btn3);
        box.appendChild(card);
    });
}
function applyFilters(){
    let c = document.getElementById("catFilter").value;
    let a = document.getElementById("availFilter").value;
    let filtered = data;
    if(c !== "All") filtered = filtered.filter(x => x.category === c);{
    if(a !== "All") filtered = filtered.filter(x => x.status === a);
    render(filtered);
    }
    function clearFilter(){
        document.getElementById("catFilter").value = "All";
        document.getElementById("availFilter").value = "All";
        render(data);
    }
}
           



