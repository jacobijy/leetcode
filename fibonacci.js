var fibonacci = function(n) {
  if (n == 1) return 0;
  if (n == 2) return 1;
  let a = 1,
      b = 1,
      c = a;
  for (let i = 1; i < n; i++) {
    a = b;
    b = c + a;
    c = a;
    console.log(a)
  }
  return a;
}

console.log(fibonacci(51));

