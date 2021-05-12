var db = firebase.firestore();

function ler (){
db.collection("Clientes").get().then(snapshot =>{
    snapshot.forEach(item => {
        console.log(item.data())
    })
}).catch(error =>{
    console.log(error)
})
}

function escrever (){
    db.collection("Clientes").add({title:"Novo Objeto", numero: Math.random()})
    .then(doc =>{
        console.log(doc)
    })
    .catch(error =>{
        console.log(error)
    })
}

escrever()


















































// let auth = firebase.auth()
// let newUserEmail = "novoteste@teste.com"
// let newUserPassword = "123abc"


// function newUser() {
//     let newUserEmail = "novoteste@teste.com"
//     let newUserPassword = "123abc"

//     let auth = firebase.auth()
//     auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
//         // Retorna uma Promisse
//         .then(user => {
//             console.log(user)
//         }).catch(error => {
//             console.log(error)
//         })

// }


// //Logando Usuario
// function login() {
//     let UserEmail = "novoteste@teste.com"
//     let UserPassword = "123abc"

//     auth.setPersistence(firebase.auth.Auth.persistence.SESSION).then(() => {

//         auth.signInWithEmailAndPassword(UserEmail, UserPassword)
//             .then(loggedUser => {
//                 console.log(auth.currentUser);
//             }).catch(error => {
//                 console.log(error)
//             })
//     }).catch(error => {
//         console.log(error)
//     })
// }
// // login()


// // Indentificar Usuario que está Logado

// auth.onAuthStateChanged(user => {
//     if (user) {
//         console.log(user)
//     } else {
//         console.log(" Ninguém logado")
//     }
// })

// function logout() {
//     auth.signOut().then(() => {
//         console.log("Usuario Deslogado")
//     }).catch(error => {
//         console.log(error)
//     })
// }
// setTimeout(login, 2000)