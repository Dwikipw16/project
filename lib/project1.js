const manipulate = (siswa) => {
    return siswa.sort()
        
    }


const awsis = (siswa) => {
let sorting = manipulate(siswa)
    
    return sorting.reverse()
      
}

module.exports = {
    manipulate,awsis

   
}