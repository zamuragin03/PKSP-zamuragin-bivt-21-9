class Toy {
    name: string
    count: number
    required: boolean
    constructor(name: string,
        count: number,
        required: boolean,) {
        this.count = count
        this.required = required
        this.name = name
    }
}

const toy1: Toy = new Toy('Автомобиль', 91, false)
const toy2: Toy = new Toy('Автобус', 12, false)
const toy3: Toy = new Toy('Кораблик', 11, false)
const toy4: Toy = new Toy('Самолет', 91, true)
const toy5: Toy = new Toy('Лампа', 65, false)
const toy6: Toy = new Toy('Электро набор', 85, true)
const toy7: Toy = new Toy('Набор хирурга', 25, false)
const toy8: Toy = new Toy('Ноутбук', 54, false)
const toy9: Toy = new Toy('Медведь', 11, false)
const toy10: Toy = new Toy('Конструктор', 112, true)

let toys = [toy1, toy2, toy3, toy4, toy5, toy6, toy7, toy8, toy9, toy10]

function XMLCreator(toys:Array<Toy>): string {
    let start_string = '<toys>'
    let content =''
    let end_string = '</toys>'
    for (var toy of toys) {
        content+='\n<toy>'
        content+='\n<name>' +toy.name + '</name>'
        content+='\n<count>' +toy.count + '</count>'
        content+='\n<required>' +toy.required + '</required>'
        content+='\n</toy>'

      }
    return start_string +content+ end_string
}