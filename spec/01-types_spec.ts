describe('Variables and Constants and Stuff', () => {
    describe('Declaring Variables', () => {
        it('using let to create a binding', () => {
            let name;
            name = 'Joe';
            expect(name).toBe('Joe');
            name = 11;
            expect(name).toBe(11);
        });
        it('some typescript stuff for variables', () => {
            let name: string | number = 'Joe'; // Union Type.
            //name = 'Joe';
            expect(name).toBe('Joe');
            name = 11;
            expect(name).toBe(11);
        });
        it('declaring constants', () => {
            const PI = 3.1415927;
            const FAVORITE_NUMBERS = [9, 22, 108];
            //FAVORITE_NUMBERS = []
            FAVORITE_NUMBERS[0] = 10;
            const MOVIE = {
                title: 'The Force Awakens',
                director: 'Abrams'
            };
            MOVIE.director = 'Johnson';
        });
        it('var is still there but it stinks and should not be used', () => {
            if (true) {
                var name = 'Fido'; // Don't use var
                let name2 = 'Greg';
            }
            expect(name).toBe('Fido');
            //expect(name2).toBeUndefined();
        });
    });
    describe('strings', () => {
        it('delimiting', () => {
            // You can use single or double quotes or the ` quotes
            let first = 'Joe',
                last = 'Schmidt';
            expect("Joe").toBe(first);

            let story = `
            multiple
            lines
            `;
            console.log(story);
            let fullName = `That is ${last}, ${first}`;
        });
    });
    describe('various literals', () => {
        it('examples', () => {
            let n1 = 12; // number
            let n2 = 1.3; // still a number
            let n3 = 0xff; // still a number, but hexadecimal (base 16)
            let n4 = 0b00101; // still a number, but in binary.
            let n5 = 0o744; // octal. who the heck uses that??

            // typescript thing
            const salary = 1_000_000;
        });
    });
    describe('arrays and array literals', () => {
        it('has them', () => {
            const stuff: Array<number | string> = [12, 13];
            stuff[2] = 'tacos';
            expect(stuff[2]).toBe('tacos');
            let food = stuff[2];
        });
        describe('tuples', () => {
            it('a brief introduction TS', () => {
                let warren: [string, string, number, string];
                warren = ['Warren', 'Ellis', 55, 'Musician'];

                let occupation = warren[3];
                let age = warren[2];
            });
            it('an example', () => {

                function formatName(first: string, last: string): [string, number] {
                    const fullName = `${last}, ${first}`;
                    return [fullName, fullName.length];
                }
                const [fullName, len] = formatName('Han', 'Solo'); // destructuring
                expect(fullName).toBe('Solo, Han');
                expect(len).toBe(9);


                const stuff = ['Jeff', 'Gonzalez', 49];
                const [firstName, , age] = stuff;
                expect(firstName).toBe('Jeff');
                expect(age).toBe(49);
            });
        });
    });
});