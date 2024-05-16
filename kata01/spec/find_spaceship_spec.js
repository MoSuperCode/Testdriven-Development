describe("Find Spaceship", function () {
  it('should return string length for "..." ', function () {
    const map = "...";
    const result = findSpaceship(map);
    expect(result).toEqual(3);
  });

  it('should return noString  for "100" ', function () {
    const map = 100;
    const result = findSpaceship(map);
    expect(result).toEqual("no String");
  });
});
