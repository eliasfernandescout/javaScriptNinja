function meusArgumentos2(a, b, c) {
  if (a !== undefined && b === undefined && c === undefined) {
    return a;
  } else if (a !== undefined && b !== undefined && c === undefined) {
    return a + b;
  } else if (a !== undefined && b !== undefined && c !== undefined) {
    return (a + b) / c;
  } else if (a === undefined && b === undefined && c == undefined) {
    return false;                         
  } else {
  return null;
  }
}
console.log(meusArgumentos2()); //false
console.log(meusArgumentos2(2)); //valor 2
console.log(meusArgumentos2(2, 2)); //valor 4
console.log(meusArgumentos2(5, 5, 2 )); //valor 5
