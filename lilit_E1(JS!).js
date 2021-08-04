//Ex1

let array = []
arrayLength = +prompt("Please print ArrayLength")
for(let i=0; i<arrayLength; i++) {
    let arrayItems = prompt("Please enter ArrayItem")
    array[i] = arrayItems
}
let counts = {}
for (let i = 0; i < array.length; i++) {
     if (counts[array[i]] === undefined){

     	counts[array[i]] = 1
     } else {
     	counts[array[i]]++
     }
}

for (let number in counts) {

	console.log(number+":"+(counts[number]/array.length))
}





//Ex5

let array = []
arrayLength = +prompt("Please print ArrayLength")
for(let i=0; i<arrayLength; i++) {
    let arrayItems = prompt("Please enter ArrayItem")
    array[i] = arrayItems
}
if (array.length < 3){
	console.log(array)
}
for (let i = 0; i< array.length; i++) {
	for (let j = i+1; j<array.length; j++){
		for (let k = j + 1; k<array.length; k++){
				console.log("[ " + array[i] + ", " + array[j] + "," + array[k] + " ]")
		
		}
	}
}



//Ex3

let string = prompt("Enter the string")
let arrayString = string.split("")
let maxLength = 0
let maxStart = -1
let maxEnd = -1
for(let i = 0; i < arrayString.length; i++){
	for(let j = i; j < arrayString.length; j++){
		let finished = false

		if ((/[a-z]/).test(arrayString[j])){
			for(let k = i; k < j; k++){
				if ( arrayString[k] === arrayString[j]){
					let length = j-i
					finished = true

					if(length >= maxLength){
						maxLength = length
						maxStart = i
						maxEnd = j // talis enq Slice i patcharow
					}
					break
				}

		
			}
           
		}

		if (finished === true) {
			break
		} else if (j === arrayString.length-1){
			let length = j-i

			if(length >= maxLength){
				maxLength = length
				maxStart = i
				maxEnd = j + 1 
			}

		}
	}	  
}
if( maxLength > 0){
	console.log(arrayString
		.slice(maxStart,maxEnd)
		.join(''))
}


//Ex 2

function longestWord(string) {
  let reg = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;

  let newStr = string.split(reg).join("").split(" ");

  console.log(newStr);

  let largWord = [];
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length >= largWord.length) {
      largWord = newStr[i];
    }
  }
  let newString = string.lastIndexOf(largWord);

  return `The longest word in string is "${largWord}" in index ${newString}`;
}

console.log(longestWord(str));

//Ex 4

function delete(str){
    let result = '';
    let length;
    let div3 = str.length  %  3  ===  0
    if(div3){
        length = str.length
    }else{
        length = str.length - str.length % 3
    }
    for(let i = 0; i < length; i++){
        if(!div3){
            result = result + (str.slice(i+1,i+3) + str[i]) + str.slice(-str.length % 3)
            i = i + 2;
        }else{
            result = result + (str.slice(i+1,i+3) + str[i])
            i = i + 2;
        }
    }
       return result
}


