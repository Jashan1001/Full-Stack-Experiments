//const readline = require('readline'); //old syntax
import readline from 'readline';

const rl=readline.createInterface({  //it creates an interface for reading data from a Readable stream (such as process.stdin) one line at a time.
    input: process.stdin,
    output: process.stdout
})

const employees=[
    {id:1, name:"Jashan", age:19}
]
function showMenu(){
    console.log("\n Employee Management");
    console.log("1. Add Employee");
    console.log("2. List Employees");
    console.log("3. Remove Employee");
    console.log("4. Exit");

    rl.question("Enter your choice: ", handleInput);
}

function handleInput(choice){
    switch(choice){
        case '1':
            addEmp();
            break;
        case '2':
            listEmp();
            break;
        case '3':
            removeEmp();
            break;
        case '4':
            rl.close();
            break;
        default:
            console.log("Invalid choice. Please try again.");
            showMenu();
            break;
    }
}

function addEmp(){
    rl.question("Enter Employee name:",(name)=>{
        rl.question("Enter employee age: ",(age)=>{
            const newEmp={
                id: employees.length + 1,
                name: name,
                age: age,
            };
            employees.push(newEmp);
            showMenu();
        });
    });
}

function listEmp(){
    console.log("\n Employee List:");
    employees.forEach(emp => {
        console.log(`ID: ${emp.id}, Name: ${emp.name}, Age: ${emp.age}`);
    });
    showMenu();
}

function removeEmp(){
    rl.question("Enter Employee ID to remove: ",(id)=>{
        const index=employees.findIndex(emp => emp.id==id);
        if(index !== -1){
            employees.splice(index,1);
            console.log("Employee removed.");
        }else{
            console.log("Employee not found.");
        }
        showMenu();
    });
}

showMenu();