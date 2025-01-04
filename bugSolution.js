function foo(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true; // Handle NaN case
  } else if (a === b) {
    return true; 
  }
  return false;
}

console.log(foo(NaN, NaN)); //This will now return true