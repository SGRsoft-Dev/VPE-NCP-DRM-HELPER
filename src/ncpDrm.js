/**
NCP DRM Site ID
 */
let siteId = process.env.NCP_DRM_SITEID;

/**
NCP API Gateway
 */
let accessKey = process.env.NCP_APIGW_ACCESSKEY;
let secretKey = process.env.NCP_API_GW_SECRETKEY;

/**
 * NCP DRM Helper
 */
class ncpDrm {

	constructor(userId) {
		this.siteId = siteId;
		this.accessKey = accessKey;
		this.secretKey = secretKey;
		this.userId = userId;
	}

	/**
	 * set user id
	 * @param userId
	 */
	setUserId(userId){
		this.userId = userId;
	}

	/**
	 * set site id
	 * @param siteId
	 */
	setSiteId(siteId){
		this.siteId = siteId;
	}

	/**
	 * set api key
	 * @param accessKey
	 * @param secretKey
	 */
	setApiKey(accessKey , secretKey){
		this.accessKey = accessKey;
		this.secretKey = secretKey;
	}
	/**
	 * create DRM token
	 * @param drmType // WIDEVINE, PLAYREADY, FAIRPLAY
	 * @param cid // contentId
	 * @returns {string}
	 */
	createToken = (drmType,cid)=>{
		if(cid){
			this.contentId = cid;
		}
		return  btoa(JSON.stringify({
			siteId: this.siteId,
			contentId: this.contentId,
			drmType,
			responseFormat: 'original',
			userId: this.userId,
		}));
	}

	/**
	 * create NCP API signature
	 * @param uri
	 * @param timestamp
	 * @param method
	 * @returns {string}
	 */
	makeSignature(uri,timestamp,method) {
		var space = " ";				// one space
		var newLine = "\n";				// new line
		if(!method) method = "GET"	;			// method
		let url = uri; // url (include query string)
		timestamp = `${timestamp}`;		// current timestamp (epoch)

		let hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, this.secretKey);
		hmac.update(method);
		hmac.update(space);
		hmac.update(url);
		hmac.update(newLine);
		hmac.update(timestamp);
		hmac.update(newLine);
		hmac.update(this.accessKey);

		let hash = hmac.finalize();

		return hash.toString(CryptoJS.enc.Base64);
	}

	/**
	 * get NCP API Gateway header Helper
	 * @param drmType
	 * @param contentsId
	 * @param uri
	 * @param accept
	 * @param method
	 * @returns {{"x-ncp-apigw-timestamp": *, "x-ncp-region_code": string, "x-ncp-iam-access-key": *, "x-ncp-apigw-signature-v2": string}}
	 */
	getApiGwHeader = (drmType,contentsId,uri,accept,method)=>{

		if(!accept) accept = '';
		let headers = {};
		let token = this.createToken(drmType,contentsId);
		let timestamp = moment().valueOf();
		if(!method) method = 'POST';

		let signature = this.makeSignature(uri, timestamp,method);
		headers = {
			'x-ncp-region_code': 'KR',
			'x-ncp-iam-access-key': this.accessKey,
			'x-ncp-apigw-timestamp': timestamp,
			'x-ncp-apigw-signature-v2': signature,
		}
		if(drmType){
			headers['x-drm-token'] = token;
		}
		if(accept){
			headers['accept'] = accept;
		}

		if(!drmType) {
		}

		return headers
	}

	/**
	 * DRM source helper
	 * @param source
	 * @param contentId
	 * @returns {{}}
	 */
	drmSourceHelper(source , contentId){

		let drm = {};

		try {
			if (source.dash) {
				drm['com.widevine.alpha'] = {
					src: source.dash,
					licenseUri: 'https://multi-drm.apigw.ntruss.com/api/v1/license',
					licenseRequestHeader: this.getApiGwHeader('WIDEVINE', contentId, '/api/v1/license')
				}

				drm['com.microsoft.playready'] = {
					src: source.dash,
					licenseUri: 'https://multi-drm.apigw.ntruss.com/api/v1/license',
					licenseRequestHeader: this.getApiGwHeader('PLAYREADY', contentId, '/api/v1/license')
				}
			}
		}catch (e) {
			console.error('NCP DRM Error : ','no Dash source')
		}

		try {
			if (source.hls) {
				drm['com.apple.fps'] = {
					src: source.hls,
					certificateUri: 'https://multi-drm.apigw.ntruss.com/api/v1/license/fairPlay',
					certificateRequestHeader: this.getApiGwHeader('FAIRPLAY', contentId, '/api/v1/license/fairPlay', 'application/json', 'GET'),
					licenseUri: 'https://multi-drm.apigw.ntruss.com/api/v1/license',
					licenseRequestHeader: this.getApiGwHeader('FAIRPLAY', contentId, '/api/v1/license'),
				}
			}
		}catch (e) {
			console.error('NCP DRM Error : ','no HLS source')
		}

		return drm;
	}
}


export default ncpDrm;
