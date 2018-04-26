const currentDate = {
  day: new Date().getDate(),
  month: new Date().getMonth() + 1
}

const noVariations = [
  "no",
  "uh-uh",
  "nix",
  "nope",
  "nay",
  "nah",
  "negative",
  "no siree",
  "not likely",
  "'fraid not"
]

const yesVariations = [
  "yes",
  "yea",
  "affirmative",
  "aye aye",
  "uh-huh",
  "yup",
  "ja",
  "sure is",
  "fo' shizzle",
  "sure",
  "yessir"
]

let message = noVariations[Math.floor(Math.random() * noVariations.length)]

if (currentDate.day === 28 && currentDate.month === 4) {
  message = yesVariations[Math.floor(Math.random() * yesVariations.length)]
}

document.getElementById('ballsHolder').innerHTML = `${message}.`
