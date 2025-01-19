<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD</title>
    <script>
        async function create(){
            
            const student={
                name: document.getElementById('cname').value,
                age: document.getElementById('cage').value,
                gender: document.getElementById('cgender').value,
                rollNumber: document.getElementById('croll').value,
                subjects: document.getElementById('csub').value.split(','),
                address:{
                    street: document.getElementById('cs').value,
                    city: document.getElementById('cc').value,
                    zip: document.getElementById('cz').value
                }
            }
            const response=await fetch(`http://localhost:5000/student/add`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(student)
            })
            const result=await response.json()
            alert(result.message)
        }
        async function getdata(){
            const rollNumber=document.getElementById('groll').value
            const r=document.getElementById('getdata')
            if(rollNumber.trim()===''){
                r.innerHTML='Please enter your rollNumber'
                return
            }
            try{
                const response=await fetch(`http://localhost:5000/student/details/${rollNumber}`)
                const result=await response.json()
                if(result.message){
                    r.innerHTML=result.message;
                    return;
                }else{
                    r.innerHTML=`
                        <h2>Here are retrived data</h2>
                        <p><strong>Name:</strong>${result.name}</p>
                        <p><strong>Age:</strong>${result.age}</p>
                        <p><strong>Gender:</strong>${result.gender}</p>
                        <p><strong>Subjects:</strong>${result.subjects.join(',')}</p>
                        <p><strong>Address:</strong>${result.address.street},${result.address.city},${result.address.zip}</p>
                    `
                }
            }catch(e){
                r.innerHTML=e.message
            }
        }
        async function update(){
            const rollno=document.getElementById('uroll').value;
            const student={
                name: document.getElementById('uname').value,
                age: document.getElementById('uage').value,
                gender: document.getElementById('ugender').value,
                rollNumber: document.getElementById('uroll').value,
                subjects: document.getElementById('usub').value.split(','),
                address:{
                    street: document.getElementById('us').value,
                    city: document.getElementById('uc').value,
                    zip: document.getElementById('uz').value
                }
            }
            const response=await fetch(`http://localhost:5000/student/update/${rollno}`,{
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(student)
            })
            const result=await response.json()
            alert(result.message)
        } 
        async function del(){
            const rollNumber=document.getElementById('droll').value
            const response=await fetch(`http://localhost:5000/student/del/${rollNumber}`,{
                method:'DELETE'
            })
            const result=await response.json()
            alert(result.message)
        }
    </script>
</head>
<body>
    <header>
        <h1>Welcome to website (Base)</h1>
    </header>
    <div>
        <h2>Create a new student</h2>
        <p>Enter the student details below:</p>
        <form onsubmit="event.preventDefault();create();">
            <label for="cname">Name: </label>
            <input type="text" id="cname"><br>
            <label for="cage">Age:</label>
            <input type="number" id="cage"><br>
            <label for="croll">Roll Number:</label>
            <input type="text" id="croll"><br>
            <label for="cgender">Gender:</label>
            <input type="text" id="cgender"><br>
            <label for="csub">Subjects:</label>
            <input type="text" id="csub"><br>
            <label for="cs">Street: </label>
            <input type="text" id="cs"><br>
            <label for="cc">City: </label>
            <input type="text" id="cc"><br>
            <label for="cz">Zip:</label>
            <input type="text" id="cz"><br>
            <button type="submit">Submit</button>
        </form>
        <hr>
    </div>
    <div>
        <h2>Get the details of student:</h2>
        <form onsubmit="event.preventDefault();getdata();">
            <label for="groll">Roll Number:</label>
            <input type="text" name="groll" id="groll">
            <button type="submit">Submit</button>
        </form>
        <hr>
    </div>
    <div id="getdata">
    </div>
    <div>
        <hr>
        <h2>Update the student data: </h2>
        <form onsubmit="event.preventDefault();update();">
            <label for="uname">Name: </label>
            <input type="text" id="uname"><br>
            <label for="uage">Age:</label>
            <input type="number" id="uage"><br>
            <label for="uroll">Roll Number:</label>
            <input type="text" id="uroll"><br>
            <label for="ugender">Gender:</label>
            <input type="text" id="ugender"><br>
            <label for="usub">Subjeuts:</label>
            <input type="text" id="usub"><br>
            <label for="us">Street: </label>
            <input type="text" id="us"><br>
            <label for="uc">city: </label>
            <input type="text" id="uc"><br>
            <label for="uz">Zip:</label>
            <input type="text" id="uz"><br>
            <button type="submit">Submit</button>
        </form>
    </div>
    <div>
        <hr>
        <h2>Delete the student data:</h2>
        <form onsubmit="event.preventDefault();del();">
            <label for="droll">Roll Number:</label>
            <input type="text" name="droll" id="droll">
            <button type="submit">Submit</button>
        </form>
    </div>
</body>
</html>