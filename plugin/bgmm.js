/**
██████   █████  ██████  ██   ██     ███████  █████  ███    ███ ██    ██ ███████  █████      ██    ██ ███████ 
██   ██ ██   ██ ██   ██ ██  ██      ██      ██   ██ ████  ████ ██    ██    ███  ██   ██     ██    ██ ██      
██   ██ ███████ ██████  █████       ███████ ███████ ██ ████ ██ ██    ██   ███   ███████     ██    ██ ███████ 
██   ██ ██   ██ ██   ██ ██  ██           ██ ██   ██ ██  ██  ██ ██    ██  ███    ██   ██      ██  ██       ██ 
██████  ██   ██ ██   ██ ██   ██     ███████ ██   ██ ██      ██  ██████  ███████ ██   ██       ████   ███████ 
                                                                                                             
                                                                                                             
 **/











/** 



This File No Code


**/


























function _0x7b8d(_0x46fb00,_0x35aead){const _0x3358fb=_0x3358();return _0x7b8d=function(_0x7b8d23,_0x575a90){_0x7b8d23=_0x7b8d23-0x17c;let _0x4abb15=_0x3358fb[_0x7b8d23];return _0x4abb15;},_0x7b8d(_0x46fb00,_0x35aead);}const _0xc6912f=_0x7b8d;function _0x3358(){const _0x48781f=['12DRxAvH','2385725AiwFKD','downloadAndSaveMediaMessage','general','util','axios','child_process','audio','findOne','text','2155111QqUBJB','addbgm','sendMessage','fs-extra','Uhh\x20Please\x20give\x20Bgm\x20Song\x20NAme','There\x27s\x20an\x20Error\x20While\x20Adding\x20Bgm\x20Song','4270648rOMXsV','mtype','4814VLSBHd','ffmpeg\x20-i\x20./blackScreen.mp4\x20-i\x20','ffmpeg\x20-f\x20lavfi\x20-i\x20color=c=black:s=1280x720:d=','error','Error\x20updating\x20BGM:','4TCzWBY','\x27_\x20does\x20not\x20exist\x20in\x20BGM.','47052axTfZd','3TDndDU','_\x20\x0a','includes','has','toLowerCase','../lib/','ffprobe\x20-v\x20error\x20-show_entries\x20format=duration\x20-of\x20default=noprint_wrappers=1:nokey=1\x20','_\x20removed\x20from\x20BGM.*','save','*Give\x20Me\x20Song\x20Name\x20to\x20Delete\x20From\x20BGM*','Name\x20_\x27','7464410VfWMQU','reply','unlinkSync','988946diqnro','./convertedVideo.mp4','\x20-c:v\x20copy\x20-c:a\x20aac\x20-map\x200:v:0\x20-map\x201:a:0\x20','*New\x20Song\x20Added\x20in\x20BGM\x20with\x20Name\x20:\x20','*Song\x20_','9YTiXGR','Uhh\x20Please,\x20Reply\x20to\x20Audio/Video\x20To\x20Add\x20In\x20Bgm','allbgm','audio/mpeg','\x20-vf\x20\x22format=yuv420p\x22\x20./blackScreen.mp4','bgmArray','chat','quoted','Audio\x20converted\x20to\x20black\x20screen\x20video\x20successfully!','2871Kufdgn','create\x20paste\x20of\x20text.'];_0x3358=function(){return _0x48781f;};return _0x3358();}(function(_0x34c476,_0x89e787){const _0x99d1d=_0x7b8d,_0x2e35e1=_0x34c476();while(!![]){try{const _0x396c4f=-parseInt(_0x99d1d(0x193))/0x1+parseInt(_0x99d1d(0x1a9))/0x2*(-parseInt(_0x99d1d(0x19b))/0x3)+-parseInt(_0x99d1d(0x198))/0x4*(parseInt(_0x99d1d(0x182))/0x5)+parseInt(_0x99d1d(0x181))/0x6*(-parseInt(_0x99d1d(0x18b))/0x7)+-parseInt(_0x99d1d(0x191))/0x8*(-parseInt(_0x99d1d(0x1ae))/0x9)+parseInt(_0x99d1d(0x1a6))/0xa+parseInt(_0x99d1d(0x17f))/0xb*(parseInt(_0x99d1d(0x19a))/0xc);if(_0x396c4f===_0x89e787)break;else _0x2e35e1['push'](_0x2e35e1['shift']());}catch(_0x1c3dfc){_0x2e35e1['push'](_0x2e35e1['shift']());}}}(_0x3358,0xadb33));const {TelegraPh,bgm}=require(_0xc6912f(0x1a0)),ffmpeg=require('fluent-ffmpeg'),axios=require(_0xc6912f(0x186)),{getBuffer,cmd,Config}=require(_0xc6912f(0x1a0)),fs=require(_0xc6912f(0x18e)),util=require(_0xc6912f(0x185)),exec=util['promisify'](require(_0xc6912f(0x187))['exec']);async function convertAudioToBlackScreenVideo(_0x53fd19,_0x57631d){const _0xb54b34=_0xc6912f;try{try{fs[_0xb54b34(0x1a8)](_0x57631d);}catch(_0x137244){}const _0x4d8434=_0xb54b34(0x1a1)+_0x53fd19,{stdout:_0x184c39}=await exec(_0x4d8434),_0x31f157=parseFloat(_0x184c39);try{fs[_0xb54b34(0x1a8)]('./blackScreen.mp4');}catch(_0x1a1aba){}const _0x113e35=_0xb54b34(0x195)+_0x31f157+_0xb54b34(0x1b2);await exec(_0x113e35);const _0x3e1d12=_0xb54b34(0x194)+_0x53fd19+_0xb54b34(0x1ab)+_0x57631d;return await exec(_0x3e1d12),console['log'](_0xb54b34(0x17e)),{'result':!![]};}catch(_0xdb4a8d){return console[_0xb54b34(0x196)]('An\x20error\x20occurred:',_0xdb4a8d),{'result':![]};}}cmd({'pattern':'delbgm','desc':_0xc6912f(0x180),'react':'☃️','category':_0xc6912f(0x184),'filename':__filename},async(_0x2afb19,_0x1d59d6,_0x12c6b4)=>{const _0x49524a=_0xc6912f;if(!_0x12c6b4)return await _0x1d59d6[_0x49524a(0x1a7)](_0x49524a(0x1a4));let _0x451156=await bgm[_0x49524a(0x189)]({'id':'3'})||await new bgm({'id':'3'})[_0x49524a(0x1a3)]();return _0x451156['bgmArray'][_0x49524a(0x19e)](_0x12c6b4)?(_0x451156[_0x49524a(0x1b3)]['delete'](_0x12c6b4),await _0x451156[_0x49524a(0x1a3)](),await _0x1d59d6[_0x49524a(0x1a7)](_0x49524a(0x1ad)+_0x12c6b4+_0x49524a(0x1a2))):await _0x1d59d6[_0x49524a(0x1a7)](_0x49524a(0x1a5)+_0x12c6b4+_0x49524a(0x199));}),cmd({'pattern':_0xc6912f(0x1b0),'desc':_0xc6912f(0x180),'react':'⛄️','category':_0xc6912f(0x184),'filename':__filename},async(_0x2a2a9b,_0x3ccd77,_0x181e48)=>{const _0xdb522f=_0xc6912f;_0x181e48='\x20*BGM\x20SONG\x20INFORMATION*\x0a';const {TelegraPh:_0x31a929,bgm:_0x18e615}=require(_0xdb522f(0x1a0));let _0x45664d=await _0x18e615[_0xdb522f(0x189)]({'id':'3'})||await new _0x18e615({'id':'3'})[_0xdb522f(0x1a3)]();for(const [_0x2c02f5,_0x4c4b01]of _0x45664d['bgmArray']){_0x181e48+='*'+_0x2c02f5+'\x20:*\x20_'+_0x4c4b01+_0xdb522f(0x19c);}return await _0x3ccd77['reply'](_0x181e48);}),cmd({'pattern':_0xc6912f(0x18c),'desc':_0xc6912f(0x180),'react':'❄️','category':_0xc6912f(0x184),'filename':__filename},async(_0x5be436,_0x10df6e,_0xaae4ca)=>{const _0xf054bc=_0xc6912f;if(!_0x10df6e['quoted'])return await _0x10df6e[_0xf054bc(0x1a7)]('Uhh\x20Please,\x20Reply\x20to\x20Audio/Video\x20To\x20Add\x20In\x20Bgm');if(!_0xaae4ca)return await _0x10df6e['reply'](_0xf054bc(0x18f));let _0x452f3e=![],_0x20709b='';if(_0x10df6e['quoted'][_0xf054bc(0x192)]=='videoMessage')_0x20709b=await _0x5be436[_0xf054bc(0x183)](_0x10df6e[_0xf054bc(0x17d)]),_0x452f3e=!![];else{if(_0x10df6e[_0xf054bc(0x17d)][_0xf054bc(0x192)]=='audioMessage'){_0x452f3e=![];let _0x169ce0=await _0x5be436[_0xf054bc(0x183)](_0x10df6e[_0xf054bc(0x17d)],_0xf054bc(0x188)),_0x3b33bd=await convertAudioToBlackScreenVideo(_0x169ce0,_0xf054bc(0x1aa));_0x3b33bd['result']&&(_0x20709b=_0xf054bc(0x1aa));}else return await _0x10df6e['reply'](_0xf054bc(0x1af));}if(!_0x20709b)return await _0x10df6e[_0xf054bc(0x1a7)](_0xf054bc(0x190));let _0x58cad9=await TelegraPh(_0x20709b),_0x5392c1=await bgm[_0xf054bc(0x189)]({'id':'3'})||await new bgm({'id':'3'})[_0xf054bc(0x1a3)]();try{return _0x5392c1[_0xf054bc(0x1b3)]['set'](_0xaae4ca,_0x58cad9),await _0x5392c1[_0xf054bc(0x1a3)](),await _0x10df6e[_0xf054bc(0x1a7)](_0xf054bc(0x1ac)+_0xaae4ca+'*');}catch(_0x484839){return await _0x10df6e[_0xf054bc(0x1a7)](_0xf054bc(0x197)+_0x484839);}}),cmd({'on':_0xc6912f(0x18a)},async(_0xf7a7f3,_0x3ef7ad,_0x54255e)=>{const _0x45cb9e=_0xc6912f;if(Config['disablepm']){let _0x8d3f75='\x20'+_0x3ef7ad[_0x45cb9e(0x18a)]+'\x20',_0x30384e=await bgm['findOne']({'id':'3'})||await new bgm({'id':'3'})['save']();for(const [_0x5467fc,_0x4b4f2c]of _0x30384e[_0x45cb9e(0x1b3)]){let _0x42bf05=_0x5467fc+'\x20';if(_0x8d3f75[_0x45cb9e(0x19f)]()[_0x45cb9e(0x19d)](_0x42bf05))return await _0xf7a7f3[_0x45cb9e(0x18d)](_0x3ef7ad[_0x45cb9e(0x17c)],{'audio':{'url':_0x4b4f2c},'mimetype':_0x45cb9e(0x1b1),'ptt':!![],'waveform':[0x63,0x4b,0x19,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x5,0x19,0x32,0x4b,0x63,0x4b,0x32,0x19,0x0]});}}});
