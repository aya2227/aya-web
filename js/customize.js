$('.site-header a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
	var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
	var pos = $(elmHash).offset().top-80;//idの上部の距離からHeaderの高さを引いた値を取得
	$('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});

//アコーディオンをクリックした時の動作
$('.accordion').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".accordion__hide");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	}else{//それ以外は
		$(this).addClass('close');//クラス名closeを付与
	}
});

//BACK TO TOPボタン
$(function() {
  var showFlag = false;
  var topBtn = $('#page-top');
  topBtn.css('bottom', '-200px');
  var showFlag = false;
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          if (showFlag == false) {
              showFlag = true;
              topBtn.stop().animate({'bottom' : '70px'}, 200);
          }
      } else {
          if (showFlag) {
              showFlag = false;
              topBtn.stop().animate({'bottom' : '-200px'}, 200);
          }
      }
  });
  //スクロールしてトップ
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0 // 戻る位置
      }, 600); // 戻るスピード
      return false;
  });
});
