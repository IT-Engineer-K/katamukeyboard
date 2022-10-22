var key;
const sound = new Audio('static/audio.mp3');

function press(key) {
    fetch('press/' + key);
    sound.play();
}

window.addEventListener("deviceorientation", function(e) {
    const keys = 'abcdefghijklmnopqrstuvwxyz';
    // 角度を取得
    let beta = e.beta;
    let index = Math.floor((beta / 90) * 26);
    if (index < 0)
        index = 0;
    else if (25 < index)
        index = 25;
    key = keys[index]
    document.getElementById('beta').textContent = key
}, false);

// ジャイロセンサーが有効か？
if (window.DeviceOrientationEvent) {
    // ★iOS13向け: ユーザーにアクセスの許可を求める関数があるか？
    if (DeviceOrientationEvent.requestPermission) {
        var sensor_contents = document.body;
        // id="sensor_contents" な要素がクリックされたら
        sensor_contents.addEventListener("click", function() {
            // ★ジャイロセンサーのアクセス許可をリクエストする
            DeviceOrientationEvent.requestPermission().then(function(response) {
                // リクエストが許可されたら
                if (response === "granted") {
                    // deviceorientationが有効化される
                }
            }).catch(function(e) {
                console.log(e);
            });
        });
        // iOS13以外
    } else {
        // 何もしない
    }
}