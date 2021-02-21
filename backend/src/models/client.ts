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

//Update the abo of a client to true
export async function yes_abo(username:string) : Promise<Client> {
    const client = await Client.findOne({username: username})
    if (client.abonnement == false)
        client.abonnement = true
    return client.save();
}
//Update the abo of a client to false
export async function no_abo(username:string) : Promise<Client> {
    const client = await Client.findOne({username: username})
    if (client.abonnement == true)
        client.abonnement = false
    return client.save();
}

//Get a client (Read client)

export async function get_client(username:string) : Promise<Client> {
    const client = await Client.findOne({username: username})
    return client;
}

//Delete a client
export async function delete_client() {
    return
}