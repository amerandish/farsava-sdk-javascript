<div dir='rtl'>

Farsava Javascript SDK
===========

## نصب

<div dir='ltr'>

```html
<script src="farsava-sdk.js" type="text/javascript"></script>
```

</div>

## استفاده

جهت استفاده از کیت توسعه فارس آوا ابتدا نیاز است یک آبجکت از `Farsava.SDK` درست کنید

<br>

| نام                | توضیحات           |
| ------------------ | ----------------- |
| <REST_API_BASEURL> | آدرس سرور API     |
| <ASR_LIVE_URL>     | آدرس سرور وب سوکت |
| <JWT_TOKEN>        | توکن              |

<br>

<div dir='ltr'>

```javascript
const sdk = new Farsava.SDK({
    baseUrl: "<REST_API_BASEURL>",
    liveUrl: "<ASR_LIVE_URL>",
    apiKey:  "<JWT_TOKEN>",
});
```

</div>

## سرویس ها
-----------

- گفتار به نوشتار
- نوشتار به گفتار
- گفتار به نوشتار به صورت Live

### مجموعه سرویس های گفتار به نوشتار

- #### بررسی سلامت سرویس

<div dir='ltr'>

- async/await

    ```javascript
    try {
        const response = await sdk.speech.healthCheck()
        // response model type is Farsava.Models.HealthCheckModel
        // handle response
    } catch(err){
        // handle error
    }
    ```

- then/catch

    ```javascript
    sdk.speech.healthCheck()
    .then(response=>{
        // response model type is Farsava.Models.HealthCheckModel
        // handle response
    }).catch(err=>{
        // handle error
    })
    ```

</div>

- #### تبدیل گفتار به نوشتار برای فایل های صوتی با زمان کمتر از ۱۵ ثانیه

<div dir='ltr'>

- async/await

    ```javascript
    try {
        const base64AudioData = ''
        const config = new Farsava.Models.RecognitionConfigModel("LINEAR16",
                    16000,
                    "fa",
                    1,
                    true,
                    "default",
                    "general")
        const audio = new Farsava.Models.RecognitionAudioModel(base64AudioData)
        const model = new Farsava.Models.ASRRequestModel(config, audio)
        const response = await sdk.speech.asr(model)
        // response model type is Farsava.Models.ASRResponseModel
        // handle response
    } catch(err){
        // handle error
    }
    ```

- then/catch

    ```javascript
    const base64AudioData = ''
    const config = new Farsava.Models.RecognitionConfigModel("LINEAR16",
                16000,
                "fa",
                1,
                true,
                "default",
                "general")
    const audio = new Farsava.Models.RecognitionAudioModel(base64AudioData)
    const model = new Farsava.Models.ASRRequestModel(config, audio)
    sdk.speech.asr(model)
    .then(response=>{
        // response model type is Farsava.Models.ASRResponseModel
        // handle response
    }).catch(err=>{
        // handle error
    })
    ```

</div>

### مجموعه سرویس های نوشتار به گفتار

- #### بررسی سلامت سرویس

<div dir='ltr'>

- async/await

    ```javascript
    try {
        const response = await sdk.voice.healthCheck()
        // response model type is Farsava.Models.HealthCheckModel
        // handle response
    } catch(err){
        // handle error
    }
    ```

- then/catch

    ```javascript
    sdk.voice.healthCheck()
    .then(response=>{
        // response model type is Farsava.Models.HealthCheckModel
        // handle response
    }).catch(err=>{
        // handle error
    })
    ```

</div>

- #### تبدیل نوشتار به گفتار

<div dir='ltr'>

- async/await

    ```javascript
    try {
        const text = ''
        const synth = new Farsava.Models.TTSSynthesisInputModel(text);
        const voiceConfig = new Farsava.Models.TTSVoiceConfigModel(
            "fa",
            "b6e9c993-729e-4e0f-955b-f229cf1f77ee",
            "default",
            "female"
        );
        const audioConfig = new Farsava.Models.TTSAudioConfigModel(
            "LINEAR16",
            1,
            0,
            0,
            22050,
            0
        );
        const model = new Farsava.Models.TTSRequestModel(synth, voiceConfig,  audioConfig);
        const response = await sdk.voice.tts(model)
        // response model type is base64 string contain audio
        // handle response
    } catch(err){
        // handle error
    }
    ```

- then/catch

    ```javascript
    const text = ''
    const synth = new Farsava.Models.TTSSynthesisInputModel(text);
    const voiceConfig = new Farsava.Models.TTSVoiceConfigModel(
        "fa",
        "b6e9c993-729e-4e0f-955b-f229cf1f77ee",
        "default",
        "female"
    );
    const audioConfig = new Farsava.Models.TTSAudioConfigModel(
        "LINEAR16",
        1,
        0,
        0,
        22050,
        0
    );
    const model = new Farsava.Models.TTSRequestModel(synth, voiceConfig, audioConfig);
    sdk.speech.asr(model)
    .then(response=>{
        // response model type is base64 string contain audio
        // handle response
    }).catch(err=>{
        // handle error
    })
    ```

</div>

### مجموعه سرویس های گفتار به نوشتار Live

- #### تبدیل گفتار به نوشتار

<div dir='ltr'>

- open socket connection

    ```javascript
    sdk.live.openConnection((err, data)=>{
        console.log('err',err)
        console.log('data', data)
    })
    ```

- send with interval

    ```javascript
    const CHUNK_SIZE = 16000
    const INTERVAL_DURATION = 1000 // in milliseconds
    sdk.live.sendChunkAndInterval(base64AudioData)
    ```

</div>
</div>
