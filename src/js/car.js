require(['config'],function(){
    require(['jquery','common'],function($){
        var car = document.querySelector('.shoppingcar');
        var total = document.querySelector('.tatol');
        
        console.log(car);
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
                <input type="checkbox" />
                <img src="${item.imgurl}">
                <h5>${item.name}</h5>
                <i>￥${item.price}</i>
                <i class="jian"> - </i><i class="sl">${item.qty} </i><i class="jia"> + </i>
                <span>￥${item.price * item.qty}</span>
                <b class="del">&times;</b>
                `
            }).join('');

            // 添加到页面
            car.innerHTML = '';
            car.appendChild(ul);

            // 写入总价
            total.innerText = all.toFixed(2);
        }




        car.onclick = function(e){
            e = e || window.event;

            var target = e.target || e.srcElement;

            if(target.className === 'del'){
                // goodslist
                // 找到数组中对应的id，并删除
                // 重新写入cookie

                // 获取当前商品对应的id
                var id = target.parentNode.getAttribute('data-id');

                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].id === id){
                        goodslist.splice(i,1);
                        break;
                    }
                }

                // 重新写入cookie
                Cookie.set('goodslist',JSON.stringify(goodslist));

                render();
            }
            if(target.className === 'jian'){
                // goodslist
                // 找到数组中对应的id，并删除
                // 重新写入cookie

                // 获取当前商品对应的id
                var id = target.parentNode.getAttribute('data-id');

                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].id === id){
                        goodslist[i].qty--;
                        if(goodslist[i].qty <= 0){
                            goodslist[i].qty = 0;
                        }
                    }
                }

                // 重新写入cookie
                Cookie.set('goodslist',JSON.stringify(goodslist));

                render();
            }
            if(target.className === 'jia'){
                // goodslist
                // 找到数组中对应的id，并删除
                // 重新写入cookie

                // 获取当前商品对应的id
                var id = target.parentNode.getAttribute('data-id');

                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].id === id){
                        goodslist[i].qty++;
                        
                    }
                }

                // 重新写入cookie
                Cookie.set('goodslist',JSON.stringify(goodslist));

                render();
            }
        }


       
 
        
    })
})