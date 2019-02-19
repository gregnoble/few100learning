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
        let n1 = 12; // number
        let n2 = 1.3; // still a number
        let n3 = 0xff; // still a number, but hexadecimal (base 16)
        let n4 = 0b00101; // still a number, but in binary.
        let n5 = 0o744; // octal. who the heck uses that??

        // typescript thing
        const salary = 1_000_000;
    });
});