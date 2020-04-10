// tslint:disable-next-line: class-name
export interface task
    {
        id: number ;
        name: string ;
        description: string ;
        CategoryId: number ;
        UserId: number ;
        StadId: number ;
        Category: Category;
        User: {
        id: number;
        name: string;
        lastname: string;
        email: string;
        password: string;
        direction: string;
        TaskId: number;
           };
        Stad: {
        id: number;
        name: string;
        register: string;
        TaskId: number;

        };
      }

export interface Category {
    id: number;
    name: string;
    description: string;
    TaskId: number;
    }
