import { roundToTwoPlaces } from "./utils";

describe('destructuring', () => {
    it('destructuring arrays', () => {
        const friends = ['sean', 'billy', 'david', 'sarah', 'mo'];
        const f1 = friends[0];
        const f2 = friends[1];
        expect(f1).toBe('sean');
        expect(f2).toBe('billy');

        const [d1, d2] = friends;
        expect(d1).toBe('sean');
        expect(d2).toBe('billy');

        const [e1, , e2, ...rest] = friends;
        expect(e1).toBe('sean');
        expect(e2).toBe('david');
        expect(rest).toEqual(['sarah', 'mo']);
    });
    it('destructuring objects', () => {
        const friends = {
            number1: 'sean',
            number2: 'billy',
            number3: 'david',
            number4: 'sarah',
            number5: 'mo'
        };
        const { number1, number2 } = friends;
        expect(number1).toBe('sean');
        expect(number2).toBe('billy');

        const { number4: f1, number5: f2 } = friends;
        expect(f1).toBe('sarah');
        expect(f2).toBe('mo');

        const { number1: n1, ...other } = friends;
        expect(n1).toBe('sean');
        expect(other).toEqual({
            number2: 'billy',
            number3: 'david',
            number4: 'sarah',
            number5: 'mo'
        });
    });
});
describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('forEach allows you to look at each member (this doesnt produce anything)', () => {
        numbers.forEach((n) => console.log(n));
    });

    describe('methods that produce a new array', () => {
        it('selecting just specific stuff from an array', () => {
            const evens = numbers.filter(n => n % 2 === 0);
            // or
            // const evensx = numbers.filter(function (n:number){ return n % 2 === 0; });
            // or
            // function isEven(n:number){ return n % 2 === 0; }
            // const evens3 = numbers.filter(isEven);
            expect(evens).toEqual([2, 4, 6, 8]);
            expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]); // the original array is not changed
        });
        it('map lets you transform each element of the source array', () => {
            // if theres a place you want to go, itl get you there you know, its the map, its the map, its the map
            const doubled = numbers.map(n => n * 2);
            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
        });
        it('a quick practice', () => {
            interface Vehicle {
                vin: string;
                makeAndModel: string;
                mileage: number;
            }
            const vehicles: Vehicle[] = [
                { vin: '9999', makeAndModel: 'Chevy Tahoe', mileage: 182000 },
                { vin: 'aka92', makeAndModel: 'Toyota Prius', mileage: 89999 },
                { vin: 'kduwi', makeAndModel: 'Ford Explorer', mileage: 99998 }
            ];


            const answer = ['Toyota Prius', 'Ford Explorer'];

            // find all the vehicles with < 100_000, but just give me the make and model.

            const result = vehicles
                .filter(v => v.mileage < 100_000)
                .map(v => v.makeAndModel);

            expect(result).toEqual(answer);
        });
        it('another example', () => {
            interface Product {
                id: number;
                description: string;
                cost: number;
            }

            const products: Product[] = [
                { id: 1, description: 'Eggs', cost: 1.99 },
                { id: 2, description: 'Beer', cost: 7.99 },
                { id: 3, description: 'Chips', cost: 2.99 },
            ];

            // our price markup is 30%.
            // for each product create an array of objects that look like this:
            interface SaleItem {
                id: number;
                description: string;
                price: number;
            }

            // but only if the price is > $5.00 
            const answer: SaleItem[] = products.map(p => {
                const result: SaleItem = {
                    id: p.id,
                    description: p.description,
                    price: roundToTwoPlaces(p.cost)
                };
                return result;
            }).filter(si => si.price > 5.00);
            expect(answer).toEqual([{
                id: 2, description: 'Beer', price: 10.39
            }]);
        });
        it('my test with cats', () => {
            interface People {
                firstName: string;
                lastName: string;
                age: number;
            }
            const people = [
                { firstName: 'Greg', lastName: 'Noble', age: 31 },
                { firstName: 'Orion', lastName: 'Noble', age: 1 },
                { firstName: 'Rachel', lastName: 'Pietrick', age: 29 },
                { firstName: 'Theo', lastName: 'Pietrick', age: 7 },
                { firstName: 'Robert', lastName: 'Noble', age: 33 },
                { firstName: 'Brad', lastName: 'Noble', age: 29 }
            ];
            const answer = [
                { firstName: 'Orion', lastName: 'Noble', age: 1 },
                { firstName: 'Theo', lastName: 'Pietrick', age: 7 }
            ]
            const peopleYoungerThanTwenty = people.filter(p => p.age < 20);
            expect(peopleYoungerThanTwenty).toEqual(answer);
        });
        it('Cats are people too man...', () => {
            interface People {
                firstName: string;
                lastName: string;
                age: number;
                isACat: boolean;
            }
            interface CatPeople {
                firstName: string;
                lastName: string;
                age: number;
            }
            interface NonCatPeople {
                firstName: string;
                lastName: string;
                age: number;
            }
            const people = [
                { firstName: 'Greg', lastName: 'Noble', age: 31 },
                { firstName: 'Orion', lastName: 'Noble', age: 1, isACat: true },
                { firstName: 'Rachel', lastName: 'Pietrick', age: 29 },
                { firstName: 'Theo', lastName: 'Pietrick', age: 7, isACat: true },
                { firstName: 'Robert', lastName: 'Noble', age: 33 },
                { firstName: 'Brad', lastName: 'Noble', age: 29 }
            ];
            const answer = [
                { firstName: 'Orion', lastName: 'Noble', age: 1, isACat: true }
            ];
            const catsYoungerThanFive = people.filter(p => {
                return p.age < 5 && p.isACat
            });

            // we should get all cats that are younger than 5
            expect(catsYoungerThanFive).toEqual(answer);

            const peopleWhoAreNonCatPeople: NonCatPeople[] = people.filter(p => !p.isACat).map(nonCat => {
                const nonCatMan: NonCatPeople = {
                    firstName: nonCat.firstName,
                    lastName: nonCat.lastName,
                    age: nonCat.age
                };
                return nonCatMan;
            });

            // we should get all people that are not cats
            expect(peopleWhoAreNonCatPeople).toEqual([
                { firstName: 'Greg', lastName: 'Noble', age: 31 },
                { firstName: 'Rachel', lastName: 'Pietrick', age: 29 },
                { firstName: 'Robert', lastName: 'Noble', age: 33 },
                { firstName: 'Brad', lastName: 'Noble', age: 29 }
            ]);

            const peopleWhoAreCatPeople: CatPeople[] = people.filter(p => p.isACat).map(catPerson => {
                const cat: CatPeople = {
                    firstName: catPerson.firstName,
                    lastName: catPerson.lastName,
                    age: catPerson.age
                };
                return cat;
            })

            // we should get all people who are cats
            expect(peopleWhoAreCatPeople).toEqual([
                { firstName: 'Orion', lastName: 'Noble', age: 1 },
                { firstName: 'Theo', lastName: 'Pietrick', age: 7 }
            ]);

            const peopleWhoAreCatPeopleLessThanFive = people.filter(p => {
                return p.isACat && p.age < 5;
            }).map(p => {
                const cat: CatPeople = {
                    firstName: p.firstName,
                    lastName: p.lastName,
                    age: p.age
                }
                return cat;
            });

            // we should get all people who are cats who are less than 5
            expect(peopleWhoAreCatPeopleLessThanFive).toEqual([
                { firstName: 'Orion', lastName: 'Noble', age: 1 }
            ]);
        });
    });

    describe('methods that produce a single value (scalar)', () => {
        it('has methods to check the membership of an array', () => {
            expect(numbers.some(n => n > 8)).toBe(true);
            expect(numbers.every(n => n < 10)).toBe(true);
        });
        it('has reduce', () => {
            expect(numbers.reduce((p, c) => p + c)).toBe(45);
            expect(numbers.reduce((p, c) => { console.log({ p, c }); return p + c; }, 100)).toBe(145);
        });
        it('ok one more example', () => {

            const friends = ['sean', 'billy', 'stacey', 'david'];

            interface Answer {
                list: string;
                numberOfFriends: number;
            }
            const initialState: Answer = {
                list: '',
                numberOfFriends: 0
            }
            const answer = friends
                .map(f => f.toUpperCase())
                .reduce((state, next) => {
                    return {
                        list: state.list ? state.list + ' ' + next : next,
                        numberOfFriends: state.numberOfFriends + 1
                    }
                }, initialState)

            expect(answer.list).toBe('SEAN BILLY STACEY DAVID');
            expect(answer.numberOfFriends).toBe(4);
        });
        it('final example and I mean it', () => {

            interface Action {
                type: string;
            }

            const stuffThatHappened: Action[] = [
                { type: 'ADDED' },
                { type: 'ADDED' },
                { type: 'SUBTRACTED' },
                { type: 'ADDED' },
            ];

            const initialState = 0;

            const answer = stuffThatHappened.reduce((state, next) => {
                switch (next.type) {
                    case 'ADDED': {
                        return state + 1;
                    }
                    case 'SUBTRACTED': {
                        return state - 1;
                    }
                }
            }, initialState)

            expect(answer).toBe(2);
        });
    });

});