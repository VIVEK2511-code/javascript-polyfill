function wait(second){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), second * 1000);
    });
}


wait(10)
  .then(() => console.log('promises resolved after 10sec'))
  .catch(() => console.log('rejected after 10sec'))
  .finally(() => console.log('mai toh har baar chalunga'))
