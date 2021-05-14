$(document).ready(() => {
    $('#home-bt').click(() => {
        $('.home').removeClass('hide');
        $('.rules').addClass('hide');
        $('.commission').addClass('hide');
        $('.samples').addClass('hide');

        $('#home-bt').addClass("active");
        $('.selector').css("width", "102px")
        $('.selector').css("transform", "translate(1px)")

        removeOthers('home');
    })

    $('#rules-bt').click(() => {
        $('.home').addClass('hide');
        $('.rules').removeClass('hide');
        $('.commission').addClass('hide');
        $('.samples').addClass('hide');

        $('#rules-bt').addClass("active");
        $('.selector').css("width", "105px")
        $('.selector').css("transform", "translate(103px)")

        removeOthers('rules');
    })

    $('#commission-bt').click(() => {
        $('.home').addClass('hide');
        $('.rules').addClass('hide');
        $('.commission').removeClass('hide');
        $('.samples').addClass('hide');

        $('#commission-bt').addClass("active");
        $('.selector').css("width", "154px")
        $('.selector').css("transform", "translate(208px)")

        removeOthers('commission');
    })

    $('#samples-bt').click(() => {
        $('.home').addClass('hide');
        $('.rules').addClass('hide');
        $('.commission').addClass('hide');
        $('.samples').removeClass('hide');

        $('#samples-bt').addClass("active");
        $('.selector').css("width", "125px");
        $('.selector').css("transform", "translate(362px)");

        removeOthers('samples');
    })

    const removeOthers = (selected) => {
        switch (selected) {
            case 'home':
                $('#samples-bt').removeClass("active");
                $('#commission-bt').removeClass("active");
                $('#rules-bt').removeClass("active");
                break;
            case 'rules':
                $('#home-bt').removeClass("active");
                $('#samples-bt').removeClass("active");
                $('#commission-bt').removeClass("active");
                break;
            case 'commission':
                $('#home-bt').removeClass("active");
                $('#samples-bt').removeClass("active");
                $('#rules-bt').removeClass("active");
                break;
            case 'samples':
                $('#home-bt').removeClass("active");
                $('#commission-bt').removeClass("active");
                $('#rules-bt').removeClass("active");
                break;
        }
    }
})