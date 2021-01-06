import * as jQuery from '../node_modules/jquery/dist/jquery.js';
const $document = $(document);
const $translateInput = $('#js-translate-text-input');
const $translateOutput = $('#js-translate-text-output');
const $isTranslate = $('#isTranslate');
$document.ready(function () {
    $translateOutput.css({pointerEvents: 'none'});
    $translateOutput.text('BẢN DỊCH');

    function renderTranslateTextOutput(val) {
        $translateOutput.text(val);
    }

    async function getTranslateFromServer(valueInput) {
        const dataJSON = [{
            "src" : `${valueInput}`,
            "id" : 0
        }]
        $.ajax({
            type: "POST",
            url: 'http://54.169.255.77:5000/translator/translate',
            data: JSON.stringify(dataJSON),
            headers: {
                'Content-Type': 'application/json',
                'mode' : 'no-cors'
            },
            success: function (data) {
                data.forEach(element => {
                    element.forEach(trans => {
                        const translate = trans && trans.tgt;
                        renderTranslateTextOutput(translate);
                    })
                });
            }
        })
    }

    $isTranslate.on('click', function () {
        const valueInput = $translateInput.text();
        getTranslateFromServer(valueInput);
    })
})