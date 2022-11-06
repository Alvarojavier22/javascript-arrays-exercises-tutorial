let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

let mixType = []

for (let i = 0; i < mix.length; i++){
    let type = mix [i];
mixType.push(typeof type)
}
console.log(mixType)