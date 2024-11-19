// setTimeout(()=> {
//     console.log('This will log in 2 seconds')
// }, 2000);


// function greet(){
//     console.log('How from greet function')
// }
// setTimeout(greet, 2000)

// setTimeout(() => {
//     console.log('data fetched')
// }, 2000)

// console.log('data fetching')

// setTimeout(() => {
//     console.log('datas')
// }, 4000)

// const sampleData = [
//     {id:1, name: 'item 1', description: 'Desscription for item 1'},
//     {id:2, name: 'item 2', description: 'Desscription for item 2'},
//     {id:3, name: 'item 3', description: 'Desscription for item 3'}
// ]

// async function fetchedData() {
//     console.log('Fetching data ..........')

//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('data successfully fetched', sampleData)
//             resolve(sampleData)
//         }, 2000)
//     });
// }

//fetchedData();

// async function displayData() {
//     const dataList = document.getElementById('data-list')
//     try {
//         const data = await fetchedData()
//         const listItems = data.map(item => `<li>${item.name}:
//             ${item.description}</li>`);
//         dataList.innerHTML = listItems;    
//     } catch (error) {
//         console.log(`the error in your code is`, error)
//     }
// }

// displayData()

// function to fetch user data
async function fetchUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('User data contains some error')
    }
    return response.json();
}

// function to display data in the HTML
async function displayUserData() {
    const userList = document.getElementById('user-list');
    try {
        const users = await fetchUserData();
        const listItems = users.map(user => `<li>${user.name} - ${user.email}</li>`)
        userList.innerHTML = listItems
    } catch (error) {
        console.log('error fetching data:', error)
        userList.innerHTML = '<li> Error Fetching User data. pls try again later. </li>'
    }
}

displayUserData(); 