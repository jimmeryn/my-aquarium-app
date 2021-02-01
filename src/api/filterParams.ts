import { Param } from "models"

const ParamIsRefill = (param: Param) => param.name === "refill"

export const getLatestParams = (params: Param[]) => {
    params = params.filter(param => !ParamIsRefill(param))
    const latestDate = new Date(Math.max(...params.map(e => new Date(e.date).getTime()))).getTime();
    return params.filter(param => new Date(param.date).getTime() === latestDate);
};

export const getLatestRefillValue = (params: Param[]) => {
    const list = params
        .filter(param => ParamIsRefill(param))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .reverse();
    
    if (list.length === 0) {
        return;
    }
    return list[0].value;
};