type Calculation<T> = {
  [key: string]: T
}

type toNearestQuarter = (value: number) => number
type calculator = (turkeySize: number) => Calculation<string>

const toNearestQuarter: toNearestQuarter = (value) => Math.ceil(value * 4) / 4

const calculateSpices: calculator = (turkeySize) => {
  return {
    salt: `${toNearestQuarter(0.05 * turkeySize)} cups`,
    water: `${Math.round(0.66 * turkeySize)} gallons`,
    'brown sugar': `${toNearestQuarter(0.13 * turkeySize)} cups`,
    shallots: `${Math.round(0.2 * turkeySize)} cups, chopped`,
    'cloves of garlic': `${Math.round(0.4 * turkeySize)}, chopped`,
    'whole peppercorns': `${toNearestQuarter(0.13 * turkeySize)} tbsp`,
    'dried juniper berries': `${toNearestQuarter(0.13 * turkeySize)} tbsp`,
    rosemary: `${toNearestQuarter(0.13 * turkeySize)} tbsp`,
    thyme: `${toNearestQuarter(0.06 * turkeySize)} tbsp`,
  }
}

const convertMinutesToHoursAndMinutes: (timePerPounds: number) => string = (timePerPounds) => {
  if(timePerPounds === 60) return '1 hour'
  const hours = Math.floor((timePerPounds) / 60)
  const minutes = Math.floor((timePerPounds) % 60)

  if(minutes > 0) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} and ${minutes} ${minutes === 1 ? 'minute' : 'minutes'}.`
  } else {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'}`
  }
}

const calculateCookingTimes: calculator = (turkeySize) => {
  const brine = turkeySize * 2.4 > 59 ? convertMinutesToHoursAndMinutes(turkeySize * 2.4) : `${Math.floor(turkeySize * 2.4)} minutes`
  const roast = turkeySize * 15 > 59 ? convertMinutesToHoursAndMinutes(turkeySize * 15) : `${Math.floor(turkeySize * 15)} minutes`
  return { brine, roast }
}

const cookTurkey = (turkeySize: number) => {
  const spices = calculateSpices(turkeySize)
  const cookingTimes = calculateCookingTimes(turkeySize)

  const parseObj = (obj: Calculation<string>) => {
    const instructionsArray: string[] = []
    for(const key in obj) {
      instructionsArray.push(`<li style='text-transform:capitalize'>${key}: ${obj[key]}</li>`)
    } 
    return instructionsArray
  }

  return `
    Here are all your measurements for your ${turkeySize}lb turkey!
    <h2>Spices</h2>
    <p>(Spice measurements are rounded to the nearest quarter).</p>
    <ul>${parseObj(spices).join('')}</ul>
    <h2>Cooking times</h2>
    <ul>${parseObj(cookingTimes).join('')}</ul>
  `
}

export default cookTurkey