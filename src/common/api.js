import Base from "../common/util";
import {config} from "../common/config";
const base = new Base();

export function getData(currentPage,pageSize,planName,planType) {
    let url = config.restUrl + '/schedule/plan/monitorPage.json';
    let paras = Object.assign(config.commonParas,{
        "currentPage": currentPage,
        "pageSize": pageSize,
        "params": {
            "planName": planName,
            "planStatus": planType,
            "volumeId": $("#volumn").attr("data-id")
        }
    })
    return base.getAjaxData(url,paras);
}