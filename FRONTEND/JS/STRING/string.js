let str="Hello";

// 1. to uppercase

let upper = str.toUpperCase()
console.log(upper);

// 2. to lowercase

let lower = str.toLowerCase()
console.log(lower);

// 3. includes()

let inc = str.includes("ell")
console.log(inc);

// 4.startswith

let starts = lower.startsWith("he")
console.log(starts);

// 5. endswith

let ends = str.endsWith("lo")
console.log(ends);

// 6. charAt

let char = str.charAt(4)
console.log(char);

//  7. Indexof

let index = str.indexOf('l')
console.log(index);

// 8. LastIndex

let last = str.lastIndexOf('l')
console.log(last);

// 9.concat

let str1 = "Hello"
let str2 = "Javascript"
// let str3 = str1.concat(" " +str2)
let str3 = `${str1} ${str2}`
console.log(str3);


// 10. split

let split = str3.split(" ")
console.log(split);

// 11. trim

let trim = " hello world "
let t = trim.trim();
console.log(t);

// 12. trim start

let start = trim.trimStart();
console.log(start);

// 13. trim end

let end = trim.trimEnd();
console.log(end);

// 14. slice

let slice = str.slice(-1,6)
console.log(slice);

// 15.substring

let sub = str.substring(2,0)
console.log(sub);

// 16.replace

let rep = "Hello World";
console.log(rep);
let replace = rep.replace("World","there");
console.log(replace);

let repall = replace.replaceAll('l','o')
console.log(repall);

// string interpolation

let name = "vk"
let age = 36

let cricket = `${name} ${age} is the king of cricket`
console.log(cricket);
