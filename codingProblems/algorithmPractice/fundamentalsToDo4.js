// Only Keep the Last Few
// Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount. Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.

const onlyKeepLastFew = (arr, x) => {
    // Use slice method and set variables for start and (non-inclusive end)
    let start = arr.length - x;
    let end = arr.length;
    arr = arr.slice(start, end);
    console.log(arr);
    return arr;
}
onlyKeepLastFew([2,4,6,8,10],3);
onlyKeepLastFew([1,3,4,5,6,7,8,9], 5);

// *****************************************************************************

// Poor Kenny
// Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.

const whatHappensToday = () => {
    let x = Math.floor((Math.random() * 100) + 1);
    if(x <= 10) {
        console.log("Volcano")
    } else if (x > 10 && x <= 25) {
        console.log("Tsunami")
    } else if (x > 25 && x <= 45) {
        console.log("Earthquake")
    } else if (x > 45 && x<= 70) {
        console.log("Blizzard")
    } else {
        console.log("Meteor")
    }
}
whatHappensToday();

// *****************************************************************************

// What Really Happened?
// Kyle notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive!

const whatReallyHappensToday = () => {
    let x = Math.floor((Math.random() * 100) + 1);
    if (x <= 10) {
        console.log("Volcano");
    }
    let y = Math.floor((Math.random() * 100) + 1);
    if (y <= 15) {
        console.log("Tsunami")
    }
    let z = Math.floor((Math.random() * 100) + 1);
    if (z <= 20) {
        console.log("Earthquake")
    }
    let a = Math.floor((Math.random() * 100) + 1);
    if (a <= 25) {
        console.log("Blizzard")
    }
    let b = Math.floor((Math.random() * 100) + 1);
    if (b <= 30) {
        console.log("Meteor")
    }
}
whatReallyHappensToday();

// *****************************************************************************

// Soaring IQ
// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ?

const increasingIq = (x) => {
    for (let i = 1; i < 99; i++) {
        x += (i/100);
    }
    console.log(x);
    return x;
}
increasingIq(101);

// *****************************************************************************

// Letter Grade
// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".

const letterGrade = (score) => {
    if (score >= 90) {
        console.log("Score: " + score + ". Grade: A");
    } else if (score >= 80) {
        console.log("Score: " + score + ". Grade: B");
    } else if (score >= 70) {
        console.log("Score: " + score + ". Grade: C");
    } else if (score >= 60) {
        console.log("Score: " + score + ". Grade: D");
    } else {
        console.log("You failed. F.");
    }
}
letterGrade(91);
letterGrade(65);
letterGrade(40);
letterGrade(88);
letterGrade(79);

// *****************************************************************************

// More Accurate Grades
// For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .

const accurateGrades = (score) => {
    if (score >= 93) {
        console.log("Score: " + score + ". Grade: A");
    } else if (score >= 90) {
        console.log("Score: " + score + ". Grade: A-");
    } else if (score >= 88) {
        console.log("Score: " + score + ". Grade: B+");
    } else if (score >= 83) {
        console.log("Score: " + score + ". Grade: B");
    } else if (score >= 80) {
        console.log("Score: " + score + ". Grade: B-");
    } else if (score >= 78) {
        console.log("Score: " + score + ". Grade: C+");
    } else if (score >= 73) {
        console.log("Score: " + score + ". Grade: C");
    } else if (score >= 70) {
        console.log("Score: " + score + ". Grade: C-");
    } else if (score >= 68) {
        console.log("Score: " + score + ". Grade: D+");
    } else if (score >= 63) {
        console.log("Score: " + score + ". Grade: D");
    } else if (score >= 60) {
        console.log("Score: " + score + ". Grade: D-");
    } else {
        console.log("You failed. F.");
    }
}
accurateGrades(92);
accurateGrades(89);
accurateGrades(79);
accurateGrades(75);
accurateGrades(71);
accurateGrades(85);
accurateGrades(68);
accurateGrades(60);