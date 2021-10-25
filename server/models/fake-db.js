const Customer = require('./user/customer');
const WheelOption = require('./question/wheelOption');

class FakeDb{

    constructor(){
        this.customers = 
            [            {
                firstName: 'Mario',
                lastName: 'Bros',
                secondLastName: 'Nintendo',
                dateOfBirth: '1993/02/01',
                address: 'P. Sherman Wallabee Stret 42 Sidney',
                reputation: 80,
                credits: [{
                    id: '1',
                    amount: 1000,
                    currency: 'MXN'
                },
                {
                    id: '2',
                    amount: 1300,
                    currency: 'MXN'
                },
                {
                    id: '3',
                    amount: 1780,
                    currency: 'MXN'
                }]
            },
            {
                firstName: 'John',
                lastName: 'Snow',
                secondLastName: 'Stark',
                dateOfBirth: '1981/06/04',
                address: 'P. Sherman Wallabee Stret 42 Sidney',
                reputation: 90,
                credits: [{
                    id: '4',
                    amount: 1000,
                    currency: 'MXN'
                },
                {
                    id: '5',
                    amount: 1300,
                    currency: 'MXN'
                },
                {
                    id: '6',
                    amount: 1780,
                    currency: 'MXN'
                }]
            },
            {
                firstName: 'Sonic',
                lastName: 'Heroes',
                secondLastName: '2',
                dateOfBirth: '2001/11/07',
                address: 'P. Sherman Wallabee Stret 42 Sidney',
                reputation: 85,
                credits: [{
                            id: '7',
                            amount: 1000,
                            currency: 'MXN'
                        },
                        {
                            id: '8',
                            amount: 1300,
                            currency: 'MXN'
                        },
                        {
                            id: '9',
                            amount: 1780,
                            currency: 'MXN'
                        }]
            },
            {
                firstName: 'Black',
                lastName: 'Hole',
                secondLastName: 'Supermassive',
                dateOfBirth: '1999/09/09',
                address: 'P. Sherman Wallabee Stret 42 Sidney',
                reputation: 95,
            },]

        this.wheelOptions = [
            {"label":"Reto 1",  "value":1,  "question":"Marcale a tu ex mas reciente y dile que quieres regresar con el/ella"},
            {"label":"Reto 2",  "value":1,  "question":"Di el trabalenguas mas dificil del mundo en 2 intentos o menos"},
            {"label":"Reto 3",  "value":1,  "question":"Baila algo que escojan los demas jugadores"},
            {"label":"Reto 4",  "value":1,  "question":"1 cucharada de tu picante favorito + 1 shot de alcohol fuerte + parate de manos mientras lo haces"},
            {"label":"Reto 5",  "value":1,  "question":"Actua como cerdo 1 minuto (al menos sonido, caminar como uno)"},
            {"label":"Reto 6",  "value":1,  "question":"Rapea durante 1 minuto sobre el tema que escoja el jugador mas ebrio"},
            {"label":"Reto 7",  "value":1,  "question":"Canta en karaoke la cancion que escojan los jugadores"},
            {"label":"Reto 8",  "value":1,  "question":"Canta Acapella el himno nacional de tu pais"},
            {"label":"Reto 9",  "value":1,  "question":"Haz un monologo de 3 personas sobre el tema que esocja el chat"},
            {"label":"Reto 10", "value":1, "question":"Hazle una broma a algun amigo/familiar sobre alguna situacion triste"},
            {"label":"Reto 11", "value":1, "question":"Hazle una broma a algun amigo/familiar sobre alguna situacion dramatica"},
            {"label":"Reto 12", "value":1, "question":"Hazle una broma a algun amigo/familiar sobre alguna situacion fea"},
            {"label":"Reto 13", "value":1, "question":"5 cucharadas de ketchup"},
            {"label":"Reto 14", "value":1, "question":"Licuado con ingredientes que esoja el chat"},
            {"label":"Reto 15", "value":1, "question":"Comerte un limon entero, con todo y cascara"},
            {"label":"Reto 16", "value":1, "question":"El chat escoge el castigo (Tiene que ser un castigo de verdad)"},
            {"label":"Reto 17", "value":1, "question":"Mandale un mensaje de voz a tu madre diciendo 'cuando qleamos jefa?'"},
            {"label":"Reto 18", "value":1, "question":"Muestra tu historial de busqueda del cel y de tu PC"},
            {"label":"Reto 19", "value":1, "question":"Revientate un huevo en la cabeza"},
            {"label":"Reto 20", "value":1, "question":"Chupa lo que tengas a la derecha durante 1 min"},
            {"label":"Reto 21", "value":1, "question":"Muestra tu tarjeta de credito por ambos lados con todo y numeros"},
            {"label":"Reto 22", "value":1, "question":"Dibujate algo en el pecho con tinta permanente"},
            {"label":"Reto 23", "value":1, "question":"Pintate los dientes con plumon"},
            {"label":"Reto 24", "value":1, "question":"Rapate una ceja"},
            {"label":"Reto 25", "value":1, "question":"Compra algo de 10 USD que escoja el chat en Amazon"}, 
            {"label":"Reto 26", "value":1, "question":"Llamar a la policia y decir que te estan robando"}, 
            {"label":"Reto 27", "value":1, "question":"Di el abecedario al revez"}, 
            {"label":"Reto 28", "value":1, "question":"Haz un arco en el suelo con la espalda"},
            {"label":"Reto 29", "value":1, "question":"Di la tabla del 7 en ingles"},
            {"label":"Reto 30", "value":1, "question":"Echate una llave de pimienta"},
            {"label":"Reto 31", "value":1, "question":"Tomate una cucharada de canela"},
            {"label":"Reto 32", "value":1, "question":"Regala 5 subs al jugador de tu eleccion"},
            {"label":"Reto 33", "value":1, "question":"Tomate un chupito de vinagre"},
            {"label":"Reto 34", "value":1, "question":"Ponte un puñado de hielo en los pantalones/playera por 30 segundos"},
            {"label":"Reto 35", "value":1, "question":"Di cual es tu genero favorito de porno"},
            {"label":"Reto 36", "value":1, "question":"Muestanos a todos tu mejor caminata de 'perra empoderada, luchona, chancla de adamantio...'"},
            {"label":"Reto 37", "value":1, "question":"Demuestra como ligarias a alguien en un bar usando a la persona que tengas a tu derecha, si no hay nadie, a ala izquierda -> abajo > arriba"},
            {"label":"Reto 38", "value":1, "question":"Cuenta un chiste, si nadie se rie toma"},
            {"label":"Reto 39", "value":1, "question":"Tomen todos los que hayan roto la pantalla de un celular"},
            {"label":"Reto 40", "value":1, "question":"Las mujeres beben"},
            {"label":"Reto 41", "value":1, "question":"Los hombres beben"},
            {"label":"Reto 42", "value":1, "question":"TODOS tienen que dar un buen trago a su bebida"},
            {"label":"Reto 43", "value":1, "question":"TODOS los que hayan dicho mama a una maestra toman"},
            {"label":"Reto 44", "value":1, "question":"TODOS los que hayan hecho pipi en publico"},
            {"label":"Reto 45", "value":1, "question":"Todos los que hayan chocado en un carro toman"},
            {"label":"Reto 46", "value":1, "question":"Todos los que se hayan tirado un pedo en medio de la 'accion' toman"},
            {"label":"Reto 47", "value":1, "question":"Todos los que hayan sido descubiertos estrujando la nutria o casajeando al castor toman"},
            {"label":"Reto 48", "value":1, "question":"Si haz roto algo por enojo a algun juego"},
            {"label":"Reto 49", "value":1, "question":"Todos los que hayan visto una categoria de porno de la que se arrepientan toman"},
            {"label":"Reto 50", "value":1, "question":"Imita a John Travolta en Saturday Night Fever"}
        ]
    }

    async cleanDb(){
        await Customer.deleteMany({});
        await WheelOption.deleteMany({});
    }
    pushCustomerToDb(){
        this.customers.forEach((customer)=>{
            const newCustomer = new Customer(customer);
            newCustomer.save();
        })
    }

    pushWheelOptionsToDB(){
        this.wheelOptions.forEach((wheelOption)=>{
            const newWheelOption = new WheelOption(wheelOption);
            newWheelOption.save();
        })
    }

    seedDb(){
        this.cleanDb();
        this.pushCustomerToDb();
        this.pushWheelOptionsToDB();
    }
}

module.exports = FakeDb;