let n = 5; // you can take input from prompt or change the value
var string
for (let i = 1; i <= n; i++) {
    string=""
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  console.log(string);
  
}
console.log(string);


for (let i = 1; i <= n; i++) {
    string=""
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  console.log(string)
}

for (let i = 0; i < n; i++) {
    string=""
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    for (let k = 0; k < 2 * (n-i) - 1; k++) {
      string += "*";
    }
    console.log(string);
  }

  
  
