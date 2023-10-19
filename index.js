import express from 'express';

const app = express();
app.use(express.json());


const PORT = 8080;
const students = [];

app.get('/health', (req, res) => {
    res.json({ status: 'All Good!..All set!' });
});

app.get('/students', (req, res) => {
    res.json({
        sucess: true,
        data: students,
        message: 'Sucessfully fetched all students',
    })
});

app.post('/student', (req, res) => {
    const { name, age, mobile, email } = req.body;

    if (!name) {
        return res.json({
            sucess: false,
            message: 'Name is required',
        })
    }

    if (!age) {
        return res.json({
            sucess: false,
            message: 'Age is required',
        })
    }

    if (!mobile) {
        return res.json({
            sucess: false,
            message: 'Mobile is required',
        })
    }

    if (!email) {
        return res.json({
            sucess: false,
            message: 'Email is required',
        })
    }


    const id = Math.floor(Math.random() * 100000) + 1;

    const newStudent = {

        "id": id,
        "name": name,
        "age": age,
        "mobile": mobile,
        "email": email,

        // id,
        // name,
        // age,
        // mobile,
        // email,
    }
    students.push(newStudent);

    res.json({
        sucess: true,
        data: newStudent,
        message: 'Sucessfully added new student',
    })
});

app.get('/student', (req, res) => {
    const { id } = req.query;

    let student = null;

    students.forEach((stud) => {
        if (stud.id == id) {
            student = stud;
        }
    })

    if(student == null){
     return res.json({
        sucess: false,
        message: 'Student not found..',
     })   
    
    }
    res.json({
        sucess: true,
        data: student,
        message: 'Sucessfully fetched student',
    })
});





app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});