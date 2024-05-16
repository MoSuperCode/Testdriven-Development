function findSpaceship(map) {
  if (typeof map !== "string") {
    return "no String";
  }
  let result = map.includes("x") ? "x found" : map.length;

  return result;
}
