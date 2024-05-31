function SeatingStudent(array) {
    if (array.length < 1) return -1;
    let count = 0;
    const [totalSeats, ...occupiedSeats] = array;
    for (let i = 1; i <= totalSeats; i++) {
        if (array.includes(i)) continue;
        if (i % 2 === 0) {
            if ((i + 1) <= totalSeats && !occupiedSeats.includes(i + 2)) { count++; }
        }
        else {
            if ((i + 2) <= totalSeats && !occupiedSeats.includes(i + 1)) {
                count++
            }
            if ((i + 2) <= totalSeats && !occupiedSeats.includes(i + 2) && i < totalSeats) {
                count++
            }
        }
    }
    return count;
}

var array = [8, 1, 8];
console.log(SeatingStudent(array));
