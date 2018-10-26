const fetchData = () => {
  const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('Done');
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log('Timer finished!');
  fetchData().then(text => {
    console.log(text);
    return fetchData();
  })
  .then(text2 => {
    console.log(text2);
    return fetchData();
  })
  .then(text3 => {
    console.log(text3);
  });
}, 2000);








// const fetchData = callBack => {
//   setTimeout(() => {
//     callBack('Done');
//   }, 1500);
// };

// setTimeout(() => {
//   console.log('Timer finished!');
//   fetchData(text => {
//     console.log(text);
//   })
// }, 2000);

// console.log('I am here!');
// console.log('I am next');