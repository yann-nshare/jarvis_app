import Professional from '../entities/Professional'

//Create pro
export async function create_pro(username:string, password:string, email:string, service:string): Promise<Professional> {
    const pro = new Professional();
    pro.Username = username;
    pro.Password = password;
    pro.Email = email;
    pro.Service = service;
    return pro.save();
}

// Read user

export async function get_pro(username:string) : Promise<Professional> {
    const pro = await Professional.findOne({Username: username})
    return pro;
}