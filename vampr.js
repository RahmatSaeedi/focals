class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offsprings = [];
    this.creator = null;
  }


  set creator(creator) {
    creator = creator instanceof Vampire ? creator : null;
    this._creator = creator;
  }

  // sets the year a vampire was converted into a vampire
  set yearConverted(year) {
    year = typeof(year) === 'number' ? year : false;
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
    while (currentVampire.creator !== null && n < 8) {
      currentVampire = currentVampire.creator;
      n++;
    }
    return n;
  }

  // Adds the vampire as an offspring of this vampire
  addOffspring(offspring) {
    offspring = offspring instanceof Vampire ? offspring : null;
    this.offsprings.push(offspring);
    offspring.creator = this;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    vampire = vampire instanceof Vampire ? vampire : null;
    return this.youthfulness <= vampire.youthfulness;
  }

  // Returns the closest common ancestor of two vampires
  closestCommonAncestor(vampire) {
    vampire = vampire instanceof Vampire ? vampire : null;
    if (vampire) {
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

      while (myAncestor !== theirAncestor && (myAncestor !== null || theirAncestor !== null)) {
        myAncestor = myAncestor.creator;
        theirAncestor = theirAncestor.creator;
      }

      if (myAncestor === theirAncestor) {
        return myAncestor;
      } else {
        console.log(`Something went wrong! There is no common ancesstors. between ${this.name} and ${vampire.name}`);
        return false;
      }
    } else {
      console.log(`That was not a Vampire. What are you trying to do?`);
    }
  }

  //Count the total number of descendents that a vampire has
  get totalNumberOfDescendents() {
    let n = 0;
    const counter = (vampire) => {
      for (let offspring of vampire.offsprings) {
        n ++;
        counter(offspring);
      }
    };

    counter(this);
    return n;
  }
}


module.exports = Vampire;