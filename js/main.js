let footer__call = document.querySelector(".footer__call");
let pop_order_1 = document.querySelector(".pop_order_1");
let pop_order_2 = document.querySelector(".pop_order_2");
let pop_order_3 = document.querySelector(".pop_order_3");
let present__main_btn = document.querySelector(".present__main-btn");
let which__bottom = document.querySelector(".which__bottom span");

let popup_1 = document.querySelector(".popup_1");
let popup_2 = document.querySelector(".popup_2");
let popup_3 = document.querySelector(".popup_3");
let popup_4 = document.querySelector(".popup_4");
let popup_5 = document.querySelector(".popup_5");
let popup_6 = document.querySelector(".popup_6");

let x_1 = document.querySelector(".x_1");
let x_2 = document.querySelector(".x_2");
let x_3 = document.querySelector(".x_3");
let x_4 = document.querySelector(".x_4");
let x_5 = document.querySelector(".x_5");
let x_6 = document.querySelector(".x_6");

let popup = document.querySelector(".popup ");

let openPop = function (btn, pop) {
  btn.addEventListener("click", function () {
    pop.classList.add("pop_active");
    document.body.style.overflow = "hidden";
  });
};
document.addEventListener("click", function () {
  //debugger
  gg = event.target;
  if (gg.classList[0] === "popup") {
    gg.classList.remove("pop_active");
    document.body.style.overflow = "visible ";
  }
});
function closePop(x, pop) {
  x.addEventListener("click", function () {
    pop.classList.remove("pop_active");
    document.body.style.overflow = "visible ";
  });
}
openPop(pop_order_1, popup_2);
openPop(pop_order_2, popup_3);
openPop(pop_order_3, popup_4);
openPop(footer__call, popup_1);
openPop(present__main_btn, popup_5);
// openPop(which__bottom, popup_6);

closePop(x_1, popup_1);
closePop(x_2, popup_2);
closePop(x_3, popup_3);
closePop(x_4, popup_4);
closePop(x_5, popup_5);
closePop(x_6, popup_6);

$(function () {
  $("form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      alert("Thank you!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
  $(".burger__burger").click(function (event) {
    $(".burger__burger,.header__left-bottom").toggleClass("active");
    $(".header__nav").toggleClass("header__nav-act");
    $("body").toggleClass("lock");
    $("body").toggleClass("lock");
  });
});

//quiz
//quiz
//quiz
let q_prev = document.querySelector(".q_prev");
let q_next = document.querySelector(".q_next");
let q_subm = document.querySelector(".q_subm");

let q_count = 0;

function q_swipe_next() {
  if (q_count === 4) {
    q_count = 4;
  } else {
    q_count = q_count + 1;
  }
}
function q_swipe_prev() {
  if (q_count === 0) {
    q_count = 0;
  } else {
    q_count = q_count - 1;
  }
}

let quiz_i_1 = document.querySelector(".quiz_i_1");
let quiz_i_2 = document.querySelector(".quiz_i_2");
let quiz_i_3 = document.querySelector(".quiz_i_3");
let quiz_i_4 = document.querySelector(".quiz_i_4");
let quiz_i_5 = document.querySelector(".quiz_i_5");

let quiz_i_1__in = document.querySelector(".quiz_i_1 select");
let quiz_i_2__in = document.querySelector(".quiz_i_2 input");
let quiz_i_3__in = document.querySelector(".quiz_i_3 select");
let quiz_i_4__in = document.querySelector(".quiz_i_4 input");
let quiz_i_5__in = document.querySelector(".quiz_i_5 input");

let q_err = document.querySelector(".q_err");
let q__countttt = document.querySelector(".q__countttt span");

let howsBtn = false;
function show_btn() {
  //   quiz_i_1__in.value,
  //     quiz_i_2__in.value,
  //     quiz_i_3__in.value,
  //     quiz_i_4__in.value != ""
  //       ? q_subm.classList.remove("q_subm-b")
  //       : q_subm.classList.add("q_subm-b");

  if (
    (quiz_i_1__in.value != "Выберите услугу",
    quiz_i_3__in.value != "Выберите объект",
    quiz_i_2__in.value != "",
    quiz_i_5__in.value != "",
    quiz_i_4__in.value != "")
  ) {
    howsBtn = true;
  }
  howsBtn
    ? q_subm.classList.remove("q_subm-b")
    : q_subm.classList.add("q_subm-b");
}

function main_qqq() {
  q_subm.classList.add("q_subm-b");
  let qixii = [quiz_i_1, quiz_i_2, quiz_i_3, quiz_i_4, quiz_i_5];
  for (let i = 0; i < qixii.length; i++) {
    qixii[i].classList.remove("quiz_open");
  }
  setTimeout(() => {
    switch (q_count) {
      case 0:
        quiz_i_1.classList.add("quiz_open");
        break;
      case 1:
        quiz_i_2.classList.add("quiz_open");
        break;
      case 2:
        quiz_i_3.classList.add("quiz_open");
        break;
      case 3:
        quiz_i_4.classList.add("quiz_open");
        break;
      case 4:
        quiz_i_5.classList.add("quiz_open");
        q_subm.classList.remove("q_subm-b");
        show_btn();

        break;
    }
  }, 350);
}
function check_in(input, mess, num) {
  //debugger
  if (input.value === "") {
    q_err.innerHTML =
      q_err.innerHTML +
      `<div onclick="q_count = ${+num} , main_qqq()" > <span>${
        num + 1
      }</span> ${mess}</div>`;
  } else if (input.value === "Выберите услугу") {
    q_err.innerHTML =
      q_err.innerHTML +
      `<div onclick="q_count = ${+num} , main_qqq()" > <span>${
        num + 1
      }</span> ${mess}</div>`;
  } else if (input.value === "Выберите объект") {
    q_err.innerHTML =
      q_err.innerHTML +
      `<div onclick="q_count = ${+num} , main_qqq()" > <span>${
        num + 1
      }</span> ${mess}</div>`;
  }
}
let ffff = false;
let gggg = false;

function check_inn_v() {
  if (q_count === 4) {
    switch (q_count) {
      case 0:
        check_in(quiz_i_1__in, "1 Укажите ваше имя", 0);
        break;
      case 1:
        check_in(quiz_i_2__in, "2 Выберите из списка", 1);
        break;
      case 2:
        check_in(quiz_i_3__in, "3 Введите площадь м2", 2);
        break;
      case 3:
        check_in(
          quiz_i_4__in,
          "4 Введите электронную почту в правильном формате",
          3
        );
        break;
      case 4:
        check_in(
          quiz_i_5__in,
          "5 Введите Номер телефонa в правильном формате",
          4
        );

        break;
    }
  }
}

document.addEventListener("click", function () {
  if (event.target.classList[0] == "q_next") {
    q_swipe_next();
    main_qqq();
  }
  if (event.target.classList[0] == "q_prev") {
    q_swipe_prev();
    main_qqq();
  }
  q__countttt.innerHTML = q_count + 1;

  console.log(q_count);
  if (gggg === false) {
    ch_1();
  }
  if (ffff === false) {
    kef();
  }
  function ch_1() {
    q_next.addEventListener("click", function () {
      q_err.innerHTML = "";
      if (q_count === 3) {
        check_in(quiz_i_1__in, "Выберите объект из списка", 0);
        check_in(quiz_i_2__in, "Введите площадь м2", 1);
        check_in(quiz_i_3__in, "Выберите услугу из списка", 2);
        check_in(quiz_i_4__in, "Укажите ваше имя", 3);
        // check_in(
        //   quiz_i_5__in,
        //   "5 Введите Номер телефонa в правильном формате",
        //   4
        // );
      } else if (q_count === 4) {
        check_in(quiz_i_1__in, "Выберите объект из списка", 0);
        check_in(quiz_i_2__in, "Введите площадь м2", 1);
        check_in(quiz_i_3__in, "Выберите услугу из списка", 2);
        check_in(quiz_i_4__in, "Укажите ваше имя", 3);
        check_in(
          quiz_i_5__in,
          "Введите Номер телефонa в правильном формате",
          4
        );
      }
    });
    gggg = true;
  }

  function kef() {
    main_qqq();
    ffff = true;
  }
  let inputPres = document.querySelector(".inputPres");
  let selectPres = document.querySelector(".sel");
  let option = document.querySelectorAll("option");
  // debugger;
  document.addEventListener("click", (e) => {
    if (
      e.target.classList[0] === "sel" &&
      e.target.value !== "Выберите объект"
    ) {
      q_prev.removeAttribute("disabled", "");
      q_next.removeAttribute("disabled", "");
    } else if (
      e.target.classList[0] === "sel1" &&
      e.target.value !== "Выберите услугу"
    ) {
      q_prev.removeAttribute("disabled", "");
      q_next.removeAttribute("disabled", "");
    } else if (e.target.classList[0] === "sel1") {
      q_next.setAttribute("disabled", "");
    } else if (e.target.classList[0] === "sel") {
      q_next.setAttribute("disabled", "");
    }
  });
  document.addEventListener("input", (e) => {
    if (e.target.value !== "") {
      // q_prev.setAttribute("disabled");
      q_next.removeAttribute("disabled", "");
    } else {
      q_next.setAttribute("disabled", "");
    }
    // q_next.removeAttribute("disabled");
  });
  q_next.addEventListener("click", () => {
    q_next.setAttribute("disabled", "");
  });
  q_prev.addEventListener("click", () => {
    if (q_count !== 0) {
      q_next.removeAttribute("disabled", "");
    }
  });
});
