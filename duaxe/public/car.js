//khai báo biến và gán giá trị ban đầu
carOne = 1;
carTwo = 2;
var STEP = 100;
var y = 0;
var x = 0;
var x1 = 100;
var x2 = 100;

// lấy các phần tử html theo id
car1 = document.getElementById('car_1');
car2 = document.getElementById('car_2');
xang1 = document.getElementById('xang1');
xang2 = document.getElementById('xang2');
const log = document.getElementById('log');
document.addEventListener('keyup', logKey); // lắng nghe sự kiện từ bàn  phím

// xử lý sự kiện từ bàn phím
function logKey(e) {
    console.log(e['key'])
    switch (e['key']) {
        case '1':
            x += STEP;
            x1 -= 1;
            car1.style.paddingLeft = x + 'px';
            xang1.style.width = x1 + 'px';
            break;
        case '2':
            y += STEP;
            x2 -= 1;
            car2.style.paddingLeft = y + 'px';
            xang2.style.width = x2 + 'px';
            break;
    }
    //kiểm tra điều kiện chiến thắng
    if (x == 1000) {
        alert('yellow car chiến thắng');
        repeat();
    } else if (y == 1000) {
        alert('red car chiến thắng');
        repeat();
    }
}

// đặt lại các giá trị và thuộc tính về giá trị ban đầu
function repeat() {
    x = 0; y = 0;
    x1 = 100; x2 = 100;
    car1.style.paddingLeft = x + 'px';
    car2.style.paddingLeft = y + 'px';
    xang1.style.width = x1 + 'px';
    xang2.style.width = x2 + 'px';
}

function start() {
    red = document.getElementById('red');
    yellow = document.getElementById('yellow');
    green = document.getElementById('green');
    handleRed = setInterval(bgred, 1000);

    function bgred() {
        resetColor()
        red.style.backgroundColor = 'red';
        clearInterval(handleRed);
        handleYellow = setInterval(bgyellow, 1000);
    }

    function bgyellow() {
        resetColor()
        yellow.style.backgroundColor = 'yellow';
        clearInterval(handleYellow);
        handleGreen = setInterval(bggreen, 1000);
    }

    function bggreen() {
        resetColor()
        green.style.backgroundColor = 'green';
        clearInterval(handleGreen);
    }

    function resetColor() {
        red.style.backgroundColor = "white";
        yellow.style.backgroundColor = "white";
        green.style.backgroundColor = "white";
    }
}
