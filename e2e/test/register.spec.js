

const { state } = require("@angular/animations");
const { AlertComponent } = require("ngx-bootstrap");
// import { Select } from selenium.webdriver.support.ui;




describe('Sign Up tests', function(){
    let elSignUpLink = element(by.id('registerButton'));
    let elRegisterHeader = element(by.xpath('/html/body/modal-container/div/div/div[1]/h4'));
    let firstNameInput = element(by.id('firstName'));
    let lastNameInput = element(by.id('lastName'));
    let emailInput = element(by.id('Email'));
    let phoneInput = element(by.id('phoneNumber'));
    let usernameInput = element(by.id('userName'));
    let password = element(by.id('password'));
    let addressInput = element(by.id('hAddressInput'));
    let cityInput = element(by.id('hCityInput'));
    let stateInput = element(by.id('hStateSelect'));

    // WebElement stateSelect = driver.findElement(by.id('stateOption'));
    // Select dropdown = new Select(stateSelect);

    // select = Select(driver.find_element_by_id('stateOption'));
    

    let zipCodeInput = element(by.id('hZipInput'))
    let driver = element(by.id('driver'));
    let submit = element(by.id('submitButton'));
    let alert = element(AlertComponent);


    browser.get('http://localhost:4200/');


    it('User presses the sign up button and goes to the sign up modal', function() {
        elSignUpLink.click();
        expect(elRegisterHeader.getText()).toBe('Sign Up');
        
    });

    it('User doesnt enter enough information', function() {
        firstNameInput.sendKeys("Anthony");
        lastNameInput.sendKeys('McArthur');
        emailInput.sendKeys('anthonylucasmcarthur@gmail.com');
        phoneInput.sendKeys('7208383768');
        usernameInput.sendKeys('Tmac');
        password.sendKeys('13492m');
        addressInput.sendKeys('500 Koehler Dr');
        cityInput.sendKeys('Morgantown');
        driver.click();
        browser.pause();
        zipCodeInput.sendKeys('26506');
        submit.click();
        expect(alert);
    });

    it('User enter all the necessary information', function() {
        firstNameInput.sendKeys("Anthony");
        lastNameInput.sendKeys('McArthur');
        emailInput.sendKeys('anthonylucasmcarthur@gmail.com');
        phoneInput.sendKeys('7208383768');
        usernameInput.sendKeys('Tmac');
        password.sendKeys('13492m');
        addressInput.sendKeys('500 Koehler Dr');
        cityInput.sendKeys('Morgantown');
        stateInput.click();
        // select.select_by_visible_text('wv');
        driver.click();
        zipCodeInput.sendKeys('26506');
        submit.click();
        browser.pause();
    });

    it('User with an account tries to re-register', function() {
        firstNameInput.sendKeys("Anthony");
        lastNameInput.sendKeys('McArthur');
        emailInput.sendKeys('anthonylucasmcarthur@gmail.com');
        phoneInput.sendKeys('7208383768');
        usernameInput.sendKeys('Tmac');
        password.sendKeys('13492m');
        addressInput.sendKeys('500 Koehler Dr');
        cityInput.sendKeys('Morgantown');
        stateInput.click();
        // select.select_by_visible_text('wv');
        driver.click();
        zipCodeInput.sendKeys('26506');
        submit.click();
        expect(alert);
        browser.pause();
    });
    
});