interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  salary: number;
  hireDate: Date;
}

const mockEmployees: Employee[] = [
  { id: 1, firstName: 'John', lastName: 'Doe', department: 'HR', salary: 50000, hireDate: new Date('2022-01-15') },
  { id: 2, firstName: 'Jane', lastName: 'Smith', department: 'Engineering', salary: 75000, hireDate: new Date('2021-03-10') },
  { id: 3, firstName: 'Bob', lastName: 'Johnson', department: 'Finance', salary: 60000, hireDate: new Date('2022-02-28') },
  { id: 4, firstName: 'Alice', lastName: 'Brown', department: 'Marketing', salary: 55000, hireDate: new Date('2021-06-20') },
  { id: 5, firstName: 'Eva', lastName: 'White', department: 'Engineering', salary: 72000, hireDate: new Date('2022-04-05') },
  { id: 6, firstName: 'David', lastName: 'Lee', department: 'Finance', salary: 61000, hireDate: new Date('2021-08-14') },
  { id: 7, firstName: 'Emily', lastName: 'Taylor', department: 'HR', salary: 52000, hireDate: new Date('2022-03-25') },
  { id: 8, firstName: 'Michael', lastName: 'Clark', department: 'Marketing', salary: 58000, hireDate: new Date('2022-01-05') },
  { id: 9, firstName: 'Olivia', lastName: 'Adams', department: 'Engineering', salary: 73000, hireDate: new Date('2021-11-30') },
  { id: 10, firstName: 'Sophia', lastName: 'Wilson', department: 'Finance', salary: 59000, hireDate: new Date('2022-05-10') },
  { id: 11, firstName: 'William', lastName: 'Moore', department: 'HR', salary: 54000, hireDate: new Date('2022-02-15') },
  { id: 12, firstName: 'Liam', lastName: 'Robinson', department: 'Engineering', salary: 71000, hireDate: new Date('2021-04-22') },
  { id: 13, firstName: 'Benjamin', lastName: 'Harris', department: 'Finance', salary: 62000, hireDate: new Date('2022-03-08') },
  { id: 14, firstName: 'Ava', lastName: 'Perez', department: 'Marketing', salary: 57000, hireDate: new Date('2021-07-12') },
  { id: 15, firstName: 'Mia', lastName: 'Gonzalez', department: 'Engineering', salary: 71000, hireDate: new Date('2022-05-25') },
  { id: 16, firstName: 'James', lastName: 'Brown', department: 'Finance', salary: 63000, hireDate: new Date('2021-09-18') },
  { id: 17, firstName: 'Lucas', lastName: 'Lopez', department: 'HR', salary: 53000, hireDate: new Date('2022-01-30') },
  { id: 18, firstName: 'Henry', lastName: 'Jackson', department: 'Marketing', salary: 59000, hireDate: new Date('2021-11-15') },
  { id: 19, firstName: 'Sophia', lastName: 'Thomas', department: 'Engineering', salary: 71000, hireDate: new Date('2022-06-10') },
  { id: 20, firstName: 'Olivia', lastName: 'Hill', department: 'Finance', salary: 64000, hireDate: new Date('2021-08-04') },
  { id: 21, firstName: 'Alexander', lastName: 'White', department: 'HR', salary: 55000, hireDate: new Date('2022-02-28') },
  { id: 22, firstName: 'William', lastName: 'Clark', department: 'Engineering', salary: 70000, hireDate: new Date('2021-12-15') },
  { id: 23, firstName: 'Charlotte', lastName: 'Walker', department: 'Finance', salary: 65000, hireDate: new Date('2022-05-20') },
  { id: 24, firstName: 'Evelyn', lastName: 'Lewis', department: 'Marketing', salary: 60000, hireDate: new Date('2021-10-10') },
  { id: 25, firstName: 'Ella', lastName: 'Young', department: 'Engineering', salary: 72000, hireDate: new Date('2022-03-01') },
  { id: 26, firstName: 'Lucas', lastName: 'Perez', department: 'Finance', salary: 66000, hireDate: new Date('2021-07-25') },
  { id: 27, firstName: 'James', lastName: 'Turner', department: 'HR', salary: 56000, hireDate: new Date('2022-01-12') },
  { id: 28, firstName: 'Michael', lastName: 'Hall', department: 'Marketing', salary: 61000, hireDate: new Date('2021-09-08') },
  { id: 29, firstName: 'Ava', lastName: 'Martinez', department: 'Engineering', salary: 73000, hireDate: new Date('2022-06-18') },
  { id: 30, firstName: 'Olivia', lastName: 'Garcia', department: 'Finance', salary: 67000, hireDate: new Date('2021-11-30') },
  { id: 31, firstName: 'Emma', lastName: 'Rodriguez', department: 'HR', salary: 57000, hireDate: new Date('2022-02-10') },
  { id: 32, firstName: 'Isabella', lastName: 'Smith', department: 'Engineering', salary: 71000, hireDate: new Date('2021-05-22') },
  { id: 33, firstName: 'Mia', lastName: 'Davis', department: 'Finance', salary: 68000, hireDate: new Date('2022-04-05') },
  { id: 34, firstName: 'Sophia', lastName: 'Moore', department: 'Marketing', salary: 62000, hireDate: new Date('2021-08-30') },
  { id: 35, firstName: 'Liam', lastName: 'Johnson', department: 'Engineering', salary: 74000, hireDate: new Date('2022-03-15') },
  { id: 36, firstName: 'Benjamin', lastName: 'Brown', department: 'Finance', salary: 69000, hireDate: new Date('2021-12-01') },
  { id: 37, firstName: 'Charlotte', lastName: 'Taylor', department: 'HR', salary: 58000, hireDate: new Date('2022-01-02') },
  { id: 38, firstName: 'William', lastName: 'Harris', department: 'Marketing', salary: 63000, hireDate: new Date('2021-09-16') },
  { id: 39, firstName: 'James', lastName: 'Martinez', department: 'Engineering', salary: 75000, hireDate: new Date('2022-05-28') },
  { id: 40, firstName: 'Evelyn', lastName: 'Gonzalez', department: 'Finance', salary: 70000, hireDate: new Date('2021-11-12') },
  { id: 41, firstName: 'Lucas', lastName: 'Lopez', department: 'HR', salary: 59000, hireDate: new Date('2022-02-18') },
  { id: 42, firstName: 'Ava', lastName: 'Lee', department: 'Engineering', salary: 76000, hireDate: new Date('2021-06-08') },
  { id: 43, firstName: 'William', lastName: 'Jackson', department: 'Finance', salary: 71000, hireDate: new Date('2022-03-25') },
  { id: 44, firstName: 'Ella', lastName: 'Williams', department: 'Marketing', salary: 64000, hireDate: new Date('2021-10-05') },
  { id: 45, firstName: 'Mia', lastName: 'Anderson', department: 'Engineering', salary: 77000, hireDate: new Date('2022-06-15') },
  { id: 46, firstName: 'Henry', lastName: 'Thomas', department: 'Finance', salary: 72000, hireDate: new Date('2022-01-20') },
  { id: 47, firstName: 'Sophia', lastName: 'Wilson', department: 'HR', salary: 60000, hireDate: new Date('2022-02-08') },
  { id: 48, firstName: 'Olivia', lastName: 'Garcia', department: 'Marketing', salary: 65000, hireDate: new Date('2021-09-12') },
  { id: 49, firstName: 'Lucas', lastName: 'Brown', department: 'Engineering', salary: 78000, hireDate: new Date('2022-04-20') },
  { id: 50, firstName: 'James', lastName: 'Smith', department: 'Finance', salary: 73000, hireDate: new Date('2021-11-28') },
];

export default mockEmployees;
