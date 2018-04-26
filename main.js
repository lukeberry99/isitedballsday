const currentDate = {
  day: new Date().getDate(),
  month: new Date().getMonth() + 1
}

const message = "NO."

if (currentDate.day === 28 && currentDate.month === 4) {
  message = "YES."
}

document.getElementById('edBallsMotherfucker').innerHTML = message
