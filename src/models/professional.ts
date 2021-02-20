import Professional from '../entities/Professional'

export async function create_pro(username:string, password:string, email:string): Promise<Professional> {
    const pro = new Professional();
    pro.Username = username;
    pro.Password = password;
    pro.Email = email;
    return pro.save();
}