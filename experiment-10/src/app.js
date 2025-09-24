//const readline = require('readline'); //old syntax
import readline from 'readline';

const rl=readline.createInterface({  //it creates an interface for reading data from a Readable stream (such as process.stdin) one line at a time.
    input: process.stdin,
    output: process.stdout
})

//rl.question is used to ask a question to the user and get input from the command line.
//it takes two arguments: the question to ask and a callback function that will be called with the user's input.

const employees=[
    {id:1, name:"Jashan", age:19} //array of objects
    //initial employee
]
function showMenu(){ //function to show menu
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
    rl.question("Enter Employee name:",(name)=>{ //callback function to get name
        rl.question("Enter employee age: ",(age)=>{ //callback function to get age
            // Create a new employee object and add it to the employees array
            const newEmp={
                id: employees.length + 1, // Assign a new ID based on the current length of the employees array
                name: name,
                age: age,
            };
            employees.push(newEmp);
            console.log("Employee added.");
            showMenu();
        });
    });
}

function listEmp(){
    console.log("\n Employee List:");
    employees.forEach(emp => { //forEach method is used to execute a provided function once for each array element.
        console.log(`ID: ${emp.id}, Name: ${emp.name}, Age: ${emp.age}`);
    });
    showMenu();
}

function removeEmp(){
    rl.question("Enter Employee ID to remove: ",(id)=>{
        const EmpIndex=employees.findIndex(emp => emp.id==id); //findIndex method is used to find the index of the first element in an array that satisfies a provided testing function.
        if(EmpIndex !== -1){
            employees.splice(EmpIndex,1); //splice method is used to remove an element from an array at a specific index.
            //splice takes two arguments: the index to start at and the number of elements to remove.
            console.log("Employee removed.");
        }else{
            console.log("Employee not found.");
        }
        showMenu();
    });
}

showMenu();