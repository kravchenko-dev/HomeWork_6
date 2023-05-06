// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

class Abonent {
    constructor(props) {
        this.name = props.name;
        this.numTelephone = props.numTelephone;
    }

    name = "";
        numTelephone = "";

        set abonentInfo(newAbonent) {
            this.name = newAbonent.name;
            this.numTelephone = newAbonent.numTelephone;
        }

        get abonentInfo() {
            return console.log(`${this.name} tel: ${this.numTelephone}`)
        }
}

const Ksu = new Abonent({
    name: "Ksenia",
    numTelephone: 1237395827,
})

const Ann = new Abonent({
    name: "Anna",
    numTelephone: 0123312332,
})

const Art = new Abonent({
    name: "Artur",
    numTelephone: 98731264534,
})

Ksu.abonentInfo

Ann.abonentInfo

Art.abonentInfo