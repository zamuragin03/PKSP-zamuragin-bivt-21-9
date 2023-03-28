import { JsonParser, XMLParser } from './parser'

const json_parser: JsonParser = new JsonParser()

let json_doc = json_parser.XMLParseFromFile('./file.txt')
console.log(json_doc)
console.log('-'.repeat(20))
const xml_parser: XMLParser = new XMLParser()
let xml_doc=xml_parser.JsonParseRaw(json_doc)
console.log(xml_doc)