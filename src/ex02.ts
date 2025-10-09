// Exercise: Create an enum `DaysOfWeek` with values for each day of the week.
// Then, write a function `isWeekend` that accepts a value from the enum and returns `true` if it's Saturday or Sunday, and `false` otherwise.

enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  
  function isWeekend(day: DaysOfWeek): boolean {
    return day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday;
  }
  
  console.log(isWeekend(DaysOfWeek.Saturday));  // true
  console.log(isWeekend(DaysOfWeek.Wednesday)); // false
  