import { faker } from '@faker-js/faker';

const COMMANDS = {
    person: generatePerson,
    company: generateCompany,
    internet: generateInternet,
    finance: generateFinance,
    help: showHelp
};

function generatePerson() {
    const person = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        address: `${faker.location.streetAddress()}, ${faker.location.city()}`,
        job: faker.person.jobTitle()
    };

    return {
        items: Object.entries(person).map(([key, value]) => ({
            title: value,
            subtitle: `Copy ${key}`,
            arg: value,
            text: { copy: value, largetype: value }
        }))
    };
}

function generateCompany() {
    const company = {
        name: faker.company.name(),
        catchPhrase: faker.company.catchPhrase(),
        domain: faker.internet.domainName(),
        address: faker.location.streetAddress()
    };

    return {
        items: Object.entries(company).map(([key, value]) => ({
            title: value,
            subtitle: `Copy ${key}`,
            arg: value,
            text: { copy: value, largetype: value }
        }))
    };
}

function generateInternet() {
    const internet = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        domain: faker.internet.domainName(),
        ip: faker.internet.ip()
    };

    return {
        items: Object.entries(internet).map(([key, value]) => ({
            title: value,
            subtitle: `Copy ${key}`,
            arg: value,
            text: { copy: value, largetype: value }
        }))
    };
}

function generateFinance() {
    const finance = {
        account: faker.finance.accountNumber(),
        amount: faker.finance.amount(),
        bitcoin: faker.finance.bitcoinAddress(),
        card: faker.finance.creditCardNumber()
    };

    return {
        items: Object.entries(finance).map(([key, value]) => ({
            title: value,
            subtitle: `Copy ${key}`,
            arg: value,
            text: { copy: value, largetype: value }
        }))
    };
}

function showHelp() {
    const commands = [
        { title: 'person', subtitle: 'Generate person details (name, email, phone, address, job)' },
        { title: 'company', subtitle: 'Generate company information' },
        { title: 'internet', subtitle: 'Generate internet-related data' },
        { title: 'finance', subtitle: 'Generate financial information' },
        { title: 'help', subtitle: 'Show this help message' }
    ];

    return {
        items: commands.map(cmd => ({
            title: cmd.title,
            subtitle: cmd.subtitle,
            arg: cmd.title
        }))
    };
}

function main() {
    try {
        const query = process.argv[2]?.toLowerCase() || 'help';
        const command = COMMANDS[query] || showHelp;
        console.log(JSON.stringify(command()));
    } catch (error) {
        console.log(JSON.stringify({
            items: [{
                title: 'Error occurred',
                subtitle: error.message,
                valid: false
            }]
        }));
    }
}

main();