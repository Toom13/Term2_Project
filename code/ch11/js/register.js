$(function () {
    $('#registerForm').validate({
        //验证规则
        rules:{
            //用户名的验证
            username:{
                required: true,  //非空
                rangelength: [3,6]  //长度验证
            },
            //密码验证
            password:{
                required: true,  //非空
                isPassword: true //自定义的密码验证
            },
            //确认密码的验证
            checkPassword:{
                required: true,  //非空
                equalTo: "#password"  //密码一致性
            },
            tel: {
                required: true,  //非空
                isTel: true  //自定义电话号码验证
            }
        },
        //提示信息
        messages:{
            //用户提示信息
            username: {
                required:'用户名不能为空哦！',  //非空提示
                rangelength:'长度在3 - 6 位哦！'//长度提示
            },
            // 密码提示信息
            password: {
                required:'密码不能为空哦！',  //非空提示
                isPassword: '亲！输入5-10个，以字母开头、可带数字、“_”、“.”的字符串哦！' //密码格式提示
            },
            //  确认密码提示信息
            checkPassword:{
                required:'请再次输入密码！',  //非空提示
                equalTo: '两次密码不一致'  //密码一致性提示信息
            },
            tel:{
                required:'电话号码不能为空！',  //非空提示
                isTel:'电话号码格式不正确！' //电话号码格式提示信息
            }
        }
    })
    // 密码自定义验证
    jQuery.validator.addMethod("isPassword",function(value,element){
        var pwdReg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,9}$/;
        return this.optional(element) || (pwdReg.test(value));
    });
    // 电话号码自定义验证
    jQuery.validator.addMethod("isTel",function(value,element){
        var TelReg = /^[1]+[3,5,7,8]+\d{9}$/;
        return this.optional(element) || (TelReg.test(value));
    });
})