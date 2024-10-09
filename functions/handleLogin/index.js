
import { signIn } from "next-auth/react";
export const handleLogin = async (email, password) => {
    const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
    });
}