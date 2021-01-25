export interface MyStudent {
    id?: number;
    name: string;
    surname: string;
    patronymic:string;
    phone: string;
    email:string;
    birthday: string;
    group: string;
    type: number;
  }

  export enum MyStudentType {
    IT,
    design,
    history,
    lawyers
  }
