function getDayInfo(date) {
  let newStr = `${date.split('.')[2]}-${date.split('.')[1]}-${date.split('.')[0]}`
  let parseDate = new Date(newStr)
  let daysName = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

  let months = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ]

  let numberOfDays = Math.ceil(parseDate.getDate() / 7)
  let result = `${daysName[parseDate.getDay()]}, ${numberOfDays} неделя ${
    months[parseDate.getMonth()]
  } ${parseDate.getFullYear()} года`

  return result
}

console.log(getDayInfo('01.01.2022'))
