const PwdRules = [
    {
        required: true,
        message: "请输入密码",
        trigger: 'blur'
    },
    { min: 3, message: '密码长度在 3 位以上', trigger: 'blur' }
]

export { PwdRules };