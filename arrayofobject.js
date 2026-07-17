let users = [
    { name: "abc", age: 23, email: "abc@gmail.com" },
    { name: "xyz", age: 20, email: "xyz@gmail.com" },
    { name: "divyani", age: 40, email: "divyani@gmail.com" }
];

let userList = document.getElementById("user-list");

for (let user of users) {
    userList.innerHTML += `
        <li>
            Hello, username is <b>${user.name}</b><br>
            Age: ${user.age}<br>
            Email: ${user.email}
        </li>
    `;
}