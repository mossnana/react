const choice = arr => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  console.log(randomIndex);
  return arr[randomIndex];
};

export default choice;
