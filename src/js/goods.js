require(['config'],function(){
    require(['jquery','common'],function($){
        var goods_list =document.querySelector('.goods_list');
        var page = document.querySelector('.page');
        let pageNo = 1;
        let qty = 30;
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.status || xhr.status == 304){
                console.log(xhr.responseText);
                let res = JSON.parse(xhr.responseText);console.log(res)

                let ul = document.createElement('ul');
                ul.innerHTML = res.data.map(item=>{
                    return `
                        <li class = ${item.id}>
                            <img src ="${item.img}";/>
                            <div>
                            <img src = "${item.img}"/ >
                            </div>
                            <p>
                            <i>
                            <span>￥</span><i>${item.newprice}</i>
                            </i>
                            <i>
                            <span>￥</span><i>${item.price}</i>
                            </i>
                            </p>
                            <h4>${item.name}</h4>
                            <p>${item.dress}</p>
                            <p>评论 &nbsp;&nbsp;&nbsp;<b>${item.comment}</b>条</p>
                        </li>
                    `
                }).join('');

                // 写入页面
                goods_list.innerText = '';
                goods_list.appendChild(ul);

                // 处理分页
                let pageQty = Math.ceil(res.total/res.qty);

                page.innerText = '';
                for(let i=1;i<=pageQty;i++){
                    let span = document.createElement('span');
                    span.innerText = i;
                    if(i===res.pageNo){
                        span.className = 'active';
                    }
                    page.appendChild(span);
                }
            }
        }
        xhr.open("psot","../api/goods.php");
        xhr.send(`pageNo=${pageNo}&qty=${qty}`);


        // 切换分页
        page.onclick = function(e){
            if(e.target.tagName.toLowerCase() === 'span'){
                pageNo = e.target.innerText*1;
                xhr.open('post','../api/goods.php');
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                xhr.send(`pageNo=${pageNo}&qty=${qty}`);
            }
        }

        var $taggle = $('.taggle')[0];
        console.log($taggle);
        var li = $taggle.children;
        console.log(li);
        for(let i=0;i<li.length;i++){
            li[i].onmouseenter = function(){
                var img = document.createElement('img');
                img.src = "../images/goods/l"+i+".png";
                li[i].appendChild(img);
                img.className = "active";
            }
            li[i].onmouseleave = function(){
                console.log(li[i].lastChild);
                li[i].removeChild(li[i].lastChild)
            }
        }


        var goods_list = document.querySelector('.goods_list');
        goods_list.onclick = function(e){
            if(e.target.tagName.toLowerCase() == 'div' || 'img' ||'p' || 'h4'){
                var id = e.target.parentNode.className;
                console.log(e.target.parentNode.className);
                if(id!= ''){
                    console.log(666);
                    location.href = 'details.html?id=' + id;
                }

            }
            
        }
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