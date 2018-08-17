import Base from "util";
import {config} from "config";
const base = new Base();

export async function getData(currentPage,pageSize,planName,planType) {
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
    try {
        return await base.getAjaxData(url,paras);
    } catch (error) {
        return error;
    }
}