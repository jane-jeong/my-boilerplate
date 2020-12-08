// 포춘쿠키 모듈 만들기 

var fortuneCookies = [ 
    "Love you",
    "Remeber your Future", 
    "Do not fear what you don't know",
    "Whenever possible, keep it simple",
    "Concquer yoru fears or they will conquer you",
    "연습을 열심히하면 완벽해 지는 게 아니라 영구적으로 되는 것이다."
];

// 무언가를 모듈 밖에서 쓰게 하려면 exports에 추가해야 한다 
// getFortue 함수를 이 모듈 밖에서 쓼 있지만, fortuneCookies 배열은 완벽히 감춰진다
// 좋은 방식임. 캡슐화를 통해 잠재적 에러나 취약한 코드를 방지할 수 있기 때문 
exports.getFortune = function() {

    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx]; 
}