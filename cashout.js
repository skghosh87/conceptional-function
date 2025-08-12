function cashOut(money) {
  if (money < 0 || typeof money !== "number") {
    return "Invalid";
  }
  let charge = money * (1.75 / 100);
  //   let fixedcharge = charge.toFixed(2);
  //   let finalcharge = parseFloat(fixedcharge);
  return charge;
}
console.log(cashOut("mewauu"));
