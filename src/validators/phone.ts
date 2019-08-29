
/*验证手机号*/
// tslint:disable-next-line: ban-types
const isvalidatePhone = (rule: any, value: string, callback: any) => {
    if (value != null && value !== "") {
        if (value.toString().length !== 11) {
            callback(new Error('手机号码为11为数字!'))
        } else {
            callback()
        }
    } else {
        callback();
    }
}

const PhoneRules = [
    {
        required: true,
        message: "请输入手机号码", trigger: 'blur'
    }, { type: 'number', message: "手机号码为数字" },
    { validator: isvalidatePhone, trigger: 'blur' }
]

export { PhoneRules, isvalidatePhone };