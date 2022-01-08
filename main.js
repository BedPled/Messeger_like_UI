let chat = document.getElementById('chat')
let textInput = document.getElementById('textInput')
let send = document.getElementById('send')

function scrollMessagesToBottom() {
    chat.scrollTop = chat.scrollHeight
}

function onSend() {
    let message = textInput.value

    if (message) {
        document.getElementById('chat').innerHTML += `<div class="message" style="justify-content: right">
                                                                       <div class="message__to">${message}</div>
                                                                   </div>`
        textInput.value = ''
        scrollMessagesToBottom()

        setTimeout(() => {
            document.getElementById('chat').insertAdjacentHTML(
                'beforeend',
                `<div class="message message__from" style="justify-content: left">
                    pupa
                  </div>`
            );
            scrollMessagesToBottom()
        }, 1000);


    }
}

scrollMessagesToBottom()

send.addEventListener('click', onSend)