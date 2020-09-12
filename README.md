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

<br>

| عنوان     | نوع                             | توضیحات       |
| --------- | ------------------------------- | ------------- |
| مدل ورودی | -                               | -             |
| مدل خروجی | Farsava.Models.HealthCheckModel | نتیجه درخواست |

<br>

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

<br>

| عنوان     | نوع                            | توضیحات                         |
| --------- | ------------------------------ | ------------------------------- |
| مدل ورودی | Farsava.Models.ASRRequestModel | تنظیمات اولیه جهت ارسال درخواست |
| مدل خروجی | Farsava.Models.ASRRequestModel | نتیجه درخواست                   |

<br>

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

<br>

| عنوان     | نوع                             | توضیحات       |
| --------- | ------------------------------- | ------------- |
| مدل ورودی | -                               | -             |
| مدل خروجی | Farsava.Models.HealthCheckModel | نتیجه درخواست |

<br>

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

<br>

| عنوان     | نوع                            | توضیحات                                                     |
| --------- | ------------------------------ | ----------------------------------------------------------- |
| مدل ورودی | Farsava.Models.TTSRequestModel | تنظیمات اولیه جهت ارسال درخواست                             |
| مدل خروجی | string                         | یک رشته حاوی اطلاعات صوت مورد نظر که به فرمت base64 می باشد |

<br>

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

<br>

| عنوان     | نوع                             | توضیحات                                                    |
| --------- | ------------------------------- | ---------------------------------------------------------- |
| مدل ورودی | string                          | یک رشته حاوی اطلاعات فایل ورودی که به base64 تبدیل شده است |
| مدل خروجی | Farsava.Models.ASRResponseModel | نتیجه درخواست                                              |

<br>
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

## مدل ها

- مدل نتیجه درخواست سلامت سرویس (Farsava.Models.HealthCheckModel)

    <div dir='ltr'>

    | Field   | Type   | Required | Accept Values |
    | ------- | ------ | -------- | ------------- |
    | status  | string | &check;  |               |
    | message | string | &check;  |               |
    | version | string | &check;  |               |

    </div>

- مدل ارسال درخواست به سامانه تبدیل گفتار به نوشتار (Farsava.Models.ASRRequestModel)

    <div dir='ltr'>

    | Field  | Type                                  | Required | Accept Values |
    | ------ | ------------------------------------- | -------- | ------------- |
    | config | Farsava.Models.RecognitionConfigModel | &check;  |               |
    | audio  | Farsava.Models.RecognitionAudioModel  | &check;  |               |

    </div>

- مدل ارسال درخواست به سامانه تبدیل گفتار به نوشتار (Farsava.Models.RecognitionConfigModel)

    <div dir='ltr'>

    | Field           | Type    | Required | Accept Values                      |
    | --------------- | ------- | -------- | ---------------------------------- |
    | audioEncoding   | string  | &check;  | `"LINEAR16", "MP3", "OGG", "FLAC"` |
    | sampleRateHertz | number  | &check;  |                                    |
    | languageCode    | string  | &check;  | `"fa"`                             |
    | maxAlternatives | number  | &check;  |                                    |
    | profanityFilter | boolean | &check;  |                                    |
    | asrModel        | string  | &check;  |                                    |
    | languageModel   | string  | &check;  |                                    |

    </div>

- مدل ارسال درخواست به سامانه تبدیل گفتار به نوشتار (Farsava.Models.RecognitionAudioModel)

    <div dir='ltr'>

    | Field | Type   | Required | Accept Values |
    | ----- | ------ | -------- | ------------- |
    | data  | string | &check;  |               |

    </div>

- مدل نتیجه درخواست به سامانه تبدیل گفتار به نوشتار (Farsava.Models.ASRResponseModel)

    <div dir='ltr'>

    | Field           | Type                                         | Required | Accept Values |
    | --------------- | -------------------------------------------- | -------- | ------------- |
    | transcriptionId | string                                       | &check;  |               |
    | duration        | number                                       | &check;  |               |
    | inferenceTime   | number                                       | &check;  |               |
    | status          | string                                       | &check;  |               |
    | results         | Array[Farsava.Models.RecognitionResultModel] | &check;  |               |

    </div>

- مدل نتیجه درخواست به سامانه تبدیل گفتار به نوشتار (Farsava.Models.RecognitionResultModel)

    <div dir='ltr'>

    | Field      | Type                                       | Required | Accept Values |
    | ---------- | ------------------------------------------ | -------- | ------------- |
    | transcript | string                                     | &check;  |               |
    | confidence | number                                     | &check;  |               |
    | words      | Array[Farsava.Models.RecognitionWordModel] | &check;  |               |

    </div>

- مدل نتیجه درخواست به سامانه تبدیل گفتار به نوشتار (Farsava.Models.RecognitionWordModel)

    <div dir='ltr'>

    | Field      | Type   | Required | Accept Values |
    | ---------- | ------ | -------- | ------------- |
    | startTime  | number | &check;  |               |
    | endTime    | number | &check;  |               |
    | word       | string | &check;  |               |
    | confidence | number | &check;  |               |

    </div>

- مدل ارسال درخواست به سامانه تبدیل نوشتار به گفتار (Farsava.Models.TTSRequestModel)

    <div dir='ltr'>

    | Field          | Type                                  | Required | Accept Values |
    | -------------- | ------------------------------------- | -------- | ------------- |
    | synthesisInput | Farsava.Models.TTSSynthesisInputModel | &check;  |               |
    | voiceConfig    | Farsava.Models.TTSVoiceConfigModel    | &check;  |               |
    | audioConfig    | Farsava.Models.TTSAudioConfigModel    | &check;  |               |

    </div>

- مدل ارسال درخواست به سامانه تبدیل نوشتار به گفتار (Farsava.Models.TTSSynthesisInputModel)

    <div dir='ltr'>

    | Field | Type   | Required | Accept Values |
    | ----- | ------ | -------- | ------------- |
    | text  | string | &check;  |               |

    </div>

- مدل ارسال درخواست به سامانه تبدیل نوشتار به گفتار (Farsava.Models.TTSVoiceConfigModel)

    <div dir='ltr'>

    | Field        | Type   | Required | Accept Values                            |
    | ------------ | ------ | -------- | ---------------------------------------- |
    | languageCode | string | &check;  | `"fa"`                                   |
    | voiceId      | string | &check;  | `"b6e9c993-729e-4e0f-955b-f229cf1f77ee"` |
    | name         | string | &check;  | `"default"`                              |
    | gender       | string | &check;  | `"female"`                               |

    </div>

- مدل ارسال درخواست به سامانه تبدیل نوشتار به گفتار (Farsava.Models.TTSAudioConfigModel)

    <div dir='ltr'>

    | Field           | Type   | Required | Accept Values                      |
    | --------------- | ------ | -------- | ---------------------------------- |
    | audioEncoding   | string | &check;  | `"LINEAR16", "MP3", "OGG", "FLAC"` |
    | speakingRate    | number | &check;  | in range `(0.5,2.0)`, step `0.1`   |
    | pitch           | number | &check;  | in range `(-5, 5)`, step `1.0`     |
    | volumeGainDb    | number | &check;  | in range `(-20, 20)`, step `1.0`   |
    | sampleRateHertz | number | &check;  | `8000, 16000, 22050, 24000`        |
    | bitRate         | number | &check;  | `32, 64, 128, 198, 256, 320`       |

    </div>


</div>
