describe("Electrons around the World", function () {
  beforeEach(function () {
    elektrons = new electroAroundTheWorld();
  });

  it("should return 6 for this input: [ 1, 2, 3, 4, 5 ]", function () {
    const result = elektrons.add([1, 2, 3, 4, 5]);
    expect(result).toEqual(6);
  });
});
