import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider,
    ){}

    async execute(data: ICreateUserRequestDTO){
      const userExiste = await this.usersRepository.findByEmail(data.email);
      if (userExiste) {
        throw new Error("Usuário já existe");
      }
      const user = new User(data);
      await this.usersRepository.save(user);


      this.mailProvider.sendMail({
        to: {
          name: data.name,
          email: data.email,
        },
        from: {
          name: "Equipe da SAP",
          email: "emailsap@sap.gov.br"
        },

        subject: 'Seja bem vindo',
        body: '<p>Você já pode fazer login na plataforma<p>'
      })
        
    }
}