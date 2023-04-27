import express, { Request, Response } from "express";
import { URLSearchParams } from "url";
import { DTOMapping } from "./mapping/DTOMapping";
import { CubeHistoryResponseDTO } from "./types/CubeHistoryResponseDTO";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}))
app.get("/", async (req: Request, res: Response) => {
    const { count, date, cursor, key, server } = req.query;
    let params = {
        "count": "1000",
        "date": "2023-04-23",
        "cursor": ""
    }
    let query = new URLSearchParams(params)
    try {
        let response = await fetch(
            "https://public.api.nexon.com/openapi/maplestory/v1/cube-use-results?"
            + query, {
            method: "GET",
            headers: {
                "Authorization": key as string
            }
        })
        let result: CubeHistoryResponseDTO = await response.json();
        const test = new DTOMapping("reboot", result);
        return res.status(200).send(test.result);
    } catch (error) {
        return res.status(400).send([])
    }

})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})