function Devotion(love) {
    this.love = love;
}

Devotion.prototype.love1 = function() {
    console.log(`I love you ${this.love}`);
};

const Priyal_JI = new Devotion('Priyal JI');
Priyal_JI.love1();  // Output: I love you Priyal JI
