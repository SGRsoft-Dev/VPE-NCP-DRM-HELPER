import vpeDrmHelper from 'vpe-drm-helper';

window.player = null;

let contentId = 'ey-drm-123'; //컨텐츠 아이디 대입
let userId = 'test-user';
let dashUrl = 'https://kho8tpmo2151.beta-edge.naverncp.com/live/video/ls-20231114151520-ICOkH/live.mpd';
let hlsUrl = 'https://kho8tpmo2151.beta-edge.naverncp.com/live/video/ls-20231114151520-ICOkH/index.m3u8';

//DRM Helper
const NDRM = new vpeDrmHelper(userId);

NDRM.setBetaMode();

document.addEventListener('DOMContentLoaded', async () => {

    // 재생소스 구성
    let drmSource = NDRM.drmSourceHelper({
        dash : dashUrl,
        hls : hlsUrl,
    },contentId);


    window.drmPlayer = await ncplayerDRM('player',{
        playlist:[
            {
                drm:drmSource,
                description:{
                    title:"DRM 테스트",
                    profile_name:"네이버클라우드",
                    profile_image:"https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202208/d127c8db642716d84b3201f1d152e52a.png",
                }
            },
        ],
        autostart:true,
        muted:true,
        progressBarColor:"#ff0000",
    });

    document.querySelector('.vpe-drm-state').innerHTML = await checkDRM();
});
