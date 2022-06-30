import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController{
    constructor(
        private createUserUseCase: CreateUserUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const {name, email, password} = request.body;

        try {
            await this.createUserUseCase.execute({
                name,
                email,
                password
            })
            
        } catch (error) {
            console.log(error)
            
        }
        
    }
        
   
} 