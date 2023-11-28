## NAVER CLOUD PLATFORM Video Player Enhancement + One Click Multi DRM 연동DEMO

NAVER CLOUD PLATFORM 에서 제공중인 Video Player Enhancement 를 이용하여 One Click Multi DRM 을 적용한 데모입니다.

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/db85e25df98bf242d0ae25724a975dd7.png)


## 소스코드
[https://github.com/SGRsoft-Dev/VPE-NCP-DRM-HELPER](https://github.com/SGRsoft-Dev/VPE-NCP-DRM-HELPER)


*** 


## 필수
- 네이버클라우드 플랫폼 Video Player Enhancement SDK URL 
- 네이버클라우드 플랫폼 Video Player Enhancement 유료 라이선스
- 네이버클라우드 플랫폼 One Click Multi DRM 유료 라이선스
- Apple FairPlay Streaming 인증서

***

## 제한사항

- 현재 데모코드에 사용된 필수 요소들은 개발자 로컬 테스트에서만 동작합니다. (http://localhost)
- 네이버클라우드 플랫폼 API Key가 필요합니다.
- 네이버클라우드 플랫폼 Video Player Enhancement SDK URL이 필요합니다.
- 네이버클라우드 플랫폼 Video Player Enhancement 유료 라이선스가 필요합니다.
- 네이버클라우드 플랫폼 One Click Multi DRM 유료 라이선스가 필요합니다.
- Apple FairPlay Streaming 인증서가 필요합니다.
- 
***


## 사용자 가이드
### NAVERCLOUD PLATFORM Video Player Enhancement
https://guide.ncloud-docs.com/docs/ko/vpe-overview

### VPE 재생소스 설정 가이드
https://guide.ncloud-docs.com/docs/vpe-example-source

### VPE Web 설정 가이드
https://guide.ncloud-docs.com/docs/vpe-web

### One Click Multi DRM 가이드
https://guide.ncloud-docs.com/docs/multidrm-overview

### One Click Multi DRM API 가이드
https://api.ncloud-docs.com/docs/one-click-multi-drm-api-overview


### Live Station 가이드
https://guide.ncloud-docs.com/docs/livestation-overview

### VOD Station 가이드
https://guide.ncloud-docs.com/docs/vodstation-vodstationoverview


*** 




## NCP Video Player Enhancement SDK 설정
![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/7a602c53cc6a0b69759031e44ad8e5d9.png)

네이버클라우드 콘솔에서 Video Player Enhancement 진입

***

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/bc8f9b9850f93396e7e07ca2c1c9cd4d.png)

플레이어를 신규로 생성합니다.

***

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/37fc51c8dccfdf2711ba7500203c685c.png)

서비스를 운영할 도메인을 입력합니다.

***

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/6ad95ea2ed84a4412224a68f17d22c1b.png)

생성된 플레이어의 SDK URL를 복사합니다.

***


### VPE SDK 적용하기

```html
<!DOCTYPE html>
<html lang="ko">
<head>
	...
	<script src="{VPE SDK URL}"></script>
	...
</head>
<body>
```
- VPE SDK를 HTML 페이지에 추가합니다.

***

## One Click Multi DRM 설정하기

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202311/79eabb71e08a915ece298b368e804686.png)

- 네이버클라우드 콘솔에서 One Click Multi DRM 진입

### DRM Site 생성하기
![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202311/8a9de6d5973256aea4e942153d054bf6.png)

1. +Site 버튼을 클릭하여 사이트를 생성합니다.
2. 사이트명을 입력합니다.
3. FairPlay Streaming 인증서를 등록합니다.

### Apple FPS 인증서 등록
![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202311/0a40855558b78a49912f5cac4a0d958c.png)

1. FairPlay Streaming 인증서를 등록합니다.
2. 인증서 다운로드시 사용한 개인키를 등록합니다.
3. 개인키 암호 문자열을 입력합니다.
4. ASK 문자열을 입력합니다.

### DRM Site ON
![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202311/aa5b9d9b566e6f60718ea96f54e155a0.png)

1. 생성된 사이트를 선택 후 Site ON 버튼을 클릭합니다.

*** 

## Live Station DRM 채널 생성하기

### Live Station 신규 채널을 생성합니다.
![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202311/a28717f06c0b0165347eff11797a58f9.png)

1. 채널명 입력
2. 멀티 DRM을 이용하기 위해 HLS,DASH 선택
3. Multi DRM 사용함 선택 및 DRM Site 선택
4. Contests ID 설정 (콘텐츠를 구분하기 위한 문자열)

### ⚠️ 각 브라우저마다 DRM 지원 현황이 다릅니다.
> Chrome 브라우저는 재생 Dash / Widevine <br>
> MS Edge 브라우저는 재생 Dash / PlayReady <br>
> Safari 브라우저는 재생 HLS / FairPlay Streaming

### 채널 상세보기
![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202311/209b3e3dc66f752b3fe72b18bdb1a1dc.png)
- 채널 상세보기에 Multi DRM Site 정보가 표시됩니다.
- Contents ID를 DRM 토큰 생성시 필요하오니 기록해 두시기 바랍니다.


*** 

## VOD Station DRM 채널 생성하기

### VOD Station 설정 주의사항

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/bb9d8a4071ce9d0bb9d92cb5033d8e5d.png)
- VOD Station 멀티 DRM을 구현하기 위해선 2개의 채널을 생성해야합니다.
- 1개의 채널은 Widevine/PlayReady DRM을 위한 채널을 생성해야합니다.
- 1개의 채널은 FairPlay DRM을 위한 채널을 생성해야합니다.
- FairPlay DRM 채널은 HLS만 지원합니다.
- Widevine/PlayReady DRM 채널은 DASH만 지원합니다.

***

### Widevine/PlayReady DRM 채널 설정
![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202311/8493581d0c73611146e2690645e18677.png)

- 콘덴츠 ID를 입력합니다. DRM 토큰 생성시 필요합니다.
- DRM System ID는 Widevine/PlayReady DRM 공통값입니다.
```
9a04f079-9840-4286-ab92-e65be0885f95
edef8ba9-79d6-4ace-a3c8-27dcd51d21ed
```
- DRM Key URL은 Widevine/PlayReady DRM 공통값입니다.

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202311/c9e88abfb79cb26d66790ca60b066e99.png)

- NCLOUD 콘솔 > One Click Multi DRM > DRM Site > KMS 토큰 복사
```
https://kms.pallycon.com/v2/cpix/pallycon/getKey/{KMS 토큰}
```

***

### FairPlay DRM 채널 설정

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202311/8fb3e60c0c7facd3fe2eb5885f5f5588.png)

- 펠리컨 대시보드 > 멀티DRM > DRM 세팅 > 사이트키 복사
- DRM System ID는 FairPlay DRM 공통값입니다.
```
94ce86fb-07ff-4f43-adb8-93d2fa968ca2
```
- DRM Key URL은 Widevine/PlayReady DRM 공통값입니다.

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202311/c9e88abfb79cb26d66790ca60b066e99.png)

- NCLOUD 콘솔 > One Click Multi DRM > DRM Site > KMS 토큰 복사
```
https://kms.pallycon.com/v2/cpix/pallycon/getKey/{KMS 토큰}
```

*** 



## NAVERCLOUD PLATFORM API KEY 설정

### DRM 토큰 생성을 위한 API KEY 설정

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202311/4efd6a3beeeb4e80d106926cbcb274c4.png)

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202311/6d1bc21d1bed88c84eb24d2d6a323b19.png)

### ⚠️ 주의사항
> 네이버클라우드 인증키는 DRM 연동시 토큰을 생성하거나 인증서를 연동할때 사용됩니다. <br>
> 네이버클라우드 인증키는 절때 노출되어선 안됩니다. <br>

*** 

### One Click Multi DRM 인증 개요
https://api.ncloud-docs.com/docs/one-click-multi-drm-api-overview

### NCLOUD API 사용을 위한 시그니처 생성 방법
https://api.ncloud-docs.com/docs/common-ncpapi

*** 

## VPE DRM 토큰 생성하기
#### DRM 콘텐츠 인증을 위한 토큰 생성 및 VPE 연동 가이드입니다.

> ⚠️ 주의사항<br>
> - 해당 코드는 반드시 Backend에서 처리되어야 합니다.<br>

### .env 파일 생성하기

```env
#.env

NCP_DRM_SITEID={Onc Click Multi DRM Site ID}
NCP_APIGW_ACCESSKEY={NAVERCLOUD PLATFORM ACCESS KEY}
NCP_API_GW_SECRETKEY={NAVERCLOUD PLATFORM SECRET KEY}

```
- NCP_DRM_SITEID는 One Click Multi DRM Site ID를 입력합니다.
- NCP_APIGW_ACCESSKEY는 네이버클라우드 플랫폼 ACCESS KEY를 입력합니다.
- NCP_API_GW_SECRETKEY는 네이버클라우드 플랫폼 SECRET KEY를 입력합니다.

> ⚠️ 주의사항<br> 
>  - ACCESS KEY와 SECRET KEY는 절대로 노출되어선 안됩니다.<br>
>  - .env 파일은 절대로 GIT에 업로드 되어선 안됩니다.<br>
>  - .env 파일은 로컬에서만 사용되어야 합니다.<br>


***

## DRM Helper 사용하기

### DRM 토큰 생성하기
```javascript
 //NCP DRM Helper
import ncpDrm from './ncpDrm.js';

let contentId = 'VIDEO24'; //컨텐츠 아이디 대입
let userId = 'test-user'; //사용자 아이디 대입

//DRM Helper
const NDRM = new ncpDrm(userId);

let widevineToken = NDRM.createToken('WIDEVINE',contentId); //와이드바인 토큰
let playreadyToken = NDRM.createToken('PLAYREADY',contentId); // 플레이레디 토큰
let fairplayToken = NDRM.createToken('FAIRPLAY',contentId); // 페어플레이 토큰
```

### NCP API Signature 생성하기
```javascript
//NCP DRM Helper
import ncpDrm from './ncpDrm.js'; 

let contentId = 'VIDEO24'; //컨텐츠 아이디 대입
let userId = 'test-user'; //사용자 아이디 대입

//DRM Helper
const NDRM = new ncpDrm(userId);

let timestamp = moment().valueOf();
let signature = NDRM.makeSignature('/api/v1/license',timestamp, 'POST');
```

***

## DRM Helper를 이용하여 재생소스 구성 후 VPE Player 연동하기
```javascript
//NCP DRM Helper
import ncpDrm from './ncpDrm.js'; 

let contentId = 'VIDEO24'; //컨텐츠 아이디 대입
let userId = 'test-user'; //사용자 아이디 대입

//DRM Helper
const NDRM = new ncpDrm(userId);

// DRM Helper를 이용하여 재생소스 구성
let drmSource = NDRM.drmSourceHelper({
	dash : '{DASH 재생소스}',
	hls : '{HLS 재생소스}',
},contentId);


window.player = null;
document.addEventListener('DOMContentLoaded', async () => {

    window.drmPlayer = await ncplayerDRM('player',{
        playlist:[
            {
                drm:drmSource, //DRM Helper에서 생성된 재생소스를 입력합니다.
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
	
});

```

***


## 테스트 실행 방법

```bash
$ npm install
$ npm run dev
```


***


## 문의하기


SGRSOFT 개발팀  : dev@sgrsoft.com

채널톡 : https://sgrsoft.channel.io/home

영업 및 네이버클라우드 가입 문의 : biz@sgrsoft.com

SGRSOFT를 통하여 네이버클라우드 플랫폼 크래딧을 지원 받을 수 있습니다. (최대 300만원)


