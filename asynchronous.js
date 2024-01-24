/*
const doSomething = callback => {
    setTimeout(() => {
        const skills = ['HTML','CSS']
        callback(false, skills)
    },0)
    console.log("ABC")
}

const callback = (err, result) => {
    if(err) {
        return console.log(err)
    }
    return console.log(result)
}

doSomething(callback)
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolving an asynchronous request!'), 2000)
  })

  promise
  .then((firstResponse) => {
    return firstResponse + ' And chaining!'
  })
  .then((secondResponse) => {
    console.log(secondResponse)
  })
  .catch(error => console.log(error))

const testPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(""))
})


// Promise có ba trạng thái pending ( đang chờ ), fulfilled ( đã hoàn thành), Rejected ( thất bại)

  const doPromise = async () => {
    return new Promise((resolve, reject) => {
      const skills = ['HTML','CSS','JavaScript','NestJs']
      if(skills.indexOf('NestJs') !== -1)
          resolve(skills)
      else 
          reject("Something wrong has happend")
    })
  }

  const run = async () => {
    try {
      const result = await doPromise()
      console.log(result)
      console.log('ABC')
    }
    catch(err){
      console.error(err)
    }
  }
  run()

*/

const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';


const fetchData = (url) => {
  return new Promise((resolve, reject) => {
      fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Network response was not ok: ${response.status}`);
              }
              return response.json();
          })
          .then(data => {
              resolve(data);
          })
          .catch(error => {
              reject(error);
          });
  });
};
const fetchAllData = () => {
  const promises = []
  promises.push(fetchData(BULBASAUR_POKEMONS_URL))
  promises.push(fetchData(RATICATE_POKEMONS_URL))
  promises.push(fetchData(KAKUNA_POKEMONS_URL))

  return Promise.all(promises)
      .then(results => {
          console.log(results); // Mảng chứa kết quả của tất cả các yêu cầu mạng
      })
      .catch(error => {
          console.error(error); // Xử lý lỗi nếu có
      });
};

fetchAllData();


  /*
//fetch
fetch('https://api.github.com/users/octocat')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })

fetch('https://api.publicapis.org/entries')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })


  const url = 'https://api.thecatapi.com/v1/breeds' // countries api

  //từ khóa async ở đằng trước function => trả về 1 Promise
  //để truy cập giá trị của promise chúng ta dùng await
  const catsName = async () => {
      try 
      {
          const response = await fetch(url)
          const cats = await response.json()
          for(let cat of cats) {
              console.log(`${cat.name} : %c${cat.description} %cWeight:${cat.weight.metric}  `, 'color: rgb(100,100,100)', 'color:aqua'  )
          }
      } catch (err) {
          console.log(err)
      }
  }
  //example value: Weight:  5 - 8 
  const averageWeight = async () => {
      try {
          const response = await fetch(url)
          const cats = await response.json()
          let sumWeightArg = 0, catsLength = cats.length
          for (let cat of cats) {
              let weightFirst = Number(cat.weight.metric[0])
              let weightLast = Number(cat.weight.metric[cat.weight.metric.length -1])
              arg = (weightFirst + weightLast)/2
              sumWeightArg += arg
          }
          console.log("Average Weight: ", (sumWeightArg / catsLength).toFixed(2))
      } catch (err) {
          console.log(err)
      }
  
  }
  





  // Execute 
console.log('===== async and await')
// catsName()
// averageWeight()*/
