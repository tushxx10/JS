//FOR In loop
//suitable for objects

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
          //console.log(key)
}
for (const key in myObject) {
    //console.log(myObject[key])
}
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`)
}

// Printing of array using FOR-IN loop

const programming = ['cpp' , 'java' , 'py' , 'rb' , 'js']

for (const key in programming) {
console.log(key)  //this will print the index values of array(programming)
}

for (const key in programming) {
console.log(programming[key])  //this will print values present at index
}

//Forin loop in maps

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States Of America")
map.set('FR' , "France")
map.set('IN' , "India")

//For in loop is not iterable in MAPS henc it doesn't print anything
for (const key in map) {
    console.log(key)
}