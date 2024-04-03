// Import and require requirer
const inquirer = require('inquirer');
// Import and require Pool (node-postgres)
const { Pool } = require('pg')
const cTable = require('console.table')
//connect to database
const pool = new Pool(
    {
      // TODO: Enter PostgreSQL username
      user: 'postgres',
      // TODO: Enter PostgreSQL password
      password: 'Benzo_115',
      host: 'localhost',
      database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database.`)
  )
  
  pool.connect();
function start(){
  inquirer
  .prompt([
    {
        type: 'list',
        name: 'title',
        message:'',
        choices: ['View Departments', "View Roles", "Add Department", "Add Role"]
    },
]).then(answer => {
    switch(answer.title){
        case "View Departments":
            viewDepartments()
           break; 
        case "View Roles":
            viewRoles()
           break;
        case "Add Department":
            addDepartment()
            break;
        case "Add Role":
            addRole()
            break;
    }
    
})
}
  

function viewDepartments(){
    pool.query("SELECT * FROM departments", (err, res) => {
        if (err) throw err;
        console.table(res.rows)
    })
}

function viewRoles(){
    pool.query("SELECT * FROM roles", (err, res) => {
        if (err) throw err;
        console.table(res.rows)
    })
}

function addDepartment() {
    inquirer.prompt([
        {
        type: 'input',
        name: 'depName',
        message: 'What department would you like to add?'
        }
    ])
    .then(answer => {
        pool.query ("INSERT INTO departments (department_name) VALUES ($1)", [answer.depName])
        start()
    })

}

function addRole(){
    pool.query("SELECT * FROM departments", (err, res)=>{
        if (err) throw err

        inquirer.prompt([
            {
                type: 'input',
                name: 'newTitle',
                message: 'What is the title of the new role?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary for the new role?'
            },
            {
                type: 'list',
                name: 'depId',
                message: 'What is the department for the new role?',
                choices: res.rows.map(department => department.department_name)
            }
        ]).then(answer => { 
            const departmentName = res.rows.find(department => department.department_name === answer.depId)


            pool.query("INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)", 
            [answer.newTitle, answer.salary, departmentName.id],
            function(err){
                console.log(err)
            })
            
            start()
        })
    })
}





start()