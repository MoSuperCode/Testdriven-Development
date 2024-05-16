function findSpaceship(map) {
  if (typeof map !== "string") {
    return "no String";
  }
  let result = map.includes("x") ? "x found" : "Spaceship lost forever";

  const rows = map.split("\n").reverse();
  console.log(rows);
  for (i = 0; i < rows.length; i++) {
    const x = rows[i].indexOf("x");

    if (x !== -1) {
      result += `[${rows.length - 1 - i},${x}]`;
    }
  }
  return result;
}
