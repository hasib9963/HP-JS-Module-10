function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  let vowelCount = 0;
  for(let char of str) {
    if(vowels.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3
