# OAuth REST
In this repo, you can find my implementation of open authorization (Google & Facebook) with JWT tokens. On *backend* the used frameworks, such as Express.js, Password.js, added validation for simple registration. Server-side mainly is implemented with React.js and Redux (for layout Material-UI has been used).

## Getting started
To start using the project for your purposes/review, follow those steps:

1. Clone the repository and go to the project directory
```bash
git clone https://github.com/Qwoxa/OAuth-REST
cd OAuth-REST
```

2. Install dependencies
```bash
npm run install-packages
```

3.  Add *.env* file with mongo uri, jwt secret and port
```bash
mv ./backend/.env_sample ./backend/.env
vi ./backend/.env
```

4. Change baseUrl for axios (adjust the port)
```bash
vi ./frontend/src/index.js
```

5. Add the IDs of your google and facebook applications
```bash
vi ./frontend/src/oauth.js
```

6. Start the application
```bash
npm start
```