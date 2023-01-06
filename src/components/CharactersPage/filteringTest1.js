let a1 = ['qwer', 'qwef', 'qwev', 'qwdr', 'qwdf', 'qwdv', 'qwcr', 'qwcf', 'qwcv', 'qser', 'qsef', 'qsev', 'qsdr', 'qsdf', 'qsdv', 'qscr', 'qscf', 'qscv']
let filters = ['q', 's', 'e']

function filter(rawList, criteriaList) {
    let filteredList = [...rawList]
    for (criteriaItem of criteriaList) {
        filteredList = filteredList.filter((element) => element.includes(criteriaItem))
    }
    return filteredList
}

let a2 = filter(a1, filters)
console.log(a2);