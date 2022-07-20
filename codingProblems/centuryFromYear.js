// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
// For year = 1905, the output should be 20.
// For year = 1700, the output should be 17.

solution = (year) => {
    // round the year divided by 100 UP to the nearest integer
    console.log(Math.ceil(year/100));
    return Math.ceil(year/100);
}

solution(1905);
solution(1700);