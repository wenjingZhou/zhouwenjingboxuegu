/**
 * ҳ������ȼ���ҳ��html�ṹ��
 * �ټ���ҳ��link�������ʽ����ʱ��ҳ�����еĽṹ����ʽ�����ˣ�����ֻҪ����bootstrap��ok�ˡ�
 * ҳ���ȼ���require.js��
 * Ȼ���ټ���main.js��
 * �������ҳ��ô����ҳ��pathname������index.js��
 * Ȼ��index.js���ںܶ���������Щ������ͬʱ�첽���أ����ǵ�ִ��˳���ǲ�ȷ���ģ�
 * ��ô������һ��asideģ�飬��������jquery��jquery_cookie��������Ҫ��asideģ���дʱ��������
 * */
define(['bootstrap', 'jquery', 'aside', 'header','util','nprogress','template'], function(ud, $, ud, ud,util,nprogress,template) {
    // ����½״̬
    util.checkLoginStatus();
//    ������վ������
    nprogress.start();
    //window.onlod��ҳ�����е�HTML,JS,CS������ɺ��ִ��
    //���е�HTMLҳ�������ɺ���ִ��
    $(function(){
        nprogress.done();
    })
    //����ajaxȫ�������loadingЧ��
    util.loading()
    /**
     * ��ʦ�б���Ⱦ��
     * 1������ʦ�б�����
     * 2������ɹ���ʹ��template����ҳ���б�д�õ�ģ��
     * 3����ģ�����ָ��ҳ���е�λ��
     * */
    //ģ���һ���������������ӱ�д�����뵽��Ӧ��λ��
    template.helper('age',function(tolValue){
        // ���û��ֵ���򷵻ؿ��ַ���
        if(!tolValue){
            return '';
        }
        //��ȡ����
        var birthdayY = parseInt(tolValue);//��������
        var currentY = new Date().getFullYear();//���ڵ����
        return currentY -birthdayY
    })
    $.get('/v6/teacher',function(data){
        // data.result��ֵΪ����ʱ������ֱ�Ӱ�data����ģ��
        $('#tc-list-table').append(template('tc-list-tpl',data))
    })
});