const txtInput = document.getElementById("infield");
const btn = document.getElementsByClassName("btn");
let filterinput;
let reverse;
const infoTxt = document.querySelector(".text-info");

$("input").keyup(() => {
  filterinput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  if ($("#infield").val() != "") {
    return $("button").addClass("active");
  } else {
    $("button").removeClass("active");
  }
});
