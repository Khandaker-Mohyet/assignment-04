function calculateTax(income, expenses) {
  if (0 >= income || 0 >= expenses) {
    return "Invalid Input";
  }
  else {
  difference = income - expenses;
  tex = difference * .20;
  return tex;
  }
  
}

// console.log(calculateTax(10000, 3000))
// console.log(calculateTax(34000, 1753))
// console.log(calculateTax(5000, 1500))
// console.log(calculateTax(7000, 7000))
// console.log(calculateTax(-5000, 2000))
// console.log(calculateTax(6000, -1500))




function sendNotification(email) {
  if (email.indexOf('@') === -1) {
    return "Invalid Email"
  }

  let part = email.split('@');
  let useurName = part[0];
  let domainName = part[1];

  let notificationIs = useurName + " sent you an email from " + domainName;

  return notificationIs;
  
}

// console.log(sendNotification('zihad@gmail.com'));
// console.log(sendNotification('farhan34@yahoo.com'));
// console.log(sendNotification('nadim.naem5@outlook.com'));
// console.log(sendNotification('fahim234.hotmail.com'));
// console.log(sendNotification('sadia8icloud.com'));



function checkDigitsInName(name) {
  if (typeof name !== 'string') {
    return 'Invalid Input'
  }
  else {
  const names = /\d/.test(name);
  return names;
  }
  
}

// console.log(checkDigitsInName('Raj123'));
// console.log(checkDigitsInName('n9ayeem'));
// console.log(checkDigitsInName('e1mu3'));
// console.log(checkDigitsInName('Suman'));
// console.log(checkDigitsInName('Name2024'));
// console.log(checkDigitsInName('!@#'));
// console.log(checkDigitsInName(["Raj"]));


function calculateFinalScore(obj) {
    
    if (typeof obj === 'object') {
    const { name, testScore, schoolGrade, isFFamily } = obj;

    let finalScore = testScore + schoolGrade;

    if (isFFamily) {
        finalScore = finalScore + 20;
    }

    return finalScore >= 80;
  }
    else {
      return "Invalid Input";
  }

}


// console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }))
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false }))
// console.log(calculateFinalScore("hello"))
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }))




function  waitingTime(waitingTimes , serialNumber) {
  if (Array.isArray(waitingTimes) && typeof serialNumber === 'number') {
    let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++){
      sum = sum + waitingTimes[i];
    }
    let average = sum / waitingTimes.length;
    let roundAverage = Math.round(average);
    let isratSerial = serialNumber - 1;
    let waitKortaHoba = isratSerial - waitingTimes.length;
    let result = waitKortaHoba * roundAverage;
    return result;
  }
  else {
    return 'Invalid Input';
  }
}

console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10))
console.log(waitingTime([13, 2], 6))
console.log(waitingTime([13, 2, 6, 7, 10], 6))
console.log(waitingTime([6], 4))
console.log(waitingTime(7 , 10))
console.log(waitingTime("[6,2]", 9))
console.log(waitingTime([7, 8, 3, 4, 5], "9"))
