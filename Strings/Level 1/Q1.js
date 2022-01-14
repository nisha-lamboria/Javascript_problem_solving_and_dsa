//A
string1="batgirl"
string1=string1.toUpperCase()
console.log(string1)

//B
stringB="wolverine"
stringB1="deadpool"
stringNew=stringB1.concat(stringB,string1)
console.log(stringNew)

//C
stringC="NishaLamboria"
console.log(stringC.length)

//D
stringD="IdentifyBugs"
function removeVowel(getString){
    vowels=['a','e','i','o','u','A','E','I','O','U']
    res=""
    for(let i=0;i<getString.length;i++){
        if(!vowels.includes(getString[i])){
            res+=getString[i]
        }
    }
    console.log(res)
}
removeVowel(stringD)

//E
stringsE=["short","middle","longest"]
function maxmin(stringsE){
    max=""
    min="100000"
    for(let i=0;i<stringsE.length;i++){
        if(stringsE[i].length>max.length){
            max=stringsE[i]
        }
        if(stringsE[i].length<min.length){
            min=stringsE[i]
        }
    }
    console.log(max,min)
}
maxmin(stringsE)

//F
let stringsF="countConsonantsandVowels"
function countConsonantsAndVowels(){
    vowels=['a','e','i','o','u','A','E','I','O','U']
    countVow=0
    countCons=0
    for(let i=0;i<stringsF.length;i++){
        if(vowels.includes(stringsF[i])){
            countVow+=1
        }else{
            countCons+=1
        }    
    }
    console.log(`vowelsCount:${countVow} ConsonantsCount:${countCons}`)
}
countConsonantsAndVowels()

//G
let stringsG="logan@45"
function checkAlphaNumeric(){
    for(let i=0;i<stringsG.length;i++){
        let code=stringsG.charCodeAt(i)
        if(!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)){
            return false;
        }
    }
    // console.log('alphanumeric')
    return true;
}
let alphanumeResult=checkAlphaNumeric()
console.log(alphanumeResult)

//H
let stringsH="stringLength"
function checkLength(str){
    let lengthCount=0
    for(s in str){
        lengthCount+=1
    }
    return lengthCount 
}
let stringLengthResult=checkLength(stringsH)
console.log(stringLengthResult)

//I
stringsI="Nisha"
stringsI1="Lamboria"
function copySmallString(){
    minCount=Math.min(stringsI.length,stringsI1.length)
    console.log(minCount)
    if(minCount===stringsI.length){
        stringsI1=stringsI1.concat(stringsI)
    }else{
        stringsI1=stringsI.concat(stringsI1)
    }
    return stringsI1
}
stringCopy=copySmallString()
console.log(stringCopy)




