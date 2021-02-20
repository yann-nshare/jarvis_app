import Client from '../entities/Client'

//Create a client
export async function create_client(username:string, password:string, email:string): Promise<Client> {
    const client = new Client();
    client.password = password;
    client.username = username;
    client.email = email;
    client.abonnement = false;
    return client.save();
}

export async function update_client(username:string,which:string,tochange:string) : Promise<Client> {
    const client = await Client.find({username: username})
    return; //client.save();
}
//Udate a client

//Get a client

//Delete a client
export async function delete_client() {
    return
}