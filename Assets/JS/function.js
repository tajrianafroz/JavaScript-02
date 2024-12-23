// :::: NAV START ::::

let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");
let body = document.querySelector("body");
let nav = document.querySelector("nav");

moon.addEventListener("click", () => {
  moon.classList.add("change");
  body.classList.add("swing");
  nav.classList.add("bg_olive");
});

sun.addEventListener("click", () => {
  moon.classList.remove("change");
  body.classList.remove("swing");
  nav.classList.remove("bg_olive");
});

let initvalue = 0;
window.addEventListener("scroll", function () {
  if (initvalue > window.scrollY) {
    nav.classList.add("active_bar");
  } else {
    nav.classList.remove("active_bar");
  }
  initvalue = window.scrollY;
});

// :::: NAV END ::::

// :::: SIDE MENU START ::::

let book = document.querySelector(".book");
let sideMenu = document.querySelector("#sideMenu");
let cross = document.querySelector(".cross");

book.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

cross.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});

sideMenu.addEventListener("click", function (e) {
  if (e.target.classList.contains("active")) {
    sideMenu.classList.remove("active");
  }
});

// :::: SIDE MENU END ::::

// :::: LOG IN START ::::

let loginBox = document.querySelector(".loginBox");
let logIn = document.querySelector(".log_in");
let loginClose = document.querySelector(".loginClose");

logIn.addEventListener("click", () => {
  if (!loginBox.classList.contains("loginBox_active")) {
    loginBox.classList.add("loginBox_active");
  }
});
loginClose.addEventListener("click", () => {
  if (loginBox.classList.contains("loginBox_active")) {
    loginBox.classList.remove("loginBox_active");
  }
});
loginBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("loginBox_active")) {
    loginBox.classList.remove("loginBox_active");
  }
});

let loginEye = document.querySelector(".loginEye");
let loginPassword = document.querySelector(".loginPassword");

loginEye.addEventListener("click", () => {
  if (loginPassword.type == "password") {
    loginPassword.type = "text";
    loginEye.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  } else {
    loginPassword.type = "password";
    loginEye.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  }
});

// :::: LOG IN END ::::

// :::: SIGN UP START ::::
let signupBox = document.querySelector(".signupBox");
let signUp = document.querySelector(".sign_up");
let signupClose = document.querySelector(".signupClose");

signUp.addEventListener("click", () => {
  if (!signupBox.classList.contains("signupBox_active")) {
    signupBox.classList.add("signupBox_active");
  }
});
signupClose.addEventListener("click", () => {
  if (signupBox.classList.contains("signupBox_active")) {
    signupBox.classList.remove("signupBox_active");
  }
});
signupBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("signupBox_active")) {
    signupBox.classList.remove("signupBox_active");
  }
});

let signupEye = document.querySelector(".signupEye");
let signupPassword = document.querySelector(".signupPassword");

signupEye.addEventListener("click", () => {
  if (signupPassword.type == "password") {
    signupPassword.type = "text";
    signupEye.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  } else {
    signupPassword.type = "password";
    signupEye.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  }
});

// :::: SIGN UP END ::::

// :::: USER ACCOUNT START ::::
let userBox = document.querySelector(".userBox");
let userIcon = document.querySelector(".user");
let userClose = document.querySelector(".userClose");

userIcon.addEventListener("click", () => {
  if (!userBox.classList.contains("userBox_active")) {
    userBox.classList.add("userBox_active");
  }
});
userClose.addEventListener("click", () => {
  if (userBox.classList.contains("userBox_active")) {
    userBox.classList.remove("userBox_active");
  }
});
userBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("userBox_active")) {
    userBox.classList.remove("userBox_active");
  }
});

let logOut = document.querySelector(".log_out");

logOut.addEventListener("click", () => {
  alert("Are you sure that you want to log out?");
});

// :::: USER ACCOUNT END ::::

// :::: SCROLL START ::::

let scroll = document.querySelector(".scroll");

window.addEventListener("scroll", function () {
  let totalHeight = body.clientHeight;
  let fromTop = window.scrollY;
  let internalHeight = window.innerHeight;
  let subHeight = totalHeight - internalHeight;
  let result = Math.round((100 / subHeight) * fromTop);

  scroll.style.background = `conic-gradient(#30336b, #30336b ${result}%, #38ada9 ${result}%)`;
});

// :::: SCROLL END ::::

// :::: PROGRESS BAR START ::::

// let scrollBar = document.querySelector('#scroll_bar');

// window.addEventListener('scroll', function(){
//     if(window.scrollY > 300){
//         scrollBar.classList.add('growing_bar');
//     }else{
//         scrollBar.classList.remove('growing_bar');
//     }
// });

// :::: PROGRESS BAR END ::::
