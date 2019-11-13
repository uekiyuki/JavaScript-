$(document).ready(function() {
  function score_indicate() {
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
      Number($('#english').val()),
      Number($('#mathematics').val()),
      Number($('#science').val()),
      Number($('#society').val())
    ];

    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = subject_points.reduce((sum, current) => sum + current);
    $("#sum_indicate").text(sum);

    // ここに、上記を参考にして平均点を出力する処理を書き込む

    let number = subject_points.length;
    let average = sum / number;
    $("#average_indicate").text(average);
  };


  // こに、ランクの値の文字列（平均点が80点以上なら"A"、60点以上なら"B"、40点以上なら"C"、それ以下なら"D"）を出力する処理を書き込む
  function get_achievement(){
    let subject_points = [Number($('#national_language').val()),
      Number($('#english').val()),
      Number($('#mathematics').val()),
      Number($('#science').val()),
      Number($('#society').val())
    ];

    let sum = subject_points.reduce((sum, current) => sum + current);

    let number = subject_points.length;
    let average = sum / number;

    let evaluation;

    if (average >= 80) {
      $("#evaluation").text("A");
      return "A";

    } else if (average >= 60) {
      $("#evaluation").text("B");
      return "B";

    } else if (average >= 40) {
      $("#evaluation").text("C");
      return "C";

    } else {
      $("#evaluation").text("D");
      return "D";
    }
  }

  function get_pass_or_failure() {
    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む

    let score_A = Number($("#national_language").val());
    let score_B = Number($("#english").val());
    let score_C = Number($("#mathematics").val());
    let score_D = Number($("#science").val());
    let score_E = Number($("#society").val());

    let judge;

    if (score_A >= 60 && score_B >= 60 && score_C >= 60 && score_D >= 60 && score_E >= 60) {
      $("#judge").text("合格");
      judge = "合格";
    } else {
      $("#judge").text("不合格");
      judge = "不合格";
    }
    return judge;
  };

  function judgement() {
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();

    $('.alert-info').remove();

    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。${pass_or_failure}です</label>`);


  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    get_achievement();

  });

  $('#btn-judge').click(function() {

    get_pass_or_failure();
  });

  $('#btn-declaration').click(function() {
    judgement();
  });
});
