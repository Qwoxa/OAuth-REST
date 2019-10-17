const faker = require('faker');

module.exports = {
    public: (req, res, next) => {
        const articles = Array(10)
            .fill(null)
            .map(() => {
                const title = faker.name.title();
                const text = faker.lorem.paragraphs();
                const avatar = 'https://via.placeholder.com/100';
                return { title, avatar, text };
            });

        res.status(200).json(articles);
    },

    secret: (req, res, next) => {
        const jobs = Array(10)
        .fill(null)
        .map(() => {
            const firstName = faker.name.firstName();
            const title = faker.name.jobTitle();
            const avatar = 'https://via.placeholder.com/50';
            return { firstName, title, avatar };
        });

        res.status(200).json(jobs);
    }
};