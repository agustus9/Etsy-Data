// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data)

// 1: Show me how to calculate the average price of all items.
function question1() {
  // Answer:
  let sum = 0
  for (let i = 0; i < data.length; i++) {
    data[i]
    sum = sum + data[i].price
  }
  let average = sum / data.length // rounding up to 24 :-/
  console.log('The average price is $' + average.toFixed(2))
}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  // Answer:
  let items = []
  for (let i = 0; i < data.length; i++) {
    let prices = data[i].price
    let title = data[i].title
    if (prices >= 14.0 && prices <= 18.0) {
      items.push(title)
    }
  }
  console.log(items)
}

// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === 'GBP') {
      console.log(data[i].title + ' costs ' + data[i].price + ' pounds. ')
    }
  }
}

// 4: Display a list of all items who are made of wood.
function question4() {
  // Answer:
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.includes('wood')) {
      console.log(data[i].title + ' is made of wood ')
    }
  }
}

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5() {
  // Answer:
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.length > 8) {
      console.log(data[i])
    }
  }
}

// 6: How many items were made by their sellers?
// Answer:
function question6() {
  // Answer:
  let sellers = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made.includes('i_did')) {
      sellers += 1
    }
  }
  console.log(sellers)
}
