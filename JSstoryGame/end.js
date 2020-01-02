// moral,wealth,reputation

let end={
    moralHigh:'你心中滿懷正義感，某次出任務時被夥伴不道德的行為給氣死',
    wealthHigh:'你瘋狂賺錢，視錢財如性命，最後被賊人盯上劫財殺死',
    reputationHigh:'你聲名遠播，人緣太好大家都要找你幫忙，最後過勞死',
    moralLow:'你道德亂喪，被檢舉關到死',
    wealthLow:'你窮到脫褲，餓死',
    reputationLow:'你臭名遠播，出任務被同伴背刺害死',
}

function checkEnd() {
    $('.log').html(log)
    if(moral>1) {
        $('#test').hide()
        $('#restart').show()
        $('.card-title').text('你的結局')
        $('.card-text').text(end['moralHigh'])
    }
    if(wealth>1) {
        $('#test').hide()
        $('#restart').show()
        $('.card-title').text('你的結局')
        $('.card-text').text(end['wealthHigh'])
    } 
    if(reputation>1) {
        $('#test').hide()
        $('#restart').show()
        $('.card-title').text('你的結局')
        $('.card-text').text(end['reputationHigh'])
    }
    if(-1>moral) {
        $('#test').hide()
        $('#restart').show()
        $('.card-title').text('你的結局')
        $('.card-text').text(end['moralLow'])
    }
    if(-1>wealth) {
        $('#test').hide()
        $('#restart').show()
        $('.card-title').text('你的結局')
        $('.card-text').text(end['wealthLow'])
    }
    if(-1>reputation) {
        $('#test').hide()
        $('#restart').show()
        $('.card-title').text('你的結局')
        $('.card-text').text(end['reputationLow'])
    }
}
