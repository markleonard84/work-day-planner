$(document).ready(function() {

    //Time Functions & Variables

    $("#currentDay").append(moment().format('ddd Do MMM YYYY'));
    let renderClock = function() {
        document.getElementById("time").innerHTML =
            `
        <p>${moment().format('HH:mm:ss ')}</p>
        
        `;
    };
    renderClock();
    setInterval(renderClock, 1000);

    const saveBtn = $(".saveBtn");
    let currentTime = parseInt(moment().format("HH"));
    //Background colour change
    $(".userTaskInput").each(function() {
        let timeOnPlanner = parseInt($(this).attr("id"));
        if (currentTime > timeOnPlanner) {
            $(this).addClass("bg-danger text-white");
        }
        if (currentTime === timeOnPlanner) {
            $(this).addClass("bg-warning").removeClass("bg-danger");
        }
        if (currentTime < timeOnPlanner) {
            $(this).addClass("bg-success text-white").removeClass("bg-warning").removeClass("bg-danger");
        }

    })

    //Storage
    saveBtn.on('click', function() {
        let value = $(this).siblings(".userTaskInput").val();
        console.log(value)
        let time = $(this).siblings(".userTaskInput").attr("id");
        console.log(time)
        localStorage.setItem(time, value)
    });
    $(".hour-8").val(localStorage.getItem("8"));
    $(".hour-9").val(localStorage.getItem("9"));
    $(".hour-10").val(localStorage.getItem("10"));
    $(".hour-11").val(localStorage.getItem("11"));
    $(".hour-12").val(localStorage.getItem("12"));
    $(".hour-1").val(localStorage.getItem("13"));
    $(".hour-2").val(localStorage.getItem("14"));
    $(".hour-3").val(localStorage.getItem("15"));
    $(".hour-4").val(localStorage.getItem("16"));
    $(".hour-5").val(localStorage.getItem("17"));

    $("#clearBtn").on("click", function() {
        window.localStorage.clear();
        window.location.reload();
    });
});