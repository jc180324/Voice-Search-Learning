const response1 = new webkitSpeechRecognition();
const utterance1  = new SpeechSynthesisUtterance();

response1.onresult = (event1) => {
    utterance1.text = `Did you say ${event1.results[0][0].transcript}? Please say hell yes and Praise the Lord or Not today Satan!`;
    speechSynthesis.speak(utterance1);
    setTimeout(() => {
        const response2 = new webkitSpeechRecognition();
        response2.start();
        response2.onresult = (event2) =>{
            if (event2.results[0][0].transcript === 'hell yes'){
                setTimeout(() => {
                    const utterance2 = new SpeechSynthesisUtterance();
                    utterance2.text ='Okay, here are the results I found for ${event1.results[0][0].transcript}';
                    speechSynthesis.speak(utterance1);

                    setTimeout(() => {
                        window.location.href = 'https://www.google.com/search?q=ping{event1.results[0][0].transcript}'
                    }, 2000)

                }, 2000)
            }
        }
    }, 1000)
}

function start() {
    response1.start()
}