import * as jQuery from '../node_modules/jquery/dist/jquery.js';
const $document = $(document);
const $translateInput = $('#js-translate-text-input');
const $translateOutput = $('#js-translate-text-output');
$document.ready(function () {
    $translateOutput.css({pointerEvents:'none'});
    $translateOutput.text('BẢN DỊCH');
    $translateInput.on('keyup', function () {
        const valueInput = $(this).text();
        renderTranslateTextOutput(valueInput);
        $translateOutput.css({pointerEvents:'auto'});
        // getTranslateFromServer();
    })
    function renderTranslateTextOutput (val) {
        $translateOutput.text(val);
    }
    // async function getTranslateFromServer() {
    //     console.log('aaaa')
    //     const proxyUrl = 'https://thawing-spire-73212.herokuapp.com/'
    //     const apiUrl = 'http://10.161.207.181:5000/translator/translate';
    //     try {
    //         const response = await fetch(proxyUrl + apiUrl, {
    //             method: 'POST',
    //             headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({"src": "I am a emloyee", "id": 0})
    //         });
    //         const data = await response.json();
    //         console.log("data", data)
    //     } catch (error) {
    //         console.log("error", error)
    //     }
    // }
})