define(['jquery','jquery_cookie'],function($,un){
    return {
        //����ҳ��ĵ�¼��⹫�����������δ��¼����ô��ת����¼ҳ
        checkLoginStatus:function(){
            //cookie('PHPSESSID')��վ��¼�ɹ�����е�����
            if(!$.cookie('PHPSESSID')){
                location.href = '/html/home/login.html';
            }
        },
    //    ����ҳ��ajax�����ʱ����loadingЧ��
        loading:function(){
            //����ҳ���������ʱ����¼�
            //ajaxStart,������ոշ��ͳ�ȥʱ�����¼�������,���ͬʱ���Ͷ������ֻ�е�һ������ᴥ�����¼�
            $(document).on('ajaxStart',function(){
                $('.overlay').show();
                //ajaxStop������ɺ󴥷����¼������ں������Ƿ�ɹ�,���ͬʱ���Ͷ������ֻ�����һ������ᴥ�����¼���
            }).on('ajaxStop',function(){
                $('.overlay').hide();
            })
        },
        /**
         * ��ȡҳ��searchֵ��
         * ���û�д��Σ�������searchתΪ���󷵻أ�
         * ��������򷵻�ָ��key��searchֵ��
         * */
    //    ��ȡҳ���location.searchҲ���ǵ�ַ���������ʺú���ĵ�ַ�����Ǳ��������ݶ�Ӧ�ı��
        getSearch:function(searchKey){
            /**
             * 1��Ԥ����һ�����������洢���е�search
             * 2��ʹ��location.search��ȡ��ѯ�ַ�����ȥ����ͷ��?��
             * 3��Ȼ���һ��ʹ��&�ָ���ѯ�ַ������õ�һ�����飬������ÿһ��search
             * 4���������飬��ʹ��=�ŷָ��ַ������Ե�һ��ֵΪkey���ڶ���ֵΪval�洢��������
             * 5����������ˣ����ض�����ָ��key��searchֵ�����򷵻���������
             * */
            var searchObj={}, temp;
            //�ַ�������slice��ȡ�ַ�����slice(1,3����ȡ��һ�����ڶ��������󲻰��ң�
            //���ֻ��һ�����������������ȡ����󣬷���һ���µ��ַ�����
            //�ַ�������splite�ָ�����飬split('&')���ַ�������&�ַ��ָ��һ��һ���ַ�������һ���µ�����
            //"2&3&4&5".split("&")//������["2", "3", "4", "5"]
            var searchArr= location.search.slice(1).split('&');
            for(var i =0;i<searchArr.length;i++){
                temp=searchArr[i].split('=');
                searchObj[temp[0]]=temp[1];
            }
            // ���û�д��Σ������������󣻴��η��ض����е�ָ��ֵ
            return searchKey==null?searchObj:searchObj[searchKey];
        }

    }
})