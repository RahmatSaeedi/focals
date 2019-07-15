class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this._boss = null;
    this._subordinates  = [];
  }

  set name(name) {
    name = typeof(name) === 'string' ? name : '';
    this._name = name;
  }

  set title(title) {
    title = typeof(title) === 'string' ? title : '';
    this._title = title;
  }

  set salary(salary) {
    salary = typeof(salary) === 'number' ? salary : false;
    this._salary = salary;
  }

  set boss(boss) {
    boss = typeof(boss) === 'object' ? boss : {};
    this._boss = boss;
  }

  set addSubordinates(sub) {
    sub = typeof(sub) === 'object' ? sub : {};
    this._subordinates.push(sub);
    sub.boss = this;
  }

  get name() {
    return this._name;
  }

  get title() {
    return this._title;
  }

  get salary() {
    return this._salary;
  }

  get boss() {
    return this._boss;
  }

  get subordinates() {
    return this._subordinates;
  }

  get numSubordinates() {
    return this._subordinates.length;
  }

  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let employee = this;
    while (employee.boss !== null) {
      numberOfPeople ++;
      employee = employee.boss;
    }
    return numberOfPeople;
  }

  sameBoss(employee) {
    return this.boss === employee.boss;
  }
}

const ada = new Employee("Ada", "CEO", 3000000.00);
const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);
const jennifer     = new Employee("Jennifer", "Assitant VP Marketing", 100000);
const johnny     = new Employee("Johnny", "Receptionist", 10000);
const jones     = new Employee("Jones", "Delivery", 1000);
const jenny    = new Employee("Jenny", "CO-OP student", 100);
const john    = new Employee("John", "Me", 10);

ada.addSubordinates = craig;
ada.addSubordinates = arvinder;
ada.addSubordinates = angela;
ada.addSubordinates = phil;
phil.addSubordinates = jennifer;
jennifer.addSubordinates = johnny;
johnny.addSubordinates = jones;
jones.addSubordinates = jenny;
jenny.addSubordinates = john;

console.log(ada, phil, jennifer);