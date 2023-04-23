import { CubeHistoryDTO } from "./CubeHistoryDTO";

export interface CubeHistoryResponseDTO {
    count: number,
    cube_histories: CubeHistoryDTO[],
    next_cursor: string
}