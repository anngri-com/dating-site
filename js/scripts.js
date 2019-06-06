$(document).ready(function() {
  $("form#data").submit(function(event) {


    var age = parseInt($("input:radio[name=age]:checked").val());
    var gender = $("input:radio[name=gender]:checked").val();
    var height = $("input:radio[name=height]:checked").val();

 alert("one");


      if (gender === "male") {
        $("#ryan").show();
      { else  {
        $("#ryan").show();
      }

       alert("one");
      // }else if (age >= 36 && age < 50 ) {
      // $(".hugh").show();
      // }else if (age >= 50) {
      //   $(".steve").show();
      // }else if (gender === "male" && height === "Short")
      //   {
      // if (age < = 21 && age <= 35) {
      //   $("#ryan").show();
      //
      // }else if (age >= 36 && age < 50 ) {
      // $(".hugh").show();
      // }else {
      // $(".steve").show();
      // } else if (gender === "female" && height === "Short") {
      // if (age < = 21 && age <= 35) {
      // $(".emma").show();
      // }else if (age >= 36 && age < 50 ) {
      // $(".sandra").show();
      // }else {
      // $(".celine").show();
      // }
      // }else {
      // if (age < = 21 && age <= 35) {
      // $(".emma").show();
      // }else if (age >= 36 && age < 50 ) {
      // $(".sandra").show();
      // }else {
      // $(".celine").show();
      // }

    }


    event.preventDefault();
  });
});
