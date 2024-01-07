// const http= require ('http')
// let phoneContact =[
//     {
//         id:1,
//         name:'Suraj'
//     },
//     {
//         id:2,
//         nmae:'sususu'
//     }
// ]
// const app= http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-type':'JSON'})
//     response.end(JSON.stringify(phoneContact)) 
// })
// const PORT =3001
// app.listen(PORT)
// console.log(`server running on port ${PORT }`)
const express =require('express')
const app =express()
app.use(express.json())
let contact=[
    {
        id:1,
        name:"Ram",
        number:2233
    },
    {
        id:2,
        name:"Ra",
        number:22339
    }
]
app.get ('/contact/',(request,response)=>{
    response.json(contact)
})
app.get('/contact/:id',(request,response)=>{
    const id =Number(request.params.id)
    const singlecontact = contact.find(data=>data.id===id)
    if (singlecontact){response.json(singlecontact)}
    else {(response.status(404).end)}
    response.json(singlecontact)
})
app.delete('/contact/:id',(request, response)=>{
    const id =Number(request.params.id)
    contact = contact.filter(data=>data.id !==id)
    response.status(204).end()
})
app.post('/contact/',(request,response)=>{
    const student =request.body 
    contact.push (student)
    response.json(contact)
})
const unknownEndpoint =(request, response )=>{
    response.status(404).send({error:'unknown endpoint'})
}
app.use (unknownEndpoint)
const PORT = 3001
app.listen(PORT,()=>console.log(`Server running on ${PORT}`))