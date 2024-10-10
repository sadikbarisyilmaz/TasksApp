import { hashPassword } from "@/functions/hashPassword";
import { createNewData, deleteDataByAny, getAllData, getDataByUnique, updateDataByAny } from "@/services/serviceOperations";

const handler = async (req, res) => {
    const requestMethod = req.method;
    const data = req.body;

    switch (requestMethod) {
        // case "GET":
        //     try {
        //         const data = await getAllData("User");
        //         return res.status(200).json(data);
        //     } catch (error) {
        //         return res.status(500).json({ error: error.message });
        //     }
        // case "DELETE":
        //     try {
        //         const response = await deleteDataByAny("User", {
        //             id: data,
        //         });
        //         return res.status(200).json(response);
        //     } catch (error) {
        //         return res.status(500).json({ error: error.message });
        //     }
        // case "PUT":
        //     try {
        //         const taskID = data.id
        //         const { id, ...updatedTask } = data;
        //         const response = await updateDataByAny("User", { id: taskID }, updatedTask);
        //         return res.status(200).json(response);
        //     } catch (error) {
        //         return res.status(500).json({ error: error.message });
        //     }
        case "POST":
            try {
                const body = await req.body;

                if (!body) {
                    throw new Error("Bir hata oluştu!");
                }

                // Request body'nin email olup olmadığını kontrol eder
                if (typeof body !== "string") {
                    const hashedPassword = await hashPassword(body.hashedPassword)
                    const newUser = {
                        hashedPassword: hashedPassword,
                        email: body.email,
                        fullname: body.fullname,
                        email: body.email,
                    }

                    // Yeni User oluşturur
                    const data = await createNewData("User", newUser);
                    if (!data || data.error) {
                        throw new Error(data.error);
                    }
                    return res.status(200).json({ status: "success", message: "api isteği başarılı" });
                }

                // Email adressini karşılaştırarak databaseten User'ı getirir
                try {
                    const data = await getDataByUnique("User", {
                        email: body,
                    });
                    return res.status(200).json(data);
                } catch (error) {
                    return res.status(500).json({ error: error.message });
                }
            } catch (error) {
                return res.status(500).json({ status: "error", error: error.message });
            }
        default:
            res.setHeader("Allow", ["GET", "POST", "DELETE"]);
            return res.status(405).end(`Method ${requestMethod} Not Allowed`);
    }
}
export default handler;
