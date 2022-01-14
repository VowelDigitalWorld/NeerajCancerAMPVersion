/*-----------------------
    magnificPopup
    -------------------------*/

    $(document).ready(function () {
        $('.gallerypopup').magnificPopup({
            type: 'image',
            delegate: 'a',
            gallery: {
                enabled: true
            },
        });
    });
    