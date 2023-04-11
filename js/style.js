/*nav*/

$(function () {
  if (window.screen.width < 428) {
    //一開始讓選單縮上去
    $("nav ul").slideUp();
    // 典籍後顯示
    $(".burGar_btn").click(function () {
      $("nav ul").slideToggle();
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const contactUsDom = document.getElementsByClassName("submitContact")[0];
  // document.addEventListener('click', function () {
  //   console.log('111111111');
  // })
  contactUsDom.addEventListener("click", function () {
    const nameInputValue = document.getElementById("inputName").value;
    const emailInputValue = document.getElementById("inputEmail").value;
    const messageInputValue = document.getElementById("inputMessage").value;
    // console.log(nameInputValue, emailInputValue);
    if (
      nameInputValue === "" ||
      emailInputValue === "" ||
      messageInputValue === ""
    ) {
      if (nameInputValue === "") {
        document.getElementById("inputName").style.border = "2px solid red";
        document.getElementById("inputName").style.borderRadius = "4px";
      }
      if (emailInputValue === "") {
        document.getElementById("inputEmail").style.border = "2px solid red";
        document.getElementById("inputEmail").style.borderRadius = "4px";
      }
      if (messageInputValue === "") {
        document.getElementById("inputMessage").style.border = "2px solid red";
        document.getElementById("inputMessage").style.borderRadius = "4px";
      }
      alert("Please enter the contact info");
    } else {
      alert("Submit Success");
    }

    const nameInput = document.getElementById("inputName");
    const emailInput = document.getElementById("inputEmail");
    const messageInput = document.getElementById("inputMessage");

    nameInput.addEventListener("input", removeRedBorder);
    emailInput.addEventListener("input", removeRedBorder);
    messageInput.addEventListener("input", removeRedBorder);

    function removeRedBorder(event) {
      if (event.target.value) {
        event.target.style.border = "none";
      }
    }
  });
});
