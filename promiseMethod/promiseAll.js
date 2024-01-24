//Promise all wait all fulfillment(Hoan thanh)

const number = 157
const promiseName = Promise.resolve(3)
const time = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1000);
    },3000)
})

Promise.all([number, promiseName, time]).then((values) => {
    console.log(values)
})


const p = Promise.all([1, 2, 3, "5", Promise.resolve(5)])

setTimeout(() => {
    console.log(p)
})


