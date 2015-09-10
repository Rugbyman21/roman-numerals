describe("romanNumerals", function() {
  it("returns II for 2", function() {
    expect(romanNumerals(2)).to.equal("II");
  });

  it("returns IV for four", function(){
    expect(romanNumerals(4)).to.equal("IV");
  });

  it("returns IX for 9", function(){
    expect(romanNumerals(9)).to.equal("IX");
  });

  it("returns XV for 15", function() {
    expect(romanNumerals(15)).to.equal("XV");
  });

  it("returns XXIX for 29", function() {
    expect(romanNumerals(29)).to.equal("XXIX");
  });

  it("returns LXXIX for 79", function() {
    expect(romanNumerals(79)).to.equal("LXXIX");
  });

  it("returns L for 50", function() {
    expect(romanNumerals(50)).to.equal("L");
  });

  it("returns XLIX for 49", function() {
    expect(romanNumerals(49)).to.equal("XLIX");
  });

  it("returns XCIX for 99", function() {
    expect(romanNumerals(99)).to.equal("XCIX");
  });

  it("returns CCXXXIX for 239", function() {
    expect(romanNumerals(239)).to.equal("CCXXXIX");
  });

  it("returns DCCCXCIX for 899", function() {
    expect(romanNumerals(899)).to.equal("DCCCXCIX");
  });

});

/*
2 = II (1+1)
4 = IV (5-1)
6 = VI  (5+1)
15 = XV (10+5)
29 = XXIX ((10 + 10 = 20) + (10-1 = 9) = 29)
49 = XLIX ((50 - 10 = 40) + (10 - 1 = 9) = 49)
99 = XCIX ((100 - 10 = 90) + (10 -1 = 9) = 99)
239 = CCXXXIX ((100 + 100 = 200) + (10 + 10 + 10 = 30) + (10 - 1 = 9) = 239)
899 = DCCCXCIX ((500) + (100 + 100 + 100 = 300) + (100 - 10 = 90) + (10 - 1 = 9) = 899 )
999 = CMXCIX
1049 = MXLIX
2099 = MMXCIX
3999 = MMMCMXCIX ((1000 + 1000 + 1000 = 3000) + (1000 - 100 = 900) + (100 - 10 = 90) + (10 -1 = 9) = 3999)
*/
