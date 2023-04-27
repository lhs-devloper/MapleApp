import { CubeHistoryDTO } from "../types/CubeHistoryDTO";
import { CubeHistoryResponseDTO } from "../types/CubeHistoryResponseDTO";

export class DTOMapping {
    server: string
    data: CubeHistoryResponseDTO
    result: object[]
    constructor(server: string, data: CubeHistoryResponseDTO) {
        this.server = server;
        this.data = data;
        this.result = [];
        this.server === "generic" ?
            this.mapping() : this.rebootMapping()
    }
    mapping(): void {
        let array: object[] = []
        this.data.cube_histories.map(element => {
            let resultJson = {
                "id": element.id,
                "character_name": element.character_name,
                "world_name": element.world_name,
                "create_date": element.create_date,
                "cube_type": element.cube_type,
                "item_upgrade_result": element.item_upgrade_result,
                "miracle_time_flag": element.miracle_time_flag,
                "item_equip_part": element.item_equip_part,
                "item_level": element.item_level,
                "target_item": element.target_item,
                "potential_option_grade": element.potential_option_grade,
                "upgradeguarantee": element.upgradeguarantee,
                "upgradeguaranteecount": element.upgradeguaranteecount,
                "before_potential_options": element.before_potential_options,
                "before_additional_potential_options": element.before_additional_potential_options,
                "after_potential_options": element.after_potential_options,
                "after_additional_potential_options": element.after_additional_potential_options,
            }
            array.push(resultJson)
        })
        this.result = array;
    }

    rebootMapping(): void {
        let array: object[] = []
        this.data.cube_histories.map(element => {
            let resultJson = {
                "id": element.id,
                "character_name": element.character_name,
                "world_name": element.world_name,
                "create_date": element.create_date,
                "cube_type": element.cube_type,
                "item_upgrade_result": element.item_upgrade_result,
                "miracle_time_flag": element.miracle_time_flag,
                "item_equip_part": element.item_equip_part,
                "item_level": element.item_level,
                "target_item": element.target_item,
                "potential_option_grade": element.potential_option_grade,
                "upgradeguarantee": element.upgradeguarantee,
                "upgradeguaranteecount": element.upgradeguaranteecount,
                "before_potential_options": element.before_potential_options,
                "after_potential_options": element.after_potential_options,
            }
            array.push(resultJson)
        })
        this.result = array;
    }
}