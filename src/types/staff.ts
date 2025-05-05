export interface Responsibility {
  [key: string]: string;
}

export interface Division {
  name: string;
  desc: string;
  image: string;
  responsibility: Responsibility;
}

export interface Category {
  name: string;
  divisions: { [divisionName: string]: Division };
}

export interface StaffData {
  [key: string]: Category;
}
