import fs from 'fs';

let command = process.argv[2];
let sample = fs.readFileSync('./example.txt', 'utf8')
let modSample = sample.split(" ");
if(modSample.includes(command)){
  console.log(true);
} else {
  console.log(false);
}
