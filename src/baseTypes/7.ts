/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay{
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,	
  Friday,
  Saturday
}


function isWeekend(day:WeekDay):boolean{
return day === WeekDay.Sunday || day === WeekDay.Saturday? true: false 
}

