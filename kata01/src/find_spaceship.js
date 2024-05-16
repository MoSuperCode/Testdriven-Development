function findSpaceship(map) {
  if (typeof map !== "string") {
    return "no String";
  }
  let result = map.includes("x") ? "x found" : "Spaceship lost forever";

  const rows = map.split("\n").reverse();
  for (let i = 0; i < rows.length; i++) {
    const x = rows[i].indexOf("x");
    if (x !== -1) {
      // -1 zeigt an, dass das Zeichen nicht gefunden wurde, also wurde das x mit seiner position gefunden
      result += `[${i},${x}]`;
    }
  }
  return result;
}
