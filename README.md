<p align="center">
  <a href="https://github.com/frreiro/drivenPass-API">
    <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f512.svg" alt="readme-logo" width="80" height="80">
  </a>
  <h3 align="center">
    DrivenPass
  </h3>
  
 <p align="center">Gerenciador de senhas</p>
</p>

## Usage

```bash
$ git clone https://github.com/frreiro/drivenPass-API

$ cd drivenPass-API

$ npm install

$ npm run dev
```

 ### SignUp / Login : 

```
- POST /sign-up
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "senha": "loremipsum"
    }
- POST /sign-in
    - Rota para fazer login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "senha": "loremipsum"
    }
```
[You can see the rules here](#rules)
### Credentials 

```
- POST /credentials (autenticada)
    - Rota para criar uma credencial do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "Lorem ipsum2",
        "url": "https://...com",
        "username": "loremipsum",
        "password": "loremipsum123456",
    }
- GET /credentials (autenticada)
    - Rota para listar todas as credenciais do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
- GET /credentials/:id (autenticada)
    - Rota para listar uma credencial do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
- DELETE /credentials/:id (autenticada)
    - Rota para deletar uma credencial do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
[You can see the rules here](#rules)
### Cards 

```
- POST /cards (autenticada)
    - Rota para criar uma credencial do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "Lorem ipsum2",
        "number": "1234 5678 9101 1121",
        "cardHolderName": "Lorem I Psum",
        "securityCode": "123",
        "expirationDate": "05/25",
        "password": "1234",
        "isVirtual": true/false,
        "type": "debit" / "credit" / "debit_credit",
    }

- GET /cards (autenticada)
    - Rota para listar todas as credenciais do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}

- GET /cards/:id (autenticada)
    - Rota para listar uma credencial do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}

- DELETE /cards/:id (autenticada)
    - Rota para deletar uma credencial do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
[You can see the rules here](#rules)
### Notes

```
- POST /notes (autenticada)
    - Rota para criar uma credencial do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "Lorem ipsum2",
        "note": "loremipsum"
    }

- GET /notes (autenticada)
    - Rota para listar todas as credenciais do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}

- GET /notes/:id (autenticada)
    - Rota para listar uma credencial do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
    
- DELETE /notes/:id (autenticada)
    - Rota para deletar uma credencial do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
[You can see the rules here](#rules)
### Wifi 

```
- POST /wifi (autenticada)
    - Rota para criar uma credencial do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "Lorem ipsum2",
        "ssd": "loremipsum",
        "password": "loremipsum2"
    }

- GET /wifi (autenticada)
    - Rota para listar todas as credenciais do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}

- GET /wifi/:id (autenticada)
    - Rota para listar uma credencial do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
    
- DELETE /wifi/:id (autenticada)
    - Rota para deletar uma credencial do usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
# Rules 

## Authenticate Rules
- Password must have at least 10 characters.
- Email must be an valid email.

## Credentials Rules
- Title must have maximum 50 characters.
- Url must be an valid url.
- Username do not have specific rules.
- Password do not have specific rules.

## Notes Rules
- Title must have maximum 50 characters.
- Note must have maximum 1000 characters.

## Wifi Rules
- Title must have maximum 50 characters.
- SSD do not have specific rules.
- Password do not have specific rules.

## Cards Rules
- Title must have maximum 50 characters.
- Number must follow the exemple with blank spaces.
- CardHolderName do not have specific rules.
- SecurityCode it is a string and must have length equals 3.
- ExpirationDate it is a string and must follow the exemple, with MM/YY.
- Password it is a string and must have length equals 4.
- IsVirtual it is a boolean
- Type it is a string, must be "debit", "credit" or "debit_credit".

[Back to the top](#usage)

