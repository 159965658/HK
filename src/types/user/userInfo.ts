export interface UserInfo {
    address: string, // 地址
    cityId: number, // 市
    cityName: string // 市名称
    companyLicense: string // 公司许可
    companyName: string // 公司名称
    countyId: number // 县 id
    countyName: string // 县名称
    email: string // 邮箱
    idCard: string // 身份证
    idCardFrontUrl: string // 身份证信息
    idCardFrontUrlShow: string // 身份证信息
    idCardRearUrl: string
    idCardRearUrlShow: string
    mobile: string // 手机号
    name: string // 名称
    portraitUrl: string // 图片
    portraitUrlShow: string // 图片全地址
    provinceId: string // 省
    provinceName: string // 省名称
    telephone: string // 办公电话
    totalPurchaseAmount: number // 总购买金额
    totalSalesAmount: number // 总销售金额
}