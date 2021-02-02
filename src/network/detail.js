import { request } from "./request"

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: { iid }
    })
}

export function getRecommend() {
    return request({
        url: '/recommend'
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.price = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.lowNowPrice = itemInfo.lowNowPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
        this.realPrice = itemInfo.lowNowPrice
    }
}

export class Shop {
    constructor(shopInfo) {
        this.cGoods = shopInfo.cGoods;
        this.cSells = shopInfo.cSells;
        this.name = shopInfo.name;
        this.score = shopInfo.score;
        this.logo = shopInfo.shopLogo;
        this.fans = shopInfo.cFans;
    }
}

export class GoodsParam {
    constructor(info, rule) {
        this.images = info.images ? info.images : "";
        this.sets = info.set;
        this.sizes = rule.tables;
        this.disclaimer = rule.disclaimer;
    }
}