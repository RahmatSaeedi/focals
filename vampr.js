class Vamper {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offsprings = [];
    this.creator = null;
  }


  set creator(creator) {
    creator = creator instanceof Vamper ? creator : {};
    this._creator = creator;
  }

  // sets the year a vampire was converted into a vampire
  set yearConverted(year) {
    year = typeof(year) === 'number' ? year : null;
    this._year = year;
  }

  set name(name) {
    name = typeof(name) === 'string' ? name : '';
    this._name = name;
  }

  get creator() {
    return this._creator;
  }

  get yearConverted() {
    return this._yearConverted;
  }

  get name() {
    return this._name;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffsprings() {
    return this.offsprings.length;
  }

  // Number of vampires to the original vampire
  get youthfulness() {
    let n = 0;
    let currentVampire = this;
    while (currentVampire.creator !== null) {
      currentVampire = this.creator;
      n++;
    }
    return n;
  }

  // Adds the vampire as an offspring of this vampire
  addOffsprings(offspring) {
    offspring = offspring instanceof Vamper ? offspring : {};
    this.offsprings.push(offspring);
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    vampire = vampire instanceof Vamper ? vampire : {};
    return this.youthfulness <= vampire.youthfulness;
  }

  // Returns the closest common ancestor of two vampires
  closestCommonAncestor(vampire) {
    vampire = vampire instanceof Vamper ? vampire : {};

    let yOfMe = this.youthfulness;
    let yOfThem = vampire.youthfulness;

    let myAncestor = this;
    let theirAncestor = vampire;

    if (yOfMe > yOfThem) {
      let n = yOfMe - yOfThem;
      while (n > 0) {
        myAncestor = myAncestor.creator;
        n--;
      }
    } else if (yOfThem > yOfMe) {
      let n = yOfThem - yOfMe;
      while (n > 0) {
        theirAncestor = theirAncestor.creator;
        n--;
      }
    }

    while (myAncestor !== theirAncestor && (myAncestor !== {} && theirAncestor !== {})) {
      myAncestor = myAncestor.creator;
      theirAncestor = theirAncestor.creator;
    }

    if (myAncestor === theirAncestor) {
      return myAncestor;
    } else {
      console.log('Something went wrong!');
      return {};
    }

  }
}