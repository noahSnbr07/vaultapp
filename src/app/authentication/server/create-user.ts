"use server";

import ActionRespose from "@/app/types/ActionResponse";

/**
 * @param formData: FormData
 */
export default async function createUser(formData: FormData): Promise<ActionResponse> | null {

    const email = formData.get("email");
    const password = formData.get("password");

    // Ensure both email and password are strings
    if (typeof email !== 'string' || typeof password !== 'string') {
        return {
            success: false,
            status: 400,
            title: "Invalid Form Data",
            description: "Email and password must be strings.",
        } as ActionRespose;
    }

    console.log({ email, password });

    // Check whether form data values are valid
    const missingPassword = !password || password.length < 1;
    const missingEmail = !email || email.length < 1;

    if (missingEmail || missingPassword) {
        return {
            success: false,
            status: 400,
            title: "Invalid Form Data",
            description: "Both email and password are required.",
        } as ActionRespose;
    }

    try {
        console.log("User data is valid, proceeding with creation...");

        return {
            success: true,
            status: 200,
            title: "Successful Operation",
            description: "User created successfully.",
        };

    } catch (error: unknown) {
        if (error instanceof Error) {
            return {
                success: false,
                status: 500,
                title: "Internal Server Error",
                description: error.message,
            };
        }

        return {
            success: false,
            status: 500,
            title: "Unknown Server Error",
            description: "An unknown error occurred.",
        };
    }
}
