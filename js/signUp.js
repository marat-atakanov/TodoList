if (localStorage.getItem("id")) {
    window.location.replace("listPage.html")
}

const api = "https://6576f6d2197926adf62ce184.mockapi.io/todo-list"

const signUpForm = document.querySelector(".signUpForm")
const signUpUsername = document.querySelector(".signUpUsername")
const signUpPassword = document.querySelector(".signUpPassword")
const signUpConfirmPassword = document.querySelector(".signUpConfirmPassword")
const signUpUserExistsMessage = document.querySelector(".signUpUserExistsMessage")

// const getUsersForSignUp = async () => {
//     try {
//         const response = await fetch(`${api}/users`)
//         const usersList = await response.json()
//         return usersList.has(user => user.username === signInUsername.value && user.password === signInPassword.value)
//     } catch (e) {
//         console.log(e)
//     }
// }

// Register
const signUp = async (username, password) => {
    try {
        const response = await fetch(`${api}/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username, password
            })
        })
        const user = await response.json()
        localStorage.setItem("id", user.id)
        window.location.replace("listPage.html")
    } catch (e) {
        console.log(e)
    }
}

// Submit the register form if every field is filled correctly
signUpForm.onsubmit = async (e) => {
    e.preventDefault()
    if (signUpPassword.value === signUpConfirmPassword.value) {
        await signUp(signUpUsername.value, signUpPassword.value)

    } else {
        signUpUserExistsMessage.innerHTML = "Passwords do not match!"
    }
}