require(['config'],function(){
    require(['jquery','common'],function($){
        var username = document.querySelector('.username');
        var password = document.querySelector('.password');
        var name = document.querySelector('.name');
        var mima = document.querySelector('.mima');
        var dui = document.querySelector('.dui');
        console.log(username);
        username.onblur = function(){
            if(username.value != ''){
                dui.innerText= '√';
                name.style.display = 'none';
            }else{
                dui.innerText = '';
                name.style.display = 'block';
            }
        }
        password.onblur = function(){
            if(password.value != ''){
                mima.style.display = 'none';
            }else{
                mima.style.display = 'block';
            }
        }


        $('.btn').on('click',function(){
                console.log(username.value);
                console.log(password.value);
                $.ajax({
                    url:'../api/login.php',
                    data:{
                        username:$('.username').val(),
                        password:$('.password').val()
                    },
                    success:function(data){
                        console.log(data);
                        if(data === 'success'){
                            location.href = '../index.html';
                        }else if(data === 'fail'){
                            alert('密码错误！')
                        }
                    }
                })
                
            })
    })
})