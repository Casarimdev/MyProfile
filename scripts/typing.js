const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})




let text = document.getElementById("elementEl1")

text.style.display = 'none'

        function typeWriter(el) {
            const textArray = el.innerHTML.split('');
            el.innerHTML = '';
            textArray.forEach((letter, i) =>
                setTimeout(() => (el.innerHTML += letter), 95 * i)
            );


            text.style.content = "" 
            // setInterval(() => typeWriter(text2), 8000);

        }


        // typeWriter(text);


sleep(3600).then(() => text.style.display = 'block')        
sleep(3601).then(() => typeWriter(text))