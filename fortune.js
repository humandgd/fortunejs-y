$(function(){
  $("#bt1").on("click",function(){
    var yourname = $("#yourname").val();
    if (yourname === ""){
      $("#name1 span").html("名前を入力してください")
    } else {
      $("#name1").html(yourname + "さんの今日の運勢は!!");
      var random = Math.floor(Math.random() * 5);
      var messages = [
        "今日のあなたはすごいラッキーです。宝くじを買ってみてはいかが？",
        "まあ運はいいほうです。ラッキーカラーは黄色です。積極的に外出しましょう。",
        "普通です。できるだけ人と会うように心がけましょう！",
        "ちょっと悪いです。信号には気をつけましょう！",
        "運勢最悪です。家からでないでください！危険です！"
      ];
      $("#message").html(messages[random]);
      $("#main img").attr("src","./images/fortune" + random + ".png");
      $("#main img").animate({
          "width": "800px",
          "height": "600px",
          "opacity":"1"
      });
      $("#bt1").remove();
    }
  });
});
