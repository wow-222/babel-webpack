export default class Base {
    constructor() {
    }
    getAjaxData(url,params) {
        let index;
        for(let k in params){
            if(typeof params[k] !== 'object'){
                params[k] = String(params[k])
            }
        }
        return new Promise((resolve, reject) => {
            $.ajax({
                'type': 'POST',
                'url': url,
                'data': JSON.stringify(params),
                "contentType": 'application/json',
                "dataType": "json",
                beforeSend: function(){
                    index = layer.load(1, {shade: false});
                },
                'success': function(data) {
                    layer.close(index);
                    if(data.success){
                        resolve(data);
                    }else{
                        if (data.msg) {
                            layer.msg(data.msg)
                        } else {
                            layer.msg("未知错误")
                        }
                    }
                },
                "error": function(request, textStatus, errorThrown) {
                    layer.close(index);
                    reject(errorThrown);
                }
            });
        })
    }
}