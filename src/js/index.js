require(['config'],function(){
    require(['jquery','common'],function($){
//首页鼠标移入移出效果
        var li = $('.top_m1')[0].children;
        for(let i=0;i<li.length;i++){
            li[i].onmouseenter = function(){
               li[i].firstChild.src = 'images/index/b'+ (i+9) +'.jpg'
            }
            li[i].onmouseleave = function(){
                li[i].firstChild.src = 'images/index/b'+ (i+1) +'.jpg';
            }
        }

        //轮播图
        let focus = document.querySelector('.banner');
             let ul = focus.querySelector('.banner_b');
             ul.appendChild(ul.children[0].cloneNode(true));
             let len = ul.children.length;
             let index = 0;
             let imgWidth = focus.clientWidth;
            let page = document.createElement('div');
             page.classList.add('page');
             for(let i=1;i<len;i++){
                let span = document.createElement('span');
                span.innerText = i;
                if(i==index+1){
                    span.classList.add('active');
                }
                page.appendChild(span);
             }
             focus.appendChild(page);
            ul.style.width = imgWidth*len + 'px';
            let timer = setInterval(autoPlay,3000);
            focus.addEventListener('mouseenter',()=>{
                clearInterval(timer);
            });
            focus.addEventListener('mouseleave',()=>{
                timer = setInterval(autoPlay,3000);
            });
            focus.addEventListener('click',e=>{
                if(e.target.parentNode.classList.contains('page')){
                    index = e.target.innerText-1;

                    show();
                }
            });
            function autoPlay(){
                index++;
                show();
            }
            function show(){
                if(index>=len){
                    ul.style.left = 0;
                    index = 1;
                }
                let target = -index*imgWidth;
                animate(ul,{left:target});
                page.querySelector('.active').classList.remove('active');
                if(index<len-1){
                    page.children[index].className = 'active';
                }else{
                    page.children[0].className = 'active';
                }
            }

        //TAB标签切换
        var $tab = $('.goods_tab');
        var $goods_b = $('.goods_b')
            var $li = $tab.find('li');
            var $img = $goods_b.find('img');

            $img.not(':first').hide();

            $li.first().addClass('active');

            $tab.on('mouseover','li',function(){
               
                var idx = $(this).index();
                
                $li.eq(idx).addClass('active').siblings().removeClass('active');

                $img.eq(idx).fadeIn().siblings().fadeOut();
            })

        
        var $goods2_c2b = $('.goods2_c2b');
        var $bjgtab = $('.bigtab')
            var $tabItem = $goods2_c2b.find('li');
            var $content = $bjgtab.find('div');
            $content.not(':first').hide();
            $tabItem.first().addClass('active');

            $goods2_c2b.on('mouseover','li',function(){
               
                var idx = $(this).index();
                
                $tabItem.eq(idx).addClass('active').siblings().removeClass('active');

                $content.eq(idx).fadeIn(0).siblings().fadeOut(0);
            })


        var $goods_bannner2 = $('.goods2_c4');
        var $goods_bannner2t = $('.goods_bannner2t')
            var $goods_bannner2tab = $goods_bannner2.find('li');
            var $goods_bannner2ta = $goods_bannner2t.find('div');
            $goods_bannner2ta.not(':first').hide();
            $goods_bannner2tab.first().addClass('active');

            $goods_bannner2.on('mouseover','li',function(){
               
                var idx = $(this).index();
                
                $goods_bannner2tab.eq(idx).addClass('active').siblings().removeClass('active');

                $goods_bannner2ta.eq(idx).fadeIn(0).siblings().fadeOut(0);
            })

        var $goods2_c5t = $('.goods2_c5t');
        var $goods_c5b = $('.goods_c5b')
            var $goods2_c5t1 = $goods2_c5t.find('li');
            var $goods_c5b1 = $goods_c5b.find('img');
            $goods_c5b1.not(':first').hide();
            $goods2_c5t1.first().addClass('active');

            $goods2_c5t.on('mouseover','li',function(){
               
                var idx = $(this).index();
                
                $goods2_c5t1.eq(idx).addClass('active').siblings().removeClass('active');

                $goods_c5b1.eq(idx).fadeIn(0).siblings().fadeOut(0);
            })


        var $goods2_c6t = $('.goods2_c6t');
        var $goods2_c6b = $('.goods2_c6b')
            var $goods2_c6t1 = $goods2_c6t.find('li');
            var $goods_c6b1 = $goods2_c6b.find('img');
            $goods_c6b1.not(':first').hide();
            $goods2_c6t1.first().addClass('active');

            $goods2_c6t.on('mouseover','li',function(){
               
                var idx = $(this).index();
                
                $goods2_c6t1.eq(idx).addClass('active').siblings().removeClass('active');

                $goods_c6b1.eq(idx).fadeIn(0).siblings().fadeOut(0);
            })

        var like = document.querySelector('#like');
        var good = document.createElement('ul');
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.status == 200 || xhr.status == 304){
                var indexgood = JSON.parse(xhr.responseText);
                good.innerHTML = indexgood.map(function(goods){
                    return `<li data-guid = "${goods.id}">
                            <img src = "${goods.imgurl}"/>
                            <h4>${goods.name} </h4>
                            <i>
                            <p>￥<i>${goods.newprice}</i></p>
                            <p>￥<i>${goods.price}</i></p>
                            </i>
                    </li>`   
                            
                }).join('');
            like.appendChild(good);
            }
        }
        xhr.open("get","./api/data/index.json",true);
        xhr.send();
    })
})