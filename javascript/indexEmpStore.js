let employees=allEmps();

console.log(employees);


//display Employees

let displayEmployees=(employees)=>
{
	let empLength=employees.length;
	document.querySelector('#total').innerText=empLength;
	let tableBody=document.querySelector('#table-body');

	let tableRows='';

	for(let employee of employees)
	{
		tableRows+=`<tr>
						<td>${employee.id}</td>
						<td>${employee.first_name}</td>
						<td>${employee.last_name}</td>
						<td>${employee.email}</td>
						<td>${employee.gender}</td>
						<td>${employee.country}</td>
					</tr>`
	}
	tableBody.innerHTML=tableRows;

}

//all employees

let allEmpBtn=document.querySelector('#All-emp');
allEmpBtn.addEventListener('click',function()
{
	displayEmployees(employees);
});

//Male Emp Button
let maleEmpBtn=document.querySelector('#Male-emp');
maleEmpBtn.addEventListener('click',function()
{
	let maleEmps=employees.filter((employee)=>
	{
		return employee.gender==='Male';
	});
	displayEmployees(maleEmps);
});


//FeMale Emp Button
let femaleEmpBtn=document.querySelector('#Fem-emp');
femaleEmpBtn.addEventListener('click',function()
{
	let femaleEmps=employees.filter((employee)=>
	{
		return employee.gender==='Female';
	});
	displayEmployees(femaleEmps);
});


//search box

let searchBox=document.querySelector('#search-btn');
searchBox.addEventListener('keyup',function()
{
	let textEntered=searchBox.value;
	if(textEntered!=='')
	{
		let filEmps=employees.filter((employee)=>
		{
			return employee.first_name.toLowerCase().trim().startsWith(textEntered.trim().toLowerCase());
		});
		displayEmployees(filEmps);
	}
	else if(textEntered.length===0)
	{
		displayEmployees([]);
	}
	else
	{
		displayEmployees([]);
	}
});

searchBox.addEventListener('click',function()
{
	let textEntered=searchBox.value;
	if(textEntered!=='')
	{
		let filEmps=employees.filter((employee)=>
		{
			return employee.first_name.toLowerCase().trim().startsWith(textEntered.trim().toLowerCase());
		});
		displayEmployees(filEmps);
	}
	else if(textEntered.length===0)
	{
		displayEmployees([]);
	}
	else
	{
		displayEmployees([]);
	}
});