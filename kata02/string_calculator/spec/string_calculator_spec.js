describe("Electrons around the World", function () {
  beforeEach(function () {
    elektrons = new electroAroundTheWorld();
  });

  it("should return 6 for this input: [ 1, 2, 3, 4, 5 ]", function () {
    const result = elektrons.add([1, 2, 3, 4, 5]);
    expect(result).toEqual(6);
  });

  it("should return 4 for this input: [ 2, 2, 3, 3 ]", function () {
    const result = elektrons.add([2, 2, 3, 3]);
    expect(result).toEqual(4);
  });
  it("should return 2 for this input: [ 6, 6, 4, 4, 1, 3 ]", function () {
    const result = elektrons.add([6, 6, 4, 4, 1, 3]);
    expect(result).toEqual(2);
  });
  it("should return 12 for this input: [ 3, 5, 3, 5, 4, 2 ]", function () {
    const result = elektrons.add([3, 5, 3, 5, 4, 2]);
    expect(result).toEqual(12);
  });
});
