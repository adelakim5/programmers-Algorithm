var map = new Map()
map.set("param", 'data')
console.log(map)
map.set("param1", 1)
map.set("param2", 2)
map.set("param2", 3)
map.set("param3", 4)
// 맵은 벨류가 큰거만 저장하는듯
console.log(map)
console.log("map data : " + map.get('param1'))
// get은 벨류값을 가져오는 거구나 