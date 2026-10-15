let users = ["Pedro", "Ana","Joana","Diego","Divi Messias","Cristiano"]

let searchUser = prompt("Digite o noe do usuario que deseja buscar")

if(searchUser === ""){
    console.log("Não pode enviar em branco")
    
}

else{
    let user = users.find(user =>
        user.toLocaleLowerCase().includes(searchUser.toLocaleLowerCase().trim())
    )
    if(user === undefined){
        console.log("user not found")
        users.push(searchUser)
        console.log(users)
    }

    else{
        console.log("Usuario encontrado: ".concat(user));
        let index = users.indexOf(user);
        users[index] = "novo valor"
        // users.splice(index,3)
        console.log(users)


        users.forEach(element => {
            console.log(element)
        })
    }
}