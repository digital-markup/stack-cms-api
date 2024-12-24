import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const authentication = async () => {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/sign-in");
    }
}

export const userCheck = async () => {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return user;
}

export default authentication