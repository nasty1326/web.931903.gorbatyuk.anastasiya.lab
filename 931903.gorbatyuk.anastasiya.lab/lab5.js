var btn1 = document.getElementById("bt1");
var btn2 = document.getElementById("bt2");
var btn3 = document.getElementById("bt3");
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");

function Modal(modal, btn) {
  btn.onclick = function () {
    modal.style.display = "flex";
  };

  modal.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };
}

Modal(modal1, bt1);
Modal(modal2, bt2);
Modal(modal3, bt3);
