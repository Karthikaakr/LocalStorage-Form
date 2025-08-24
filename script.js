
const form = document.getElementById("user");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstname = document.getElementById("first").value;
        const lastname = document.getElementById("lname").value;
        const emailid = document.getElementById("email").value;
        const password = document.getElementById("pass").value;
        const dateofbirth = document.getElementById("dob").value;
        const phonenumber = document.getElementById("phone").value;
        const address = document.getElementById("add").value;

        // localStorage
        localStorage.setItem("firstname", firstname);
        localStorage.setItem("lastname", lastname);
        localStorage.setItem("emailid", emailid);
        localStorage.setItem("password", password);
        localStorage.setItem("dateofbirth", dateofbirth);
        localStorage.setItem("phonenumber", phonenumber);
        localStorage.setItem("address", address);

        // Redirect to table page
        window.location.href = "table.html";
    });

function loadTable() {
    const userTable = document.getElementById("userData");
    const fname = localStorage.getItem("firstname");
    const lname = localStorage.getItem("lastname");
    const email = localStorage.getItem("emailid");
    const pass  = localStorage.getItem("password");
    const dob   = localStorage.getItem("dateofbirth");
    const phone = localStorage.getItem("phonenumber");
    const add   = localStorage.getItem("address");

    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${fname}</td>
        <td>${lname}</td>
        <td>${email}</td>
        <td>${pass}</td>
        <td>${dob}</td>
        <td>${phone}</td>
        <td>${add}</td>
    `;
    userTable.appendChild(row);
}