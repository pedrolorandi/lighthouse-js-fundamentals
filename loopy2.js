const loopyLighthouse = function (range, multiples, words){
  for (let i = range[0]; i <= range[1]; i++) {
    console.log((i % multiples[0] ? '' : words[0]) + (i % multiples[1] ? '' : words[1]) || i)
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);