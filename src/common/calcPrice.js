const calcPrice = (days=1, persons=1) => {
  return (days === 1) ? persons * 10000 : persons * days * 10000;
};

export default calcPrice;
