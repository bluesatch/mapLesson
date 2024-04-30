/**
 * 
 *  Map object
 * 
 * holds key-value pairs and remembers the original insertion order of the keys
 * 
 * Four primary properties
 * 
 * .set(key, value)
 * .get(key)
 * .size
 * .delete(key)
 * 
 * a key in the map can only occur once; it is unique in the Map's collection
 */

const users = new Map()

// .set(key, value) => sets the value for the passed key in the object 

users.set('user1', {
    id: 1, 
    username: 'bluesatch', 
    email: 'satchwerk@gmail.com', 
    password: '12345', 
    following: 124, 
    followers: 5000
})
users.set('user2', {
    id: 2, 
    username: 'maggnificent', 
    email: 'maggie@maggie.com', 
    password: 'coffeeQueen24', 
    following: 321, 
    followers: 500
})
users.set('user3', {
    id: 3, 
    username: 'JS0nL1u', 
    email: 'jasonliu@aol.com', 
    password: 'saquonsFav22', 
    following: 299, 
    followers: 198
})

users.set('user4',{
    id: 4,
    username: 'pinkTeachey',
    email: 'janaecodes@yahoo.com',
    password: 'itsgivingpassw0rd',
    following: 23,
    followers: 17000
})

// console.log(users)

// .get(key) => returns the value associated to the passed key or undefined

// console.log(users.get('user2'))

// .size => returns the number of key/value pairs 
// console.log(users.size)

// .delete(key) => returns true if an element in the Map object existed and has been removed, or false if the element does not exist 

users.set('user5', {
    id: 5,
    username: 'jerryMander',
    email: 'jerrymann04@gmail.com',
    password: 'illtakeitn0w!',
    following: 4506,
    followers: 3
})

console.log(users)

console.log(users.delete('user5'))

console.log(users.delete('user6'))

const user = document.getElementById('user')
user.innerText = users.get('user3').username

const following = document.getElementById('following')
following.innerText = users.get('user3').following

const followers = document.getElementById('followers')
followers.innerText = users.get('user3').followers

// loop through map 

// for (const [key, value] of users) {
//     for (const prop in value) {
//         console.log(`key: ${key}, value: { ${prop}: ${value[prop]}}`)
//     }
// }

// for (const [key, value] of users) {
//     for (const prop in value) {
//         if (prop == 'email') {
//             console.log(`${key}, email: ${value[prop]}`)
//         }
//     }
// }

// forEach(callback function)
// users.forEach((key)=> {
//     console.log(`${key.username}, email: ${key.email}`)
// })

// .keys() => returns a new iterator object that contains the keys 

let keys = users.keys()
console.log(keys)

// .values()=> returns a  new iterator object that contains the values

let values = users.values()
console.log(values)

// .has() returns a boolean indicating whether a value has been associated with the passed in key

console.log(users.has('user1'))
console.log(users.has('user5'))

// .clear() => removes all key-value pairs from the map object users.clear()

// take a 2D array and turn it into a map

const playerScores = [
    ['basicallyAI', 3450],
    ['Semij', 2290],
    ['AndrestheGiant01', 4322]
]

const playerMap = new Map(playerScores)

console.log(playerMap)

// use Array.from()
// const playerMap2 = Array.from(playerScores)
// console.log(playerMap2)

/**
 * 
 * Cloning Map
 */

const player = new Map([['Mookie Betts', 'Second Base']])

console.log(player)

const playerClone = new Map(player)

console.log(playerClone)

console.log(player === playerClone)

playerClone.set('Freddie Freeman', 'First Base')

player.set('Freddie Freeman', 'Right Field')

console.log(playerClone)

console.log(player)

// merge maps

const eaGames = new Map([
    ['Madden', 'sport'],
    ['Fifa', 'sport'],
    ['Battlefield', 'shooter']
])

const activisionGames = new Map([
    ['C.O.D.', 'shooter'],
    ['Spliner Cell', 'shooter'],
    ['Crash Bandicoot', 'adventure']
])

const mergedMaps = new Map([...eaGames, ...activisionGames])

console.log(mergedMaps);

// .groupBy() static method groups the elements of a given iterable using the values returned by a provided callback function. The final returned map uses the unique values from the test function as keys, which can be used to get the array of elements in each group 

console.clear()

const inventory = [
    { name: 'hip hop', qty: 90 },
    { name: 'jazz', qty: 600 },
    { name: 'soul', qty: 736 },
    { name: 'rock', qty: 633 },
    { name: 'classical', qty: 45 },
    { name: 'country', qty: 53 }
]

const getMore = { getMore: true }
const sufficient = { getMore: false }

const result = Map.groupBy(inventory, ({ qty })=> qty < 200 ? getMore : sufficient)

console.log(result)
console.log(result.get(getMore))

const artists = [
    {id: 2, fName: 'John', lName: 'Coltrane', alias: ''},
    {id: 4, fName: 'Prince', lName: 'Nelson', alias: 'Prince'}
]

const hasAlias = { hasAlias: true}
const noAlias = { hasAlias: false}

const artistMap = Map.groupBy(artists, ({ alias})=> alias == '' ? noAlias : hasAlias)

const useAlias = artistMap.get(hasAlias)

console.log(useAlias)