// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n. A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
// For n = 2, the output should be solution(n) = 5; 
// For n = 3, the output should be solution(n) = 13.
// For n = 4, the output should be solution(n) = 25.

solution = (n) => {
    // set area to 1 to match the n=1 polygon. Just one square. We want to return this area at the end of the function.
    let area = 1;

    for (let i = 1; i < n; i++) {
        area += 4 * i;
    }

    console.log(area);
    return area;
}

solution(5);