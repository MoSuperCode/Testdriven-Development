describe("Find Spaceship", function () {
  it('should return string length for "..." ', function () {
    const map = "...";
    const result = findSpaceship(map);
    expect(result).toEqual(3);
  });

  it('should return "no String" for "100" ', function () {
    const map = 100;
    const result = findSpaceship(map);
    expect(result).toEqual("no String");
  });
  it('should return "x found" for "..x.." ', function () {
    const map = "..x..";
    const result = findSpaceship(map);
    expect(result).toEqual("no String");
  });
});
