const manipulate = (siswa) => {
    let firstname, all

    firstname = siswa.firstname
    all = siswa

    let result = {
        firstname,
        all
    }

    return result
}

const merge = function(siswa, input) {
    return siswa.concat(input)
}

const insert = (siswa, input) => {
    siswa.push(input)
}

module.exports = {
    manipulate,
    merge: merge,
    add: insert
}