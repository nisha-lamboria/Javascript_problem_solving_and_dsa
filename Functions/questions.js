// 1
// Method 1 for writing function
let powerCal = (a, b) => Math.pow(a, b)
console.log(powerCal(2, 3))

//Method 2 for writing function
function powerCal2(a, b) {
    return Math.pow(a, b)
}
console.log(powerCal2(2, 3))

//Method 3 for writing function
let powerCal3 = function (a, b) {
    return Math.pow(a, b)
}
console.log(powerCal3(2, 3))

//2
const calcHexArea = s => 3 * Math.sqrt(3) / 2 * (s * s)
console.log(calcHexArea(10))

//3
const noOfWords = s => s.split("").length
console.log(noOfWords("neograd abc"))

//4
const minOfAll = (...args) => {
    return (Math.min(...args))
}
console.log(minOfAll(3, 5, 9, 1))

// 5
const findTriangle = (ang1, ang2, ang3) => {
    if (ang1 > 0 && ang2 > 0 && ang3 > 0 && ang1 + ang2 + ang3 === 180) {
        if (ang1 === ang2 && ang1 === ang3) {
            return "equilateral"
        } else if (ang1 === ang2 || ang2 === ang3 || ang3 === ang1) {
            return "isosceles"
        } else {
            return "scalene"
        }
    } else {
        return "not a triangle"
    }
}
console.log(findTriangle(45, 45, 0))

// const packIt = (...args) => console.log(args)

// packIt(1,2,3,5,5)

// function packIt2(...args){
//     console.log(...args)
// }
// packIt2(1,2,3,5,5)

//Medium
//1
const arrayLength = (arrval) => arrval.length
console.log(arrayLength([1, 2, 3, 4, 5]))

//2
const eleIndex = (array, element) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return i
        }
    }
}
console.log(eleIndex([5, 2, 6, 7, 3, 4, 5], 3))

//3
const replaceFirstSecond = (arr, first, second) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === first) {
            arr[i] = second
            return arr
        }
    }
}
console.log(replaceFirstSecond([1, 5, 3, 5, 6, 8], 5, 10))

//4
const mergeArray = (array1, array2) => [...array1, ...array2]
console.log(mergeArray([1, 2, 3, 4, 5], [6, 7, 8, 9]))

//5
const charAt = (str, index) => {
    strArray = [...str]
    console.log(strArray)
    for (let i = 0; i < strArray.length; i++) {
        if (i === index) {
            return strArray[i]
        }
    }
}
console.log(charAt("neoGcamp", 4))
//or
const getChr = (str, index) => str[index]
console.log(getChr("neoGcamp", 4))

//someExample
const checkRest = (...args) => {
    console.log(args)
}
console.log(checkRest(1, 2, 3, 4, 5))

//6
const minDate = (d1, d2) => {
    let date1 = d1.split("/")
    let date2 = d2.split("/")
    // console.log(date1)
    if (date1[2] > date2[2]) {
        return d2
    } else if (date2[2] > date1[2]) {
        return d1
    } else {
        if (date1[1] > date2[1]) {
            return d2
        } else if (date2[1] > date1[1]) {
            return d1
        } else {
            if (date1[0] > date2[0]) {
                return d2
            } else if (date2[0] > date1[0]) {
                return d1
            } else {
                return d1
            }
        }
    }
}
console.log(minDate('02/05/2021', '24/01/2021'))


const abc=(...rest)=>{
    console.log(rest)
}
console.log(abc())
