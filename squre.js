
function submit(){
    let DD = document.querySelector("#date").value;
    let MM = document.querySelector("#month").value;
    let CC = document.querySelector("#century").value;
    let YY = document.querySelector("#year").value;
    const v = document.querySelector("input").value;
    
    if(v!==""){
        if(DD>0 && DD<=31)
        {
            if(MM>0 && MM<=12)
            {
                document.querySelector(".DD").innerHTML=DD;
                document.querySelector(".MM").innerHTML=MM;
                document.querySelector(".CC").innerHTML=CC;
                document.querySelector(".YY").innerHTML=YY;

                document.querySelector(".e1").innerHTML = formatTwoDigits(add(YY, 1));
                document.querySelector(".e2").innerHTML = formatTwoDigits(CC - 1);
                document.querySelector(".e3").innerHTML = formatTwoDigits(MM - 3);
                document.querySelector(".e4").innerHTML = formatTwoDigits(add(DD, 3));

                document.querySelector(".f1").innerHTML = formatTwoDigits(MM - 2);
                document.querySelector(".f2").innerHTML = formatTwoDigits(add(DD, 2));
                document.querySelector(".f3").innerHTML = formatTwoDigits(add(YY, 2));
                document.querySelector(".f4").innerHTML = formatTwoDigits(CC - 2);

                document.querySelector(".g1").innerHTML = formatTwoDigits(add(CC, 1));
                document.querySelector(".g2").innerHTML = formatTwoDigits(YY - 1);
                document.querySelector(".g3").innerHTML = formatTwoDigits(add(DD, 1));
                document.querySelector(".g4").innerHTML = formatTwoDigits(MM - 1);
                
                clearAllFields();
            }
            else{
                clearAllFields();
                alert("invalid month");
            }
        }
        else{
            clearAllFields();
            alert("invalid date");
        }
    }
    else{
        alert("enter the date");
    }
}

function add(a , b)
{
    for (i = 1; i <= b; i++) 
    {
        a++;
    }
    return a;
}

function clearAllFields() {
    const inputFields = document.querySelectorAll("input");
    inputFields.forEach(field => {
        field.value = null;
    });
}

function handleArrowKeys(event, nextFieldId, prevFieldId) {
    const inputFields = document.querySelectorAll("input");
    const currentIndex = Array.from(inputFields).indexOf(event.target);

    if (event.key === "ArrowUp") {
        event.preventDefault();
        const previousIndex = currentIndex > 0 ? currentIndex - 1 : inputFields.length - 1;
        inputFields[previousIndex].focus();
    } else if (event.key === "ArrowDown") {
        event.preventDefault();
        const nextIndex = currentIndex < inputFields.length - 1 ? currentIndex + 1 : 0;
        inputFields[nextIndex].focus();
    } else if (event.key === "Enter") {
        event.preventDefault();
        if (nextFieldId) {
            document.getElementById(nextFieldId).focus();
        }
    } else if (event.key === "Shift" && prevFieldId) {
        document.getElementById(prevFieldId).focus();
    }
}

function formatTwoDigits(value) {
    value = parseInt(value);
    if (isNaN(value)) {
        return "00";
    }

    if (value >= 0) {
        return (value < 10 ? "0" : "") + value;
    } else {
        const absoluteValue = Math.abs(value);
        return "-" + (absoluteValue < 10 ? "0" : "") + absoluteValue;
    }
}
