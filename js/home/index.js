/**
 * ҳ������ȼ���ҳ��html�ṹ��
 * �ټ���ҳ��link�������ʽ����ʱ��ҳ�����еĽṹ����ʽ�����ˣ�����ֻҪ����bootstrap��ok�ˡ�
 * ҳ���ȼ���require.js��
 * Ȼ���ټ���main.js��
 * �������ҳ��ô����ҳ��pathname������index.js��
 * Ȼ��index.js���ںܶ���������Щ������ͬʱ�첽���أ����ǵ�ִ��˳���ǲ�ȷ���ģ�
 * ��ô������һ��asideģ�飬��������jquery��jquery_cookie��������Ҫ��asideģ���дʱ��������
 * */
define(['bootstrap', 'jquery', 'aside', 'header','util','nprogress'], function(ud, $, ud, ud,util,nprogress) {
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
});