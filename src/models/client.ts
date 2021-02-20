import Client from '../entities/Client'

//Create a client
export async function create_client(username:string, password:string): Promise<Client> {
    const client = new Client();
    client.password = password;
    client.username = username;
    return client.save();
}

//Update a client

//Get a client

//Delete a client
export async function delete_client() {
    return
}