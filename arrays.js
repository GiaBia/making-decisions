/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

// Jon, embarrassed, intends to head back to Winterfell asap. First, let's create a backpack for him so he can begin to pack his bags. Create a variable called backpack, that is equal to an empty array.

let backpack = []
// Now, let's add some of his stuff to that backpack. Add 3 strings to the array, "sword", "shield", and "food".

backpack.push(`sword`,`shield`,`food`)

console.log(backpack)

// Realizing that his backpack is going to be too full to add other essentials, Jon decides to take his sword out and place it on his belt. Remove this sword from the backpack.

let belt = backpack.splice(0, 1)

console.log(belt)

// Now Jon decides he wants to add his fur coat to his backpack. Create a variable c the backpack.alled furCoat and give it a string value of "fur coat". Then add that variable to the backpack

let furCoat = `fur coat`

backpack.unshift(furCoat)

// Realizing it is freezing outside, Jon decides to take the fur coat back out and put it on. Without using splice, remove the fur coat from the array.

backpack.shift()

console.log(backpack)

// Let's check how much stuff we have in our backpack. Create a variable called itemCount and set it equal to the number of items in the backpack

let itemCount = backpack.length

console.log(itemCount)

// There is currently no where near enough supplies to make the journey to Winterfell. Let's add some other essentials. Add the strings: flint, blanket, knife, and toothbrush.

backpack.push("flint", "knife", "blanket", "toothbrush")

console.log(backpack)

// Realizing his bag is overflowing, Jon decides to split up his content into two bags. Create a backpack2 variable that will hold some items. Use the splice method to move the flint, blanket, and knife from backpack to backpack2

let backpack2 = backpack.splice(2, 4)

console.log(backpack2)

// using bracket syntax, console.log the first item in backpack2

console.log(backpack2[0])
