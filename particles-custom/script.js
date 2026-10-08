particlesJS('particles-js',
{
  "particles": {
 
    // 雨粒と星の数
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 850
      }
    },
 
    // 雨粒と星の色
    "color": {
      "value": [
        "#ffffff",
        "#b8e4ff",
        "#80caff",
        "#d6efff",
        "#c4b5fd",
        "#e0f2fe"
      ]
    },
 
    // 雨粒と星の形
    "shape": {
      "type": ["circle", "star"],
 
      "stroke": {
        "width": 0,
        "color": "#ffffff"
      },
 
      "polygon": {
        "nb_sides": 5
      },
 
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
 
    // キラキラと明滅する透明度
    "opacity": {
      "value": 0.75,
      "random": true,
 
      "anim": {
        "enable": true,
        "speed": 1.5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
 
    // 雨粒と星のサイズ
    "size": {
      "value": 3.5,
      "random": true,
 
      // 星がゆっくり膨らんだり縮んだりする
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0.3,
        "sync": false
      }
    },
 
    // 雨粒同士の接続線
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#b8e4ff",
      "opacity": 0.2,
      "width": 1
    },
 
    // 雨と星の落下
    "move": {
      "enable": true,
 
      // ゆったり降る幻想的な雨
      "speed": 5,
 
      "direction": "bottom",
 
      // 落下速度と軌道に変化
      "random": true,
 
      "straight": true,
 
      "out_mode": "out",
 
      "bounce": false,
 
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
 
  // インタラクション
  "interactivity": {
    "detect_on": "canvas",
 
    "events": {
 
      // カーソル付近の粒子が光りながら拡大
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
 
      // クリックで雨粒と星が広がる
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
 
      "resize": true
    },
 
    "modes": {
 
      "grab": {
        "distance": 180,
        "line_linked": {
          "opacity": 0.6
        }
      },
 
      // カーソル付近のキラキラ演出
      "bubble": {
        "distance": 140,
        "size": 7,
        "duration": 2,
        "opacity": 1,
        "speed": 3
      },
 
      // クリック時の水しぶき風演出
      "repulse": {
        "distance": 160,
        "duration": 0.6
      },
 
      "push": {
        "particles_nb": 5
      },
 
      "remove": {
        "particles_nb": 2
      }
    }
  },
 
  // Retina Display対応
  "retina_detect": true
});