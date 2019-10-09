import { PersonInfo} from './person';
export class PersonLogic {
  person: PersonInfo;
  persons: Array<PersonInfo>;

  constructor() {
    this.person = new PersonInfo(0, '', '', '', '', '');
    this.persons = new Array();
    this.persons.push(
      new PersonInfo(
        101,
        'Mahesh',
        'Bavdhan',
        'Pune',
        'Maharashtra',
        'Self-Employeed'
      )
    );
    this.persons.push(
      new PersonInfo(
        102,
        'Sachin',
        'Kothrud',
        'Pune',
        'Maharashtra',
        'Employeed'
      )
    );
  }
  getPersonsInfo(): Array<PersonInfo> {
    return this.persons;
  }
  savePersonInfo(per: PersonInfo): Array<PersonInfo>  {
    this.persons.push(per);
    return this.persons;
  }
}
