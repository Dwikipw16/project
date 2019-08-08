const express = require('express')
const app = express()
const array_lib = require("./lib/array")
const object_lib = require("./lib/object")
const project1_lib = require("./lib/project1")
/**
 * List of imported routes
 */
// const array_routes = require('./routes/array')

// for parsing application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})

app.post('/tambah', (req, res) => {
    var a, b, c
    // Data type of variable a & b must be number, not string
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a + b

    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    
    return res.send(`The result value is ${c}`)
})

app.get('/example-1', (req, res) => {
    let data = ["Red", "Blue", "Yellow", "Green"]
    let manipulation = array_lib(data)

    return res.send(manipulation)
})

app.get('/example-2', (req, res) => {
    let data = {
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@mail.com",
        gender: "men"
    }
    let result = object_lib.manipulate(data)

    return res.send(result)
})

app.get("/example-3", (req, res) => {
    let input = ["Black"]
    let data = ["Red", "Blue", "Yellow", "Green"]
    console.log("before ", data)

    let result = object_lib.merge(data = data, input = input)
    console.log("after ", result)

    return res.send(result)
})

app.get("/example-4", (req, res) => {
    let empty_data = []
    console.log("before ", empty_data)

    let color = "Red"
    object_lib.add(empty_data, color)
    console.log("after ", empty_data)

    return res.send(empty_data)
})

app.get('/taks-1', (req, res) => {
    let siswa = ["Dwiki", "Irma", "Rival", "Tama"]
    let manipulate = project1_lib.manipulate(siswa)

    return res.send(manipulate)

})

app.get('/taks-2', (req, res) => {
    let siswa = ["Dwiki", "Irma", "Rival", "Tama"]
    let awsis = project1_lib.awsis(siswa)

    return res.send(awsis)

})
app.listen(3000, () => {
    console.log('magic happen at http://localhost:3000')
})