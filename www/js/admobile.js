var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) {
    admobid = {
        banner: 'ca-app-pub-9926224915944552/7203894422',
        interstitial: 'ca-app-pub-9926224915944552/7203894422'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = {
        banner: 'ca-app-pub-6869992474017983/4806197152',
        interstitial: 'ca-app-pub-6869992474017983/7563979554'
    };
} else {
    admobid = {
        banner: 'ca-app-pub-6869992474017983/8878394753',
        interstitial: 'ca-app-pub-6869992474017983/1355127956'
    };
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

function initApp() {
    if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

    AdMob.createBanner( {
        adId: admobid.banner,
        isTesting: true,
        overlap: true,
        offsetTopBar: false,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        bgColor: 'black'
    });

    AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        autoShow: true
    });
  }
