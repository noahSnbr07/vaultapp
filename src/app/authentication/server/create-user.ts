"use server";

export default async function createUser(formData: FormData) {

    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ email, password });

}