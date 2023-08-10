// Drive link
// https://drive.google.com/file/d/1omce-JAZg-W0UyfDOLpEg1GzZuIExzId/view

// Proti fangshon ke call korte hobe ,ekhane call kora navigator.canShare.out  put dekhte chaile 
// fangshoner bahire call korte hobe

// Problem 1----------------
// ত োমাকে cubeNumber() নামে একটা function দে ওয়া হয়ে ছে । functionটা একটা input নাম্বার নি বে ।
// Task:
// 1. input নাম্বারটাকে cube করে result টা রি টার্ন করবে ফাংশন থে কে ।
// 2. Bonus: ইনপুট হি সে বে number টাইপ এর পরি বর্তে অন্য কি ছুদি লে তুমি একটা মি নি ংফুল মে সে জ রি টার্ন
// করে দি বে ফাংশন থে কে ।
// Sample Input 
// 3 27
// Sample Output
// 4 64

// বি .দ্র.: নে গে টিভ বা ০ এর ক্ষে ত্রে যে হে তুভ্যালি ডে শন এর বি ষয়ে কি ছুবলে নি সে হে তুএইটা ইগন োর করে ন। মানে এইগুল ো
// ইনপুট দি লে cube রি টার্ন করে দে ন। আমরা শুধুপজি টিভ এর জন্য চে ক করে দে খব ো সি স্টে মে ।


/*   function cubeNumber(number) {

    if(typeof number !== "number"){
        return 'please Enter a type of number type input';
    }

    else{
        const result =number**3
        return result;
    }
}  */


// Problem - 2

// 1. ত োমাকে একটা function দে ওয়া হবে called “matchFinder()” যা ইনপুট হি সে বে দইুটা string নি বে ।
// Task:
// 1. যদি প্রথম স্ট্রি ংটির ক োন ো একটি অংশে র সাথে দ্বি তীয় স্ট্রি ংটির পুর োপুরি মি ল খুজে পাও সে ক্ষে ত্রে তুমি
// boolean রি টার্ন করবে এক্ষে ত্রে ত োমাকে true রি টার্ন করতে হবে ।
// 2. আর যদি পুর োপুরি মি ল খুজে না পাও সে ক্ষে ত্রে তুমি boolean false রি টার্ন করবে ।
// 3. Bonus: দটিু ইনপুট স্ট্রি ং দে ওয়া হল ো কি না সে টা validate করবে । যদি দইুটি বা যে ক োন ো একটি ইনপুট স্ট্রি ং
// না হয় সে ক্ষে ত্রে তুমি একটা মি নি ংফুল মে সে জ রি টার্ন করে দি বে ।

// Sample Input Sample Output
// “John Doe”,“ohn” true
// “JavaScript”,“Code” false
// “Peter Parker”,“Pen” false
// “Peter Parker”,”pet” false


/*    function matchFinder(string1, string2) {

if(typeof string1 !== "string" || typeof string2 !== "string"){
    return "please type of string type input"
}

else{

    if (string1.includes(string2)) {
        return true;
    }
    
    else {
        return false;
    }
}
}  */


//  Problem - 3

// ত োমাকে একটা ফাংশন লি খতে হবে যার নাম হবে sortMaker()। এই ফাংশনে র parameter হবে একটি array এবং
// এই array তে সবসময় দইুটি উপাদান থাকবে ।
// Task:
// 1. যদি অ্যারে র দইুটি উপাদান পজি টিভ সংখ্যা হয় সে ক্ষে ত্রে তুমি অ্যারে টিকে বড় ো থে কে ছ োট ক্রমে সাজি য়ে রি টার্ন
// করবে ।
// 2. যদি দইুটি উপাদান একই হয় সে ক্ষে ত্রে তুমি এই স্ট্রি ং রি টার্ন করবে ঃ “equal”
// 3. Bonus: যদি অ্যারে র যে ক োন ো একটি উপাদান নে গে টিভ সংখ্যা হয় সে ক্ষে ত্রে তুমি রি টার্ন করবে “Invalid
// Input”
// Sample Input Sample Output

// [2,3] [3,2]
// [4,2] [4,2]
// [4,4] equal
// [1,2] [2,1]
// [4,-2] Invalid Input


  /* function sortMaker(arr) {
    if(!Array.isArray(arr)){
        return "please give me array type of input";
    }

    else{
        if(arr[0]===arr[1]){
            return "equal";
        }
        else if(arr[0] >= 0 && arr[1] >= 0){

              for (let i = 0; i < arr.length - 1; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] < arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;

                    }
                }
            }
            return arr;
           
        }

        else {
            return "Invalid Input";
 
        } 
    }
    
} 


const a = [10,-3,5,-7,8];
console.log(sortMaker(a)); */


 
// Problem - 4


// ত োমাকে একটা function দে ওয়া হবে called “findAddress()” যা ইনপুট হি সে বে একটা object নি বে । Object এর
// তি নটি property থাকবে ।
// Task:
// 1. ত োমাকে ১ম sample output এর format এ output return করতে হবে ।
// 2. Bonus: যদি object এর ক োন ো property missing থাকে সে ক্ষে ত্রে সে ই অংশটুকু double underscore
// দি য়ে replace হবে । (২য় output এর format এ )
// Input Output
// {street:10,house:“15A”,society:“Earth
// Perfect”}

// 10,15A,Earth Perfect

// {street:10,society:“Earth Perfect”} 10,__,Earth Perfect

// {street:10} 10,__,__


/*   function findAddress(obj){
    if(typeof obj !== "object"){
        return "please give me a type of object type input";
    }
    else{
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';

        const fullSentence = street + ',' + house + ',' + society;
        return fullSentence;
    }
} 
 */


// problem 5

// তুমি দ োকানে একটা চি প্স কি নতে গে লা কি ছুখুচরা টাকার ন োট নি য়ে । একটা canPay() নামে function বানাও যে টা
// ২টা ইনপুট নে ইঃ একটা array, এবং আরে কটা number।
// 1. Array এর প্রত্যে ক টা element ত োমার খুচরা টাকা বঝু াই
// 1 taka
// 2 taka
// 5 taka
// 2. second input টা বঝু াই চি প্স এর দাম।
// Task:
// 1. যদি খুচরা টাকা গুল ো য োগ করে চি প্স এর দামে র সমান বা তার বে শি হয় তাহলে boolean true রি টার্ন
// করবে
// 2. আর যদি ন োটগুল োর য োগফল চি প্স এর দামে র চে য়ে কম হয় সে ক্ষে ত্রে boolean false রি টার্ন করবে ।
// 3. Bonus: ইনপুট এর প্রথম উপাদান empty অ্যারে কি না চে ক করবে । empty অ্যারে হলে মি নি ংফুল মে সে জ
// রি টার্ন করে দি বে ।

// Sample Input Sample Output
// [1,2,5],10 false
// [1,5,5],10 true

 /*  function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "First element in array empty, so please fulfil array";   
    }

    else{

        let totalCost = 0;
        for (let i = 0; i < changeArray.length; i++) {
            totalCost += changeArray[i];
        }
        
        if (totalCost >= totalDue) {
            return true; 
        }
        
        else {
            return false;
        }
    }
}
 */

















