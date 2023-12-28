function checkApiValues() {
    if (!$("#idInstance").val()) {
        alert("Укажите idInstance");
    } else {
        if (!$("#ApiTikenInstance").val()) {
            alert("Укажите ApiTikenInstance");
        } else {
            return 1;
        }
    }
}

$(document).ready(function() {

    $("#getSettings").click(function() {
        if (checkApiValues()) {
            url = "https://api.green-api.com/waInstance" + $("#idInstance").val() + "/getSettings/" + $("#ApiTikenInstance").val();
            $.get(url, function(data) {
                $("#responseTextarea").text(JSON.stringify(data, null, '\t'));
            });

        }

    });

    $("#getStateInstance").click(function() {
        if (checkApiValues()) {
            url = "https://api.green-api.com/waInstance" + $("#idInstance").val() + "/getStateInstance/" + $("#ApiTikenInstance").val();
            $.get(url, function(data) {
                $("#responseTextarea").text(JSON.stringify(data, null, '\t'));
            });

        }

    });

    $("#sendMessage").click(function() {

        if (checkApiValues()) {
            if (checkApiValues()) {
                url = "https://api.green-api.com/waInstance" + $("#idInstance").val() + "/sendMessage/" + $("#ApiTikenInstance").val();
                if (!$("#phoneNumber1").val()) {
                    alert("Укажите Телефон");
                } else {
                    if (!$("#messageTextarea").val()) {
                        alert("Укажите текст");
                    } else {
                        sendData = {
                            chatId: $("#phoneNumber1").val() + "@c.us",
                            message: $("#messageTextarea").val()
                        }
                        $.post(url, JSON.stringify(sendData), function(data) {
                            $("#responseTextarea").text(JSON.stringify(data, null, '\t'));
                        });

                    }
                }
            }
        }
    })

    $("#sendFile").click(function() {

        if (checkApiValues()) {
            if (checkApiValues()) {
                url = "https://api.green-api.com/waInstance" + $("#idInstance").val() + "/sendFileByUrl/" + $("#ApiTikenInstance").val();
                if (!$("#phoneNumber2").val()) {
                    alert("Укажите Телефон");
                } else {
                    if (!$("#fileUrl").val()) {
                        alert("Укажите текст");
                    } else {
                        sendData = {
                            chatId: $("#phoneNumber2").val() + "@c.us",
                            urlFile: $("#fileUrl").val(),
                            fileName: $("#fileUrl").val().split("/").slice(-1)[0]
                        }
                        console.log(sendData);
                        $.post(url, JSON.stringify(sendData), function(data) {
                            $("#responseTextarea").text(JSON.stringify(data, null, '\t'));
                        });

                    }
                }
            }
        }
    })

});

