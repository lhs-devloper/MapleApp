import express, { Request, Response } from "express";
import { URLSearchParams } from "url";
import { DTOMapping } from "./mapping/DTOMapping";
import { CubeHistoryResponseDTO } from "./types/CubeHistoryResponseDTO";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}))
app.get("/", async (req: Request, res: Response) => {
    const { count, date, cursor } = req.query;
    const { key, server } = req.body;
    let params = {
        "count": "10",
        "date": "2023-04-23",
        "cursor": ""
    }
    let query = new URLSearchParams(params)
    let response = await fetch(
        "https://public.api.nexon.com/openapi/maplestory/v1/cube-use-results?"
        + query, {
        method: "GET",
        headers: {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6IjcyMTU3OTU1MSIsImF1dGhfaWQiOiIyIiwiZXhwIjoxNjg3MDY3MjEzLCJpYXQiOjE2NzE1MTUyMTMsIm5iZiI6MTY3MTUxNTIxMywic2VydmljZV9pZCI6IjQzMDAxMTM5NyIsInRva2VuX3R5cGUiOiJBY2Nlc3NUb2tlbiJ9.rhPCQtBXQ_9gcJXqjuzUS97qUoKTzZ1aGIxTfy9SgA0"
        }
    })
    let result: CubeHistoryResponseDTO = await response.json();
    const test = new DTOMapping("reboot", result);
    return res.send(test.result);
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})