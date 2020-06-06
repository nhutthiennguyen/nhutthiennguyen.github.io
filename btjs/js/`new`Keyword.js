//contructor func
function Mouse(name, weight, color) {
    this.name = name,
    this.weight = weight,
    this.color = color
    
};
const mouse1 = new Mouse('jack', 0.3, 'yellow');
const mouse2 = new Mouse('branch', 0.2, 'red');
const cage = {
    name: 'Magic Cage',
    lockedUp: [],
    enCase: function(bird){
        this.lockedUp.push(bird);
        return this;
    }
};
function Bird(name, weight, price, color) {
    this.type = 'bird',
    this.name = name,
    this.weight = weight,
    this.price = price,
    this.color = color
};
const bird1 = new Bird('Joker', 0.1, 100, 'black');
const bird2 = new Bird('fking', 0.3, 500, 'white');
const bird3 = new Bird('cacc', 0.5, 1000, 'red');
const bird4 = new Bird('titi', 0.3, 200, 'yellow');
const bird5 = new Bird('tit', 0.4, 400, 'purple');
cage.enCase(bird1).enCase(bird2).enCase(bird3).enCase(bird4).enCase(bird5);
console.log(cage);