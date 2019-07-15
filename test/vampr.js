const chai = require("chai");
const expect = chai.expect;

const Vampire = require("../vampr");


describe("Vampire", () => {
  
  let rootVampire;
  beforeEach(() =>{
    rootVampire = new Vampire("root");
  });

  describe("addOffspring", () => {
    let offspring1, offspring2;

    beforeEach(() => {
      offspring1 = new Vampire("andrew");
      offspring2 = new Vampire("sarah");
      rootVampire.addOffspring(offspring1);
      rootVampire.addOffspring(offspring2);
    });

    it("should get added to offsprings", () =>{
      //console.log(rootVampire);
      expect(rootVampire.offsprings[0]).to.equal(offspring1);
      expect(rootVampire.offsprings[1]).to.equal(offspring2);
    });

    it("should add parent as the creator", () => {
      expect(offspring1.creator).to.equal(rootVampire);
      expect(offspring2.creator).to.equal(rootVampire);
    });
  });

  describe("numberOfOffsprings", () => {
    it("should get the correct number of offsprings", () => {
      expect(rootVampire.numberOfOffsprings).to.equal(0);
      rootVampire.addOffspring(new Vampire());
      expect(rootVampire.numberOfOffsprings).to.equal(1);
      rootVampire.addOffspring(new Vampire());
      rootVampire.addOffspring(new Vampire());
      rootVampire.addOffspring(new Vampire());
      rootVampire.addOffspring(new Vampire());
      rootVampire.addOffspring(new Vampire());
      expect(rootVampire.numberOfOffsprings).to.equal(6);
    });
  });

  describe("youthfulness", () => {
    let offspring1, offspring2, offspring3, offspring4, offspring5;
    beforeEach(() => {
      offspring1 = new Vampire();
      offspring2 = new Vampire();
      offspring3 = new Vampire();
      offspring4 = new Vampire();
      offspring5 = new Vampire();

      rootVampire.addOffspring(offspring1);
      offspring1.addOffspring(offspring2);
      offspring2.addOffspring(offspring3);
      offspring3.addOffspring(offspring4);
      offspring4.addOffspring(offspring5);
    });

    it("root should be 0 from original", () => {
      expect(rootVampire.youthfulness).to.equal(0);
    });

    it("offspring1 should be 1 from original", () => {
      expect(offspring1.youthfulness).to.equal(1);
    });

    it("offspring2 should be 2 from original", () => {
      expect(offspring2.youthfulness).to.equal(2);
    });

    it("offspring3 should be 3 from original", () => {
      expect(offspring3.youthfulness).to.equal(3);
    });

    it("offspring4 should be 4 from original", () => {
      expect(offspring4.youthfulness).to.equal(4);
    });

    it("offspring5 should be 5 from original", () => {
      expect(offspring5.youthfulness).to.equal(5);
    });
  });

  describe("isMoreSeniorThan", () => {
    let offspring1, offspring2, offspring3, offspring4, offspring5;
    beforeEach(() => {
      offspring1 = new Vampire();
      offspring2 = new Vampire();
      offspring3 = new Vampire();
      offspring4 = new Vampire();
      offspring5 = new Vampire();

      rootVampire.addOffspring(offspring1);
      offspring1.addOffspring(offspring2);
      offspring2.addOffspring(offspring3);
      offspring3.addOffspring(offspring4);
      offspring4.addOffspring(offspring5);
    });

    it("should return true when called on root vampire", () => {
      expect(rootVampire.isMoreSeniorThan(offspring1)).to.equal(true);
      expect(rootVampire.isMoreSeniorThan(offspring2)).to.equal(true);
      expect(rootVampire.isMoreSeniorThan(offspring3)).to.equal(true);
      expect(rootVampire.isMoreSeniorThan(offspring4)).to.equal(true);
      expect(rootVampire.isMoreSeniorThan(offspring5)).to.equal(true);
    });

    it("should return false when called with root vampire", () => {
      expect(offspring1.isMoreSeniorThan(rootVampire)).to.equal(false);
      expect(offspring2.isMoreSeniorThan(rootVampire)).to.equal(false);
      expect(offspring3.isMoreSeniorThan(rootVampire)).to.equal(false);
      expect(offspring4.isMoreSeniorThan(rootVampire)).to.equal(false);
      expect(offspring5.isMoreSeniorThan(rootVampire)).to.equal(false);
    });

    it("should return true when a vampire is more senior", () => {
      expect(offspring3.isMoreSeniorThan(offspring4)).to.equal(true);
    });
    
    it("should return false when a vampire is not more senior", () => {
      expect(offspring4.isMoreSeniorThan(offspring3)).to.equal(false);
    });
  });

  describe("closestCommonAncestor", () => {
    let offspring1, offspring2, offspring3, offspring4, offspring5, offspring6, offspring7, offspring8;
    beforeEach(() => {
      offspring1 = new Vampire("a");
      offspring2 = new Vampire("b");
      offspring3 = new Vampire("c");
      offspring4 = new Vampire("d");
      offspring5 = new Vampire("e");
      offspring6 = new Vampire("f");
      offspring7 = new Vampire("g");
      offspring8 = new Vampire("h");

      rootVampire.addOffspring(offspring1);
      rootVampire.addOffspring(offspring2);
      rootVampire.addOffspring(offspring3);
      offspring3.addOffspring(offspring4);
      offspring3.addOffspring(offspring5);
      offspring5.addOffspring(offspring6);
      offspring6.addOffspring(offspring7);
      offspring2.addOffspring(offspring8);
    });

    it("should be the root vampire for any vampire and the root vampire", () => {
      expect(rootVampire.closestCommonAncestor(offspring2).name).to.equal(rootVampire.name);
      expect(rootVampire.closestCommonAncestor(offspring7).name).to.equal(rootVampire.name);
    });

    it("should be the root vampire for first two offspring", () => {
      expect(offspring1.closestCommonAncestor(offspring2).name).to.equal(rootVampire.name);
    });

    it("should be offspring 3 for offspring 4 and 7", () => {
      expect(offspring4.closestCommonAncestor(offspring7).name).to.equal(offspring3.name);
      expect(offspring7.closestCommonAncestor(offspring4).name).to.equal(offspring3.name);
    });

    it("should be that vampire if same vampire is used", () => {
      expect(offspring4.closestCommonAncestor(offspring4).name).to.equal(offspring4.name);
    });

    it("should be the more senior vampire if a direct ancestor is used", () => {
      expect(offspring6.closestCommonAncestor(offspring7).name).to.equal(offspring6.name);
      expect(offspring7.closestCommonAncestor(offspring6).name).to.equal(offspring6.name);
    });

    it("should be root for offspring 8 and offspring 7", () => {
      expect(offspring7.closestCommonAncestor(offspring8).name).to.equal(rootVampire.name);
      expect(offspring8.closestCommonAncestor(offspring7).name).to.equal(rootVampire.name);
    });
  });

  describe("totalNumberOfDescendents", () => {
    let rootVampire, offspring1, offspring2, offspring3, offspring4, offspring5, offspring6, offspring7, offspring8;
    beforeEach(() => {
      rootVampire = new Vampire("root");
      offspring1 = new Vampire("a");
      offspring2 = new Vampire("b");
      offspring3 = new Vampire("c");
      offspring4 = new Vampire("d");
      offspring5 = new Vampire("e");
      offspring6 = new Vampire("f");
      offspring7 = new Vampire("g");
      offspring8 = new Vampire("h");
      
      rootVampire.addOffspring(offspring1);
      rootVampire.addOffspring(offspring2);
      rootVampire.addOffspring(offspring3);
      offspring3.addOffspring(offspring4);
      offspring3.addOffspring(offspring5);
      offspring5.addOffspring(offspring6);
      offspring6.addOffspring(offspring7);
      offspring2.addOffspring(offspring8);
    });

    it("should return 8 for the rootVampire", () => {
      expect(rootVampire.totalNumberOfDescendents).to.equal(8);
    });

    it("should return 0 for the vamprire without descendents", () => {
      expect(offspring1.totalNumberOfDescendents).to.equal(0);
      expect(offspring8.totalNumberOfDescendents).to.equal(0);
      expect(offspring4.totalNumberOfDescendents).to.equal(0);
      expect(offspring7.totalNumberOfDescendents).to.equal(0);
    });
  });
});