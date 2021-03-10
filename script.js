const continents = [
  {
    value: "europe",
    label: "Europa"
  },
  {
    value: "america",
    label: "Ameryka"
  }
]

const countries = [
  {
    value: "poland",
    label: "Polska",
    continent: "europe"
  },
  {
    value: "spain",
    label: "Hiszpania",
    continent: "europe"
  },
  {
    value: "brasil",
    label: "Brazylia",
    continent: "america"
  }
]

let chosenContinent = 'america'

const makeOptions = (select, options) => {
  options.forEach((option) => {
    const optionElement = document.createElement("option")
    optionElement.value = option.value
    optionElement.innerText = option.label
    select.appendChild(optionElement)
  })
}

const render = () => {

  document.body.innerHTML = ''

  const continentsSelect = document.createElement("select")
  const countriesSelect = document.createElement("select")

  continentsSelect.addEventListener(
    "change",
    (e) => {
      chosenContinent = e.target.value
      render()
    }
  )

  makeOptions(continentsSelect, continents)
  makeOptions(countriesSelect, countries.filter((country) => country.continent === chosenContinent))

  continentsSelect.value = chosenContinent

  document.body.appendChild(continentsSelect)
  document.body.appendChild(countriesSelect)

}

render()