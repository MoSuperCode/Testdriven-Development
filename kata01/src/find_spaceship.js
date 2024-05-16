function findSpaceship(map) {
  if (typeof map !== "string") {
    return "no String";
  }
  let result = map.includes("x") ? "x found" : "Spaceship lost forever";

  return result;
}
