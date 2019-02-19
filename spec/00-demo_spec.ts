describe('Writing a basic spec', () => {
    it('should be easy', () => {
        // Given
        let firstName = 'Boba',
            lastName = 'Fett';

        // When
        let fullName = lastName + ', ' + firstName;

        // Then
        expect(fullName).toBe('Fett, Boba');
    });
});