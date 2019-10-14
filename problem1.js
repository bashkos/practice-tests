/**
 * Maps and arrays
 * `Array.from()` - is a method, that allow you to create arrays from different structures.
 * Read more https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 * Read more https://javascript.info/iterable#array-from
 *
 * The following function finds the character that is most often found in the text.
 * But now this function has an error. Fix this error and also show number of character repetitions.
 */

function getMostFrequentLetter(text) {
  const letters = new Map()

  Array.from(text).forEach(letter => {
    if (/[A-Za-z]/.test(letter)) {
      let count = letters.has(letter) ? letters.get(letter) : 0
      count++
      letters.set(letter, count)
    }
  })

  return letters.entries().reduce(
    (mostFrequentLetter, currentLetter) =>
      currentLetter[1] > mostFrequentLetter[1] ? currentLetter : mostFrequentLetter,
    ['', 0]
  )
}

const [mostFrequentLetter] = getMostFrequentLetter(`
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
est laborum.
`)

console.log(mostFrequentLetter)


/**
 * Destructuring assignment
 * Very useful syntax, that allow us to unpack arrays or objects.
 * Read more https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * Read more https://javascript.info/destructuring-assignment
 *
 * The following piece of code lists the moons of a given planet.
 * Fix all errors to make code work.
 */

const solarSystem = new Set()

solarSystem.add({
  name: 'Mercury',
  moons: []
})

solarSystem.add({
  name: 'Earth',
  moons: ['Moon']
})

solarSystem.add({
  name: 'Mars',
  moons: ['Phobos', 'Deimos']
})

solarSystem.add({
  name: 'Jupiter',
  moons: ['Europa', 'Ganymede', 'Io', 'Callisto', 'Valetudo', 'Amalthea']
})

solarSystem.add({
  name: 'Saturn',
  moons: ['Enceladus', 'Titan', 'Mimas', 'Dione', 'Tethys', 'Iapetus', 'Rhea']
})

function getMoons(solarSystem, targetPlanetName) {
  const { moons } = solarSystem.entries().find(({ planet }) => {
    const [ name ] = planet
    return name === targetPlanetName
  })
  return moons
}

const moonsOfMars = getMoons(solarSystem, 'Mars')

console.log(moonsOfMars)