/*
5. Buatlah rekursive function (return) dengan parameter 
f(times, number) yang dapat mengembalikan nilai array berisikan data number sebanyak times

Contoh:
// f(0,3) -> [ ]
// f(-1,5) -> [ ]
// f(1,4) -> [4]
// f(2,3) -> [3, 3]
// f(5,7) -> [7, 7, 7, 7, 7]

*/


var repeat = function(count, str) {
    var array = [];
    for (var i = 0; i < count;)
        array[i++] = str;
    return array.join();
}
repeat(0, 3)
repeat(-1, 5)
repeat(1, 4)
repeat(2, 3)
repeat(5, 7)