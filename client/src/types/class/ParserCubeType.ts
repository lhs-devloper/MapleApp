import { CubeHistoryDTO, CubeObject } from "../CubeHistoryDTO";

export class ParserCubeType {
    curiousCube: number;
    meisterCube: number;
    masterCube: number;
    redCube: number;
    blackCube: number;
    itemUpgradeResult: number;
    constructor(data: CubeHistoryDTO[]) {
        this.curiousCube = 0;
        this.meisterCube = 0;
        this.masterCube = 0;
        this.redCube = 0;
        this.blackCube = 0;
        this.itemUpgradeResult = 0;
        this.setCubeData(data);
    }

    getCubeData(): CubeObject {
        return {
            "curiousCube": this.curiousCube,
            "meisterCube": this.meisterCube,
            "masterCube": this.masterCube,
            "redCube": this.redCube,
            "blackCube": this.blackCube
        }
    }

    setCubeData(data: CubeHistoryDTO[]): void {
        data.map((cubeData): void => {
            switch (cubeData.cube_type) {
                case "수상한 큐브":
                    this.curiousCube += 1;
                    break;
                case "장인의 큐브":
                    this.meisterCube += 1;
                    break;
                case "카르마 장인의 큐브":
                    this.meisterCube += 1;
                    break;
                case "명장의 큐브":
                    this.masterCube += 1;
                    break;
                case "카르마 명장의 큐브":
                    this.masterCube += 1;
                    break;
                case "블랙 큐브":
                    this.blackCube += 1;
                    break;
                case "레드 큐브":
                    this.redCube += 1;
                    break;
            }
            if (cubeData.item_upgrade_result === "성공") {
                this.itemUpgradeResult += 1;
            }
        })
        return;
    }
}