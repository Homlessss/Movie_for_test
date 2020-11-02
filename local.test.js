const helperController = require('./js/controller/helperController')
const threadController = require('./js/controller/threadController')

// Test Accounts
describe('Account', () => {
    //  validate register form with correct data 
    it("Validate register form", () => {
        let registerValuable = {
            firstName: 'Mai Quang',
            lastName: 'Khải',
            email: 'mkhai2308@gmail.com',
            password: '0386885935k',
            confirmPassword: '0386885935k'
        };
        expect(helperController.checkRegister(registerValuable)).toBeTruthy();
    })

    //  validate register form with wrong first name 
    it("Validate register form", () => {
        let registerValuable = {
            // firstName: 'Mai Quang',
            lastName: 'Khải',
            email: 'mkhai2308@gmail.com',
            password: '0386885935k',
            confirmPassword: '0386885935k'
        };
        expect(helperController.checkRegister(registerValuable)).toBeTruthy();
    })

    // validate login form
    it('Validate login form', () => {
        let loginValuable = {
            email: 'email@example.com',
            password: 'password'
        };
        expect(helperController.checkLogin(loginValuable)).toBeTruthy();
    });

});

// Test Exceptions
describe('Exceptions', () => {
    //validate review form
    it('Validate review form', () => {
        expect(helperController.checkExceptionReviewForm()).toThrow();
    });

    // validate register form
    it('Validate register form', () => {
        expect(helperController.checkRegister()).toThrow();
    });

    // validate login form
    it('Validate login form', () => {
        expect(helperController.checkLogin()).toThrow();
    });
});

// Test Review page
describe('Test Review page', () => {
    // Add videos trailer
    it('Add video trailer', () => {
        expect(threadController.checkAddVideosTrailer).toBeTruthy();
    });

    // Init thread page
    it('Init thread page', () => {
        expect(threadController.checkInitThreadPage()).toBeTruthy();
    });

    // Add thread release
    it('Add thread release', () => {
        expect(threadController.checkAddThreadRelease).toBeTruthy();
    });

    // Listen review update
    it('Listen review update', () => {
        expect(threadController.checkListenReviewUpdate).toBeTruthy();
    });
});