require(['config'],function(){
    require(['jquery','common','zoom'],function($){
        var pic = document.querySelector('.pic').children[0];
        var newprice = document.querySelector('.newprice');
        var price = document.querySelector('.price');
        var name = document.querySelector('.name');
        var comment = document.querySelector('.comment');
        var spic = document.querySelector('.spic');
        var commentt = document.querySelector('.commentt');
        

        var params = location.search;
        var id = params.slice(4);
        $.ajax({
                url:'../api/details.php',
                dataType:'json',
                data:{
                    id
                },
                success:function(data){
                    pic.src = data.img;
                    spic.src = data.img;
                    newprice.innerText = data.newprice;
                    price.innerText = data.price;
                    name.innerText = data.name;
                    comment.innerText = data.comment;
                    commentt.innerText = data.comment;
                    pic.dataBig = data.img;
                }
            })

        $('.pic').gdsZoom({
                width:200,
                height:100,
                position:'right'
            });

        $('.smallList').on('click','img',function(){
            $('.pic img').attr({
                src:this.src,
                'data-big':this.dataset.big || this.src
            })
        });


        var goodslist = [];

        // 获取cookie
        var cookies = document.cookie;
        cookies = cookies.split('; ');
        cookies.forEach(function(item){
            var arr = item.split('=');
            if(arr[0] === 'goodslist'){
                goodslist = JSON.parse(arr[1]);
            }
        });
        $('.sure').on('click',function(){
                var idx = id;
                console.log(idx);
                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].id === id){
                        goodslist[i].qty++;
                        break;
                    }
                }
                // 如果i的值等于goodslist.length
                // 说明循环执行完成后，无法找对应id的商品
                if(i===goodslist.length){
                    // 通过按钮获取商品信息
                    var goods = {
                        id:idx,
                        imgurl:pic.src,
                        name:name.innerText,
                        price:newprice.innerText,
                        qty:1
                    }
                    // 添加到数组
                    goodslist.push(goods);
                }
                // 写入cookie
                document.cookie = 'goodslist='+JSON.stringify(goodslist);
                location.href ='../html/car.html';
        })


        $('.add').on('click',function(){
            var idx = id;
                console.log(idx);
                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].id === id){
                        goodslist[i].qty++;
                        break;
                    }
                }
                // 如果i的值等于goodslist.length
                // 说明循环执行完成后，无法找对应id的商品
                if(i===goodslist.length){
                    // 通过按钮获取商品信息
                    var goods = {
                        id:idx,
                        imgurl:pic.src,
                        name:name.innerText,
                        price:newprice.innerText,
                        qty:1
                    }
                    // 添加到数组
                    goodslist.push(goods);
                }
                // 写入cookie
                document.cookie = 'goodslist='+JSON.stringify(goodslist);
        })
        var scar = document.querySelector('.scar');
        var zj = document.querySelector('.zj');

        var goodslist = Cookie.get('goodslist');


        if(goodslist.length===0){
            goodslist = [];
        }else{
            goodslist = JSON.parse(goodslist);
        }


        render();
        function render(){
            
            var all = 0;

            // 根据数据生成html结构
            var ul = document.createElement('ul');
            ul.innerHTML = goodslist.map(function(item){
                console.log(item);
                all += item.price*item.qty;
                return`<li data-id=${item.id}>
                <img src="${item.imgurl}">
                <h5>${item.name}</h5>
                <i>￥${item.price} * ${item.qty}</i>
                `
            }).join('');

            // 添加到页面
            scar.innerHTML = '';
            scar.appendChild(ul);

            // 写入总价
            zj.innerText = all.toFixed(2);
        }
        var person = document.querySelector('.person');
        var gouwuche = document.querySelector('.gouwuche');
        var per = document.querySelector('.icon-lianxiren');
        var gouwu = document.querySelector('.right_c');
        var del = document.querySelector('.shanchu')
        console.log(gouwu);
        per.onmouseenter = function(){
            person.style.display = 'block';
            person.onmouseenter = function(){
                person.style.display = 'block';
            }
            person.onmouseleave = function(){
                person.style.display = 'none';
            }
        };
        per.onmouseleave = function(){
            person.style.display = 'none';
        };
        gouwu.onmouseenter = function(){
            gouwuche.style.display = 'block';
            gouwuche.onmouseenter = function(){
                gouwuche.style.display ='block';
            }
            gouwuche.onmouseleave = function(){
                gouwuche.style.display ='none';
            }
        };
        gouwu.onmouseleave = function(){
            gouwuche.style.display = 'none';
        };
        del.onclick = function(){
            gouwuche.style.display = 'none';
        }
    })
})
