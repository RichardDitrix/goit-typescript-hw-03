

class Employee {
  constructor(
    public name: string,
    private department: string,
    protected salary: number,
  ) {
	 this.salary = salary;
    this.name = name;
    this.department = department;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
}

export {};
