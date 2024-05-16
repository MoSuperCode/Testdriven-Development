describe("Find Spaceship", function () {
  it('should return string length for "..." ', function () {
    const map = "...";
    const result = findSpaceship(map);
    expect(result).toEqual(3);
  });
});
