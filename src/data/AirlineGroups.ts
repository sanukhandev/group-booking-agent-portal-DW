import { AirlineGroupProps } from '../components/AirlineGroup';

const getRandomInt = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomData = () => {
    const airlines = ['SAUDI ARABIAN AIRLINES', 'Air Canada AIRLINES'];
    const airlineCodes = ['SV', 'AC'];
    const routes = ['MUX-JED-MUX', 'LHE-JED-LHE'];
    const sectorDetailsTemplate = [
        '735 05AUG LHE-JED 10:45 13:55 23-KG Baggage, 738 25AUG LHE-JED 18:00 18:05 46-KG Baggage',
        '795 03AUG MUX-JED 04:30 23-KG Baggage, 794 30AUG JED-MUX 17:00 23:45 46-KG Baggage'
    ];

    const groups = Array.from({ length: 10 }, () => {
        const randomAirlineIndex = getRandomInt(0, 1);
        const randomSectorDetailIndex = getRandomInt(0, 1);
        const airline = airlines[randomAirlineIndex];
        const AirlineCode = airlineCodes[randomAirlineIndex];
        const sectorDetails = sectorDetailsTemplate[randomSectorDetailIndex];
        const route = routes[randomSectorDetailIndex];
        const totalSeats = getRandomInt(20, 100);
        const availableSeats = getRandomInt(1, totalSeats);
        const depDate = `Sat 0${getRandomInt(1, 9)} Aug 2024`;
        const price = `PKR ${getRandomInt(130000, 150000)}`;
        const flightNumber = `${AirlineCode}-${getRandomInt(100, 999)}`;
        const numberOfDays = 27;

        return {
            airline,
            sectorDetails,
            totalSeats,
            availableSeats,
            depDate,
            price,
            flightNumber,
            AirlineCode,
            numberOfDays,
            route,
        };
    });

    return groups;
};

export default generateRandomData;
