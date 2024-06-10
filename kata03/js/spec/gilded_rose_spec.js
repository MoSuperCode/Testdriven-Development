describe("Gilded Rose", function () {
  it("should foo", function () {
    items = [new Item("foo", 0, 0)];
    update_quality();
    expect(items[0].name).toEqual("foo");
  });
  it("should test all items, if they are correctly inputed", function () {
    items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Conjured Mana Cake", 3, 6),
    ];
    expect(items[0].name).toEqual("+5 Dexterity Vest");
    expect(items[1].name).toEqual("Aged Brie");
    expect(items[2].name).toEqual("Elixir of the Mongoose");
    expect(items[3].name).toEqual("Sulfuras, Hand of Ragnaros");
    expect(items[4].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(items[5].name).toEqual("Conjured Mana Cake");

    expect(items[0].sell_in).toEqual(10);
    expect(items[1].sell_in).toEqual(2);
    expect(items[2].sell_in).toEqual(5);
    expect(items[3].sell_in).toEqual(0);
    expect(items[4].sell_in).toEqual(15);
    expect(items[5].sell_in).toEqual(3);

    expect(items[0].quality).toEqual(20);
    expect(items[1].quality).toEqual(0);
    expect(items[2].quality).toEqual(7);
    expect(items[3].quality).toEqual(80);
    expect(items[4].quality).toEqual(20);
    expect(items[5].quality).toEqual(6);
  });
  it("should degrade normal items before sell date", function () {
    update_quality();
    expect(items[0].quality).toEqual(19);
    expect(items[0].sell_in).toEqual(9);
  });
  it("should degrade normal items twice as fast after sell date", function () {
    items[2].sell_in = 0;
    update_quality();
    expect(items[2].quality).toEqual(4);
    expect(items[2].sell_in).toEqual(-1);
  });
  it("should not degrade quality below 0", function () {
    items[0].quality = 0;
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

  it("should increase quality of Aged Brie over time", function () {
    update_quality();
    expect(items[1].quality).toEqual(1);
  });
});
