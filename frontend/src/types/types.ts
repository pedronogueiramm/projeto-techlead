export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: number;
  }

  export type Book = {
    id: number;
    name: string;
    detail: string;
    releaseDate: string;
    active: boolean;
    user: User;
}

export type BookPage = {
    content?: Book[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}