// fetch(destinationURL, configurationObject)    

// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",       // Telling server what type of data we are sending the request content in (JSON)
//          Accept: "application/json"               // Telling server what type of data we would like to recieve (JSON)
//     },
//     body: JSON.stringify({                        // We are converting our text data in our object into a string (JSON is written as one big string in its raw, unparsed form)
//         dogName: "Byron",
//         dogBreed: "Poodle"
//       })
// }

// fetch("http://localhost:3000/dogs", configurationObject)   // We make our POST request using fetch and handle the response by changing the JSON back into a JavaScript object
// .then((response) => response.json())
// .then((newDog) => console.log(newDog))
// .catch((error) => {
//         alert(`${error.message}`)        // In case there is an issue with fulfilling the request/response (method not specified), the existence of a catch will return an error that we can use to alert the user on the error message
// })



// const userObj = {                           // the object format that we want the user inputted arguments for the name and email to go
//     name: `${name}`,
//     email: `${email}`
// }

// const configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//          Accept: "application/json"
//     },
//     body: JSON.stringify(userObj)
// }






function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
             Accept: "application/json"
        },
        body: JSON.stringify({                           // the object format that we want the user inputted arguments for the name and email to go
            name: name,
            email: email
        })
    })
    .then((response) => response.json())
    .then((userData) => document.body.innerHTML=userData['id'])
    .catch((error) => document.body.innerHTML= error.message)
}


