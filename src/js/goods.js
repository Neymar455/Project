require(['config'],function(){
    require(['jquery','common'],function($){
        var goods_list =document.querySelector('.goods_list');
        var page = document.querySelector('.page');
        let pageNo = 1;
        let qty = 3;
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.status || xhr.status == 304){
                console.log(xhr.responseText);
                let res = JSON.parse(xhr.responseText);console.log(res)

                let ul = document.createElement('ul');
                ul.innerHTML = res.data.map(item=>{
                    return `
                        <li>
                            <img src ="${item.imgurl}";/>
                            <div>
                            <img src = "${item.imgurl}"/>
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
    })
})