var Toy = /** @class */ (function () {
    function Toy(name, count, required) {
        this.count = count;
        this.required = required;
        this.name = name;
    }
    return Toy;
}());
var toy1 = new Toy('Автомобиль', 91, false);
var toy2 = new Toy('Автобус', 12, false);
var toy3 = new Toy('Кораблик', 11, false);
var toy4 = new Toy('Самолет', 91, true);
var toy5 = new Toy('Лампа', 65, false);
var toy6 = new Toy('Электро набор', 85, true);
var toy7 = new Toy('Набор хирурга', 25, false);
var toy8 = new Toy('Ноутбук', 54, false);
var toy9 = new Toy('Медведь', 11, false);
var toy10 = new Toy('Конструктор', 112, true);
var toys = [toy1, toy2, toy3, toy4, toy5, toy6, toy7, toy8, toy9, toy10];
function XMLCreator(toys) {
    var start_string = '<toys>';
    var content = '';
    var end_string = '</toys>';
    for (var _i = 0, toys_1 = toys; _i < toys_1.length; _i++) {
        var toy = toys_1[_i];
        content += '\n<toy>';
        content += '\n<name>' + toy.name + '</name>';
        // content+='\n' +' '.repeat(2)
        content += '\n<count>' + toy.count + '</count>';
        content += '\n<required>' + toy.required + '</required>';
        content += '\n</toy>';
    }
    return start_string + content + end_string;
}
console.log(XMLCreator(toys));
