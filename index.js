const contentLetterSrart_actived = "Heyyy Misiraaaa. happy birtdhay to you my dear frnduuuuuu" //Lời mở đầu cho bức thư
const mainContentLetter = "Nothing much but you where there for me when i needed the most and i am truely lucky to have you in my life. It may feel a bit cringe but i wanted to say this to you. Even if our connection are less, still whenever i talk to you its really good. Once again Wishing you a very Happy birthday and i really miss our old days." //Nội dung của bức thư

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "img/mis_pic.jpeg";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "img/mis_pic2.jpeg"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

document.addEventListener("DOMContentLoaded", function () {
    let recieveButton = document.querySelector(".recieve");
    
    if (recieveButton) {
        recieveButton.addEventListener("click", () => {
            console.log("Letter Clicked!"); // Debugging

            let startLetter = document.querySelector(".startLetter");
            let startForm = document.querySelector(".startForm");

            console.log("startLetter:", startLetter);
            console.log("startForm:", startForm);

            if (startLetter && startForm) {
                startLetter.classList.remove("close");
                startForm.classList.remove("close");

                startForm.style.bottom = "0%";
                startLetter.style.opacity = "1";
                startForm.style.opacity = "1";

                setTimeout(() => {
                    startLetter.classList.add("close");

                    setTimeout(() => {
                        startForm.classList.add("close");
                        startForm.style.bottom = "100%";

                        let getTypeDevice = document.documentElement.clientWidth;
                        console.log("Device Width:", getTypeDevice);

                        setTimeout(() => {
                            if (getTypeDevice <= 768) {
                                createLight(20);
                            } else {
                                createLight(40);
                            }
                        }, 300);
                    }, 500);
                }, 1000);
            } else {
                console.log("Elements not found!");
            }
        });
    } else {
        console.log("Recieve button not found!");
    }
});




// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
//Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".backgroundParty");
    const blurLv = [2, 4];
    const count = a;
    const allDefaultColor = ["red", "lime", "yellow", "orange", "blue"]

    for (var i = 0; i < count; i++) {
        var randomLeft = 0;
        randomLeft = Math.floor(Math.random() * width);
        var randomTop = 0;
        randomTop = Math.floor(Math.random() * height / 2);
        var color = "white";
        var blur = Math.floor(Math.random() * 2);
        var widthEle = Math.floor(Math.random() * 5) + 15;
        var moveTime = Math.floor(Math.random() * 4) + 4;

        var div = document.createElement("div");
        div.classList.add = "snow";
        div.style.position = "absolute";
        div.style.backgroundColor = allDefaultColor[Math.floor(Math.random() * 5)]
        div.style.borderRadius = Math.floor(Math.random() * 10 + 10).toString() + "px"

        div.style.height = "0px";
        div.style.width = "0px";

        div.style.height = widthEle * Math.floor(Math.random() * 4 + 1) + "px";
        div.style.width = widthEle + "px";
        div.style.marginLeft = randomLeft + "px"
        div.style.marginTop = randomTop + "px"
        div.style.filter = "blur(" + blurLv[blur] + "px" + ")"
        div.style.animation = "moveLight " + moveTime + "s ease-in-out infinite";

        container.appendChild(div);
    }
}