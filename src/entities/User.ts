import { uuid } from 'uuidv4';

export class User {
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;
    
    //construir usuario já com id.. sempre..
    // instalar uuid pra gerar id 
    constructor(props: Omit<User, 'id'>, id?: string){
        if(!id){
            this.id = uuid();
        }
    }
}