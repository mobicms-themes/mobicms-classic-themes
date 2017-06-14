module.exports = function (grunt) {
    require('time-grunt')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Обновляем зависимости
        devUpdate: {
            main: {
                options: {
                    updateType: 'force',
                    semver: false
                }
            }
        }
    });

    // Загружаем нужные модули
    grunt.loadNpmTasks('grunt-dev-update');

    // Общая задача
    grunt.registerTask('default', []);

    // Обновление Dev Dependencies
    grunt.registerTask('upd', [
        'devUpdate:main'
    ]);
};
