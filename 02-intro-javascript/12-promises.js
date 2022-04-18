/* How To Deal With Asynchronous Tasks */
// callbacks
// Promises
// Async Await

/* Promise States */
// Pending
// Fulfilled
// Rejected
// Setteled

const data = [
    { firstName: 'Almog', lastName: 'Gutin', email: 'a@a.com', age: 19 },
    { firstName: 'Ido', lastName: 'Gutin', email: 'b@a.com', age: 35 },
    { firstName: 'Amit', lastName: 'Golan-Gutin', email: 'c@a.com', age: 33 },
];
const status = 200;

const getData = () => {
    return new Promise((resolve, reject) => {
        if (status === 200) {
            resolve({ status: status, data: data });
        } else {
            reject({ status: status, errorMessage: 'Something went wrong!' });
        }
    });
};

getData()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
