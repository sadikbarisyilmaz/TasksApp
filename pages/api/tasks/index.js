import { createNewData, deleteDataByAny, getDataByMany, getDataByUnique, updateDataByAny } from "@/services/serviceOperations";
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]";

const handler = async (req, res) => {
    const session = await getServerSession(req, res, authOptions)
    const userId = session.user.id
    const requestMethod = req.method;
    const data = req.body;
    console.log(userId);


    if (!session) {
        return res.status(500).json({ status: "error", error: "Oturum açmanız gerekiyor!" });
    }

    switch (requestMethod) {
        case "GET":
            try {
                const data = await getDataByMany("Task", {
                    user: {
                        id: userId,
                    }
                });
                return res.status(200).json(data);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
        case "DELETE":
            try {
                const response = await deleteDataByAny("Task", {
                    id: data,
                });
                return res.status(200).json(response);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
        case "PUT":
            try {
                const taskID = data.id
                const { id, ...updatedTask } = data;
                const response = await updateDataByAny("Task", { id: taskID }, updatedTask);
                return res.status(200).json(response);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
        case "POST":
            try {
                const body = await req.body;
                if (!body) {
                    throw new Error("Bir hata oluştu!");
                }

                // Request body'nin id olup olmadığını kontrol eder
                if (typeof body !== "string") {
                    const data = await createNewData("Task", body);
                    if (!data || data.error) {
                        throw new Error(data.error);
                    }
                    return res.status(200).json({ status: "success", message: "api isteği başarılı" });
                }

                try {
                    const data = await getDataByUnique("Task", {
                        id: body,
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
