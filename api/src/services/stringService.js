const StringRepository = require('../repositories/stringRepository');
const repository = new StringRepository();


const save = async(str) => {
    return await repository.save(str);
}

const getAll = async () => {
    return await repository.getAll();
}


module.exports = {
    save,
    getAll
}