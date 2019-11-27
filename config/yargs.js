const descripcion = {
    demand: true,
    des: 'Descripcion de la tarea por hacer'
}
const completado = {
    default: true,
    desc: 'Marca como completado o pendiente la tarea'

}
const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('Actualizar', 'Actualizar una tarea', {
        descripcion,
        completado

    })
    .help()
    .argv;

module.exports = {
    argv
}