
## Comenzando 🚀

_En el presente proyecto esta en conjunto con un backend donde se podra divisar un conjunto de tareas que contienen informacion sobre la misma. Tambien el usuario podra agregar tareas a conveniencia y tendra acceso a las diferentes caracteristicas de la misma podiendo modificar y/ o eliminar las tareas, estados, usuarios y categorias creadas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_-Se necesitaría un dispositivo conectado a internet y que contenga una preferiblemente mayor o igual a 4GB_

### Código a destacar
``` 
  Author.bulkCreate(times(20, () =>({
        name: `${faker.name.firstName()}`,
        lastName: `${faker.name.lastName()}`,
        movie: `${faker.name.title()}`,
        IdMovie: random(1, 100)
    })))      
``` 
_En este pequeño código se crearará una base dedatos con elementos ficticios con el obejtivo de desarrollarla y que el usuario comprenda que está correctamente confeccionada la misma. Posterior a este codigo se elimina para que la base de datos mantenga los valores inicialmente generados._
```
app.get('/cines', (req, res) => {
     if((req.query.estreno)){
        const estreno = req.query.estreno;
        Cine.findAll({ where: { estreno: estreno }}).then( cines => {
            res.json((cines));
        });
        
    }
    else if ((!req.query.name) && (!req.query.provincia)) {
        Cine.findAll().then( cines => {
            res.json((cines));
        });
    } else if(!req.query.provincia) {
        const name = req.query.name;
        Cine.findAll({ where: { name: name }}).then( cines => {
            res.json((cines));
        });
    }else if(!req.query.name){
        const provincia = req.query.provincia;
        Cine.findAll({ where: { provincia: provincia }}).then( cines => {
            res.json((cines));
        });
    }
});
```
_En este código se realiza las condiciones por filtros donde se puede realizar unos filtros de estrenos donde se solicita si es true o false_
### Instalación 🔧

_No requiere de instalacion ya que posteriormente se vinculara con una parte de frontend por el cual el usuario sera capaz de visualizar su búsqueda. Aunque si es bueno destacar que con la dosiponibilidad de algún programa como POSTMAN sería posible consultar los datos de una manera muy sencilla._

### Y las pruebas de estilo de codificación ⌨️

_Simplemnete se procedio a usar los diversos filtros y que sea capaz de relacionar los modulos que sean relacionables. buscando una posibilidad de error se extendió a comprobar los resultados de los módulos que no estuviesen relacionados, produciendo una respuesta nefasta_


## Construido con 🛠️


* [JS] - Diversos ficheros, donde se consulta, creación de tablas y/o sincronización   
* [POSTMAN] - Chequear la correcta funcionalidad de los filtros
* [DB BROWSER SQLITE] - Gestionar la bae de datos e introducir datos manualmente 
## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/G1ovann16/BackendMovies) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.


## Autores ✒️

* **Giovanni Landaburo Del Arco** - *Trabajo Inicial* - [glandaburo](https://github.com/G1ovann16)
