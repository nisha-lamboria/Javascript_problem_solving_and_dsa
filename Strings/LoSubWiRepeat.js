function lengthOfLongestSubstring(s) {
    let longestStringLength=0
    for(let i=0;i<s.length;i++){
        let stringSet=new Set();
        // console.log(i)
        for(let j=i;j<s.length;j++){
            // console.log(j)
            if(stringSet.has(s[j])){
                break
            }else{
                stringSet.add(s[j])
            }
        }
        longestStringLength=Math.max(longestStringLength,stringSet.size)
    }
    return longestStringLength
};

let lengthLongestString=lengthOfLongestSubstring("nisha")
console.log(lengthLongestString)
console.log(lengthOfLongestSubstring("shiwshi"))