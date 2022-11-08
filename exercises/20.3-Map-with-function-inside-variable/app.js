let names = ['Alice','Bob','Marry','Joe','Hilary','Stevia','Dylan'];

let prepender = function(name){
	return 'My name is: '+name;
};

//your code here

const map1 = names.map(prepender);

console.log(map1);