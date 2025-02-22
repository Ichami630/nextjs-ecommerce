"use server"; //ensures action only runs on server
export async function login(formData: FormData){

    //extract username and password from formData
    const username = formData.get("username");
    const password = formData.get("password");

    if(username === "admin" && password === "password1234"){
        return {success: true}
    }else{
        return {success: false, message: "Invalid login credentials"}
    }
}