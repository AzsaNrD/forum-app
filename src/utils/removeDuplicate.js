function removeDuplicate(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

export default removeDuplicate;
