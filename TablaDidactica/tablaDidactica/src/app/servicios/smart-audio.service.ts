import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Platform } from '@ionic/angular';
import { Sound } from '../models/sound';
@Injectable()
export class SmartAudioService {

    audioType = 'html5';
    sounds: any = [];

    constructor(public nativeAudio: NativeAudio, platform: Platform) {
        if (platform.is('cordova')) {
            this.audioType = 'native';
        }
    }

    preload(sounds: Sound[]) {

        sounds.forEach(sound => {
            if (true) {

                const audio = {
                    key: sound.key,
                    asset: sound.asset,
                    type: 'html5'
                };

                this.sounds.push(audio);

            } else {
                this.nativeAudio.preloadSimple(sound.key, sound.asset)
                .then(() => {
                    const audio = {
                        key: sound.key,
                        asset: sound.asset,
                        type: 'native'
                    };
    
                    this.sounds.push(audio);
                })
                .catch(error => {
                    alert('Error in preload:' + error + ' ' + sound.key + ' ' + sound.asset);
                });
            }
        });
    }

    play(key) 
    {
        const audio = this.sounds.find((sound) => {
            return sound.key === key;
        });

        if (true) {

            const audioAsset = new Audio(audio.asset);
            audioAsset.play();

        } else {

            this.nativeAudio.play(audio.key).then((res) => {
                console.log(res);
            }, (err) => {
                alert(err);
            });

        }

    }

}