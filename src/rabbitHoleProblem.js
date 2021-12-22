const count = 20

const tr = document.querySelector('table tr')

for (let i = 0; i < count; i++) {
  const td = document.createElement('td')
  td.id = i
  tr.appendChild(td)
}



const turns = [0, 0]
const gen = () => {
  let currentIndex = 1
  do {
    if (turns.includes(currentIndex)) {
      turns.push(currentIndex)
      currentIndex++
    } else {
      turns.push(currentIndex)
      currentIndex = 0
    }
  } while (currentIndex !== (count - 1))
}

gen()
console.log(turns)


const turn = (turnIndex, field) => {
  if (turnIndex > turns.length) throw Error('DA EBANA')
  const hammerIndex = field.findIndex(x => x === 'hammer')
  field[hammerIndex] = undefined
  const newHammerIndex = turns[turnIndex]
  if (field[newHammerIndex] === 'rabbit') return true
  field[newHammerIndex] = 'hammer'
}

const spawnRabbit = (field) => {
  const length = field.length
  const rabbitHole = Math.floor(length * Math.random())
  field[rabbitHole] = 'rabbit'
}

const moveRabbit = (field) => {
  let rabbitIndex = field.findIndex(x => x === 'rabbit')
  field[rabbitIndex] = undefined
  const rnd = Math.random()
  if (rabbitIndex === 0) rabbitIndex++
  else if (rabbitIndex === field.length - 1) rabbitIndex--
  else if (rnd > 0.5) {
    rabbitIndex--
  } else {
    rabbitIndex++
  }
  field[rabbitIndex] = 'rabbit'
}

const draw = (field) => {
  field.forEach((value, index) => {
    const elem = document.getElementById(index)
    elem.className = value
  })
}

const start = async () => new Promise((resolve, reject) => {
  const field = new Array(count)
  let turnIndex = 0
  spawnRabbit(field)
  while (true) {
    try {
      moveRabbit(field)
      if (turn(turnIndex, field)) {
        resolve()
        return
      }
      // draw(field)
      turnIndex++
    } catch (e) {
      reject(e)
      return
    }
  }
})

const startChecking = async () => {
  const total = 1000000
  try {
    for (let i = 0; i < total; i++) {
      await start()
      console.log('ura #', i)
    }
  } catch (e) {
    console.log(e)
    console.log('Pizdec obidno')
  }
}

startChecking()