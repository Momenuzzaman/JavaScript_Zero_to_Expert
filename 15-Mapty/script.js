

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



let map, mapEvent;
class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    constructor(coords, distance, duration) {
        this.coords = coords;
        this.distance = distance; // in time
        this.duration = duration; // in min
    }
}
class Running extends Workout {
    constructor(coords, distance, duration) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calPace();
    }
    calPace() {
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}
class Cycling extends Workout {
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calSpeed();
    }
    calSpeed() {
        this.speed = this.distance / this.duration / 60;
        return this.speed;
    }
}

// const run1 = new Running();

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


class App {
    #map
    #mapEvent
    constructor() {
        this._getPosition();

        form.addEventListener('submit', this._newWorkout.bind(this));

        inputType.addEventListener('change', this._toggleEventField);
    }
    _getPosition() {
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),
                function () {
                    alert('Could not get your position');
                }
            );
    }

    _loadMap(position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

        const coords = [latitude, longitude];

        this.#map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        // handling click map
        this.#map.on('click', this._showForm.bind(this));
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _toggleEventField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e) {
        const validatedInputs = (...inputs) => inputs.every(input => Number.isFinite(input));
        e.preventDefault();

        // get data from form 
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;



        // if working running ,create running object
        if (type === 'running') {
            const cadence = +inputCadence.value;
            // check if data is valid
            if (
                !Number.isFinite(distance) ||
                !Number.isFinite(duration) ||
                !number.isFinite(cadence)
            ) {
                return alert('Input have to be positive number!');
            };
        }

        // if workout cycling ,create cycling object
        if (type === 'running') {
            const elevation = +inputElevation.value;
        }
        // Add new object to workout

        // Render workout to workout array
        const { lat, lng } = this.#mapEvent.latlng;
        L.marker({ lat, lng }).addTo(this.#map)
            .bindPopup(L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: 'running-popup',
            })
            )
            .setPopupContent('Workout')
            .openPopup();
        // Render workout on list



        console.log(this);
        // Clear input fields
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        // display maker 
        console.log(this.#mapEvent);

    }
}

const app = new App();

