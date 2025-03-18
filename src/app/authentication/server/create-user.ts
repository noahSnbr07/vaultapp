"use server";

/**
 * @param formData: FormData
 */
export default async function createUser(formData: FormData) {

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;


    console.log({ email, password });

    // Check whether form data values are valid
    const missingPassword = !password || password.length < 1;
    const missingEmail = !email || email.length < 1;

    console.log({ missingEmail, missingPassword })

}