const date = document.getElementById("date");
const year = new Date().getFullYear();

date.textContent = year;

document.getElementById('btn').addEventListener('click', function () {
    document.querySelector('nav ul').style.display = "block";
    if ('block') {
        document.getElementById('btn').style.display = 'none';
    }
    else {
        document.getElementById('btn').style.display = 'block';
    }
});
document.getElementById('close-btn').addEventListener('click', function () {
    document.querySelector('nav ul').style.display = "none";
    if ('none') {
        document.getElementById('btn').style.display = 'block';
    }
    else {
        document.getElementById('btn').style.display = 'none';
    }
});

document.getElementById('pop-btn').addEventListener('click', function () {
    document.querySelector('#pop-up').style.display = "block";
})
document.getElementById('close-pop').addEventListener('click', function () {
    document.querySelector('#pop-up').style.display = "none";
});

/*const cursor = document.querySelector('#cursor');

document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";
})*/

