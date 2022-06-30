import { User } from "../entities/User";

export interface IUsersRepository{
    //antes de criar verifica se ja existe

    findByEmail(email: string): Promise<User>
    save(user: User): Promise<void>;
}