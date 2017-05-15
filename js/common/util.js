define(['jquery','jquery_cookie'],function($,un){
    return {
        //其他页面的登录检测公共，如果发现未登录，那么跳转到登录页
        checkLoginStatus:function(){
            //cookie('PHPSESSID')网站登录成功后才有的数据
            if(!$.cookie('PHPSESSID')){
                location.href = '/html/home/login.html';
            }
        },
    //    启用页面ajax请求的时候有loading效果
        loading:function(){
            //整个页面有请求的时候的事件
            //ajaxStart,在请求刚刚发送出去时，该事件被触发,如果同时发送多个请求，只有第一个请求会触发该事件
            $(document).on('ajaxStart',function(){
                $('.overlay').show();
                //ajaxStop请求完成后触发该事件，不在乎请求是否成功,如果同时发送多个请求，只有最后一个请求会触发该事件。
            }).on('ajaxStop',function(){
                $('.overlay').hide();
            })
        },
        /**
         * 获取页面search值，
         * 如果没有传参，把所有search转为对象返回，
         * 如果传了则返回指定key的search值。
         * */
    //    获取页面的location.search也就是地址栏？包括问好后面的地址，就是表单或者数据对应的编号
        getSearch:function(searchKey){
            /**
             * 1、预定义一个对象，用来存储所有的search
             * 2、使用location.search获取查询字符串，去掉开头的?号
             * 3、然后进一步使用&分隔查询字符串，得到一个数组，数组中每一个search
             * 4、遍历数组，再使用=号分隔字符串，以第一个值为key，第二个值为val存储到对象中
             * 5、如果传参了，返回对象中指定key的search值，否则返回整个对象。
             * */
            var searchObj={}, temp;
            //字符串方法slice截取字符串，slice(1,3）截取第一个到第二个，包左不包右，
            //如果只有一个参数从这个参数截取到最后，返回一个新的字符串；
            //字符串方法splite分割成数组，split('&')把字符串按照&字符分割成一个一个字符，返回一个新的数组
            //"2&3&4&5".split("&")//将返回["2", "3", "4", "5"]
            var searchArr= location.search.slice(1).split('&');
            for(var i =0;i<searchArr.length;i++){
                temp=searchArr[i].split('=');
                searchObj[temp[0]]=temp[1];
            }
            // 如果没有传参，返回整个对象；传参返回对象中的指定值
            return searchKey==null?searchObj:searchObj[searchKey];
        }

    }
})