module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes busqueda profesor': function(browser) {
    browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .click('.Select-input input[role="combobox"]')
        .setValue('.Select-input input[role="combobox"]', 'Mario Villamizar')

        .waitForElementVisible('.Select-option', 6000)
        .click('.Select-option')
        .waitForElementVisible('.descripcionProfesor', 4000)
        .assert.containsText('.descripcionProfesor', 'Mario Villamizar Cano')
        .assert.containsText('.descripcionProfesor', 'Ingeniería de Sistemas')
        .assert.containsText('.descripcionProfesor', 'Universidad de los Andes')  
        .end();
    }
};


module.exports = { // adapted from: https://git.io/vodU0
  'Los estudiantes filtro materia': function(browser) {
    browser
        .url('https://losestudiantes.co/')
        .click('.botonCerrar')
        .click('.Select-input input[role="combobox"]')
        .setValue('.Select-input input[role="combobox"]', 'Mario Villamizar')

        .waitForElementVisible('.Select-option', 6000)
        .click('.Select-option')
        .waitForElementVisible('.descripcionProfesor', 4000)
        .click('.materias input[name="ISIS1205"]')
        .pause(2000)
        .assert.containsText('.carreraCalificacion', 'Algoritmica Y Progr. Obj. Ii')
        .end();
    }
};