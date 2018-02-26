require(['config'],function(){
    require(['jquery','common'],function($){
        var username = document.querySelector('.username');
        var password = document.querySelector('.password');
        var mphone = document.querySelector('.mphone');
        var bpassword = document.querySelector('.bpassword');
        var name = document.querySelector('.name');
        var mima = document.querySelector('.mima');
        var dui = document.querySelector('.dui');
        var dui2 = document.querySelector('.dui2');
        var phone = document.querySelector('.phone');
        var dmima = document.querySelector('.dmima');
        var yanzhengma = document.querySelector('.yanzhengma');
        var vcode = document.querySelector('.vcode');
        var btn = document.querySelector('btn');
        var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
        vcode.onclick = function(){
         randomCode();
        }
        randomCode();
        function randomCode(){
            var _code = '';
            for(var i=0;i<4;i++){
                var index = parseInt(Math.random()*str.length)
                _code += str[index]
            }
            console.log(_code);
            vcode.innerText = _code.toUpperCase();
        }
        username.onblur = function(){
            var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
            if(!reg.test(username.value)){
                dui.innerText ='';
                name.style.display = 'block';
                 
            }else{
                dui.innerText= '√';
                name.style.display = 'none';
            }
        }
        mphone.onblur=function(){
            var reg = /^1[34578]\d{9}$/;
            if(!reg.test(mphone.value)){
                dui2.innerText = '';
                phone.style.display = 'block';
                 
            }else{
                dui2.innerText= '√';
                phone.style.display = 'none';
            }
        }
        password.onblur=function(){
            var reg = /^\S{6,20}$/;
            if(!reg.test(password.value)){
                mima.style.display = 'block';
                 
            }else{
                mima.style.display = 'none';
            }
        }
        bpassword.onblur = function(){
            if(password.value == bpassword.value){
                dmima.style.display = 'none';
            }else{
                dmima.style.display='block';
            }
        }
        yanzhengma.onblur = function(){
            if(yanzhengma.value == vcode.innerText){

            }else{
                alert('验证码错误')
            }
        }


        $('.btn').on('click',function(){
                $.ajax({
                    url:'../api/reg.php',
                    data:{
                        username:$('.username').val(),
                        password:$('.password').val()
                    },
                    success:function(data){
                        console.log(data);
                        if(data === 'success'){
                            location.href = 'login.html';
                        }else if(data === 'fail'){
                            alert('注册失败');
                        }
                    }
                })
                
            })
       



    })
})