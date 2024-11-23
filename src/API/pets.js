import instance from "./index";

async function getAllPets() {
    const response = await instance.get("https://pets-react-query-backend.eapi.joincoded.com/pets")
    console.log(response);
    return response;
}
async function getPetById(id) {
    const response = await instance.get(`https://pets-react-query-backend.eapi.joincoded.com/pets/${id}`)
    console.log(response);
    return response; 
}
async function addPet(data) {
    const response = await instance.post("https://pets-react-query-backend.eapi.joincoded.com/pets", data)
    console.log("addPet", response);
    return response;
}
async function deletePet(id) {
    const response = await instance.delete(`https://pets-react-query-backend.eapi.joincoded.com/pets/${id}`)
    console.log("deletePet", response);
    return response;
}
export { getAllPets, getPetById, addPet, deletePet};