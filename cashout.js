function cashOut(money) {
  if (money < 0 || typeof money !== "number") {
    return "Invalid";
  }
  let charge = money * (1.75 / 100);
  let fixedcharge = charge.toFixed(4);
  let finalcharge = parseFloat(fixedcharge);
  return finalcharge;
}
console.log(cashOut(999));
