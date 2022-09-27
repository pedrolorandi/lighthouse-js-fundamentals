for (let i = 100; i <= 200; i++) {
  console.log((i % 3 ? '' : 'Loopy') + (i % 4 ? '' : 'Lighthouse') || i)
}