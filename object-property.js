const output = []
const student = [
        {id: 21, name:'omor sunny'},
        {id: 31, name:'mannaaaa'},
        {id: 41, name:'Moyouri'},
        {id: 71, name:'DeepJol'}
]
const names = student.map(s => s.name);
const ids = student.map(x => x.id);
const bigger = student.filter(a => a.id < 45)
const oneElement = student.find( b => b.id > 70);

console.log(oneElement); 



