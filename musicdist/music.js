const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    lrcType: 3,
    audio: [
      {
        name: "晴天",
        artist: "周杰伦",
        url: "/medias/music/qingtian.mp3",
        cover: "/medias/music/yehuimei.jpg",
        lrc: "/medias/music/qingt.lrc",
      },
      {
        name: "夜的第七章",
        artist: "周杰伦",
        url: "/medias/music/yededi.mp3",
        cover: "/medias/music/yede.jpg",
        lrc: "/medias/music/yedeqi.lrc",
      },
      {
        name: "火车叨位去",
        artist: "周杰伦",
        url: "/medias/music/huoche.mp3",
        cover: "/medias/music/badu.jpg",
        lrc: "/medias/music/huoc.lrc",
      },
    ]
});