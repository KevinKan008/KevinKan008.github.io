const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    order: 'random',
    preload: 'auto',
    mutex: true,
    lrcType: 3,
    audio: [
      {
        name: "晴天 (Live)",
        artist: "周杰伦",
        url: "https://sharefs.yun.kugou.com/202002230045/4db9a4e6ece5db6c7010ee6db2e228e5/G030/M09/00/09/Xg0DAFWp1J6AFKkMAErWDIWs2TA539.mp3",
        cover: "/medias/music/qingt.jpg",
        lrc: "/medias/music/qingt.lrc",
      },
      {
        name: "everything i wanted",
        artist: "Billie Eilish",
        url: "https://sharefs.yun.kugou.com/202002230127/768584bd52804d7cc7cb90fcd283a797/G173/M06/1D/1F/7Q0DAF3MnJyAGBOpADvzv25CFpU233.mp3",
        cover: "/medias/music/everythingiwanted.jpg",
        lrc: "/medias/music/everythingiwanted.lrc",
      },
      {
        name: "Other Side",
        artist: "雅-MIYAVI",
        url: "https://sharefs.yun.kugou.com/202002230119/851ae9fde8311081745b6265a236c840/G169/M03/10/0B/iZQEAF0ucCSAX6kFADeqFkOQg-M882.mp3",
        cover: "/medias/music/OtherSide.jpg",
        lrc: "/medias/music/OtherSide.lrc",
      },
      {
        name: "青鸟",
        artist: "生物股长",
        url: "https://sharefs.yun.kugou.com/202002230117/cc1c3ffbd7c9c98cbddbd5ab82f00e6b/G011/M09/03/13/Sw0DAFUKv1KAOIRbADVsmVXW7Go154.mp3",
        cover: "/medias/music/qingniao.jpg",
        lrc: "/medias/music/qingniao.lrc",
      },
      {
        name: "山海",
        artist: "草东没有派对",
        url: "https://sharefs.yun.kugou.com/202002230036/5abbc795921b01d02b7c6c502d71f8d1/G059/M04/06/11/ew0DAFcpdeqAI8pNAD1Q0giEAvg926.mp3",
        cover: "/medias/music/shanhai.jpg",
        lrc: "/medias/music/shanhai.lrc",
      },
      {
        name: "Something Just Like This",
        artist: "Coldplay",
        url: "https://sharefs.yun.kugou.com/202002230123/f3d72cb6c4f0c3391b47de104e86c33a/G102/M09/06/1F/BocBAFjmRAWALvLzADxfadBBz6c483.mp3",
        cover: "/medias/music/SomethingJust.jpg",
        lrc: "/medias/music/SomethingJust.lrc",
      },
      {
        name: "大风吹",
        artist: "草东没有派",
        url: "https://sharefs.yun.kugou.com/202002230036/d814c73b4aa7eba4d9d00859ae135b94/G062/M07/1E/0F/3oYBAFcooOyAFDD6ADmo_VFnHZA244.mp3",
        cover: "/medias/music/dafc.jpg",
        lrc: "/medias/music/dafc.lrc",
      },
      {
        name: "异度侵入片头曲",
        artist: "Sou",
        url: "https://sharefs.yun.kugou.com/202002230119/c355e85c84e7b62c63c3b7013ff986dc/G191/M09/05/0B/X4cBAF4Sj0iAcecWADWuVe9xtII389.mp3",
        cover: "/medias/music/yiduSou.jpg",
        lrc: "/medias/music/yiduSou.lrc",
      },
      {
        name: "I am You",
        artist: "Kim Taylor",
        url: "https://sharefs.yun.kugou.com/202002230228/fabf81d471190913ff52f3a665ccd871/G135/M05/0D/09/xw0DAFuIN6SAVrj3AEN0vhouEpM238.mp3",
        cover: "/medias/music/iamy.jpg",
        lrc: "/medias/music/iamy.lrc",
      },
      {
        name: "一路向北 (Live)",
        artist: "周杰伦",
        url: "https://sharefs.yun.kugou.com/202002230130/180799ffffe665717345611e2c3db48d/G059/M05/03/15/24YBAFcwuKWAJQ2FAEi5_MYSzBI855.mp3",
        cover: "/medias/music/yilxb.jpg",
        lrc: "/medias/music/yilxb.lrc",
      },
    ]
});