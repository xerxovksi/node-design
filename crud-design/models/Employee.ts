export class Employee {
  id: string;
  name: string;
  skills: Array<string>;

  constructor(id: string, name: string, skills: Array<string>) {
    this.id = id;
    this.name = name;
    this.skills = skills;
  }
}
