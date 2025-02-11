<h1>React-Template</h1>

##  Overview

The React Template is a flexible and scalable foundation for building modern applications, leveraging custom hooks for efficient state management and logic reuse. Designed with a modular architecture, it ensures reusability and easy scalability, while its flexible UI structure adapts to various project needs. With a focus on performance optimization, it enables smooth rendering and state handling, making it an ideal starting point for developing robust and maintainable React applications.

##  Table of Contents

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
  - [Project Index](#project-index)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Configuration](#configuration)
  - [Recomendations](#recomendations)

##  Project Structure

```sh
┌── public
│   └── assets
├── src
│   ├── auth
│   ├── base-components
│   ├── components
│   ├── config
│   ├── dialogs
│   ├── interfaces
│   ├── pages
│   ├── routes
│   ├── schemas
│   ├── services
│   ├── slices
│   ├── utils
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── environment.tsx
│   ├── index.css
│   └──  store.ts
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

##  Getting Started

###  Prerequisites

Before getting started with , ensure your runtime environment meets the following requirements:

- **Node.js 20.0:** https://nodejs.org/pt/blog/release/v20.0.0

###  Installation

Install  using one of the following methods:

**Build from source:**

Clone the  repository:
```sh
 git clone https://github.com/VictorAlvesFarias/Safeguard-Backend
```

### Run dev mode &nbsp; 

Install the project dependencies:

```sh
 npm i
 ```
```sh
 yarn i
 ```
```sh
 pnpm i
```

Run  using the following command:


```sh
 npm run dev
```
 
```sh
 yarn run dev
```

```sh
 pnpm run dev
```

### Building static application &nbsp; 

The build destination folder will be "dist".

```sh
 npm run build
```
 
```sh
 yarn run build
```

```sh
 pnpm run build
```


##  Configuration

The configuration files in the project are used to define constants and settings that are reused across the application. These configurations help maintain consistency and reduce hardcoding in the codebase. Below, we'll break down the two configuration files provided: MASK and AUTH.

**mask-confg.ts**

The MASK configuration is used to define regex patterns and formatting rules for common data types like documents, phone numbers, and dates. This is particularly useful for input masking and formatting in forms or UI components. This configuration format is compatible with the input component's native mask.

``` sh
const MASK: { [key: string]: [RegExp, string]; } = {
    DOCUMENT: [/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'],
    PHONE: [/(^\d{2})(\d{4,5})(\d{4}$)/, '($1) $2-$3'],
    DATE: [/(^\d{2})(\d{2})(\d{4})/, '$1/$2/$3']
}

export {
    MASK
}
```


**mask-confg.ts**

The AUTH configuration is used to manage authentication-related settings, such as routes that don't require authorization and whether authentication is globally enabled or disabled.

* **AUTHORIZE_NOT_REQUIRED**: An array of routes that do not require authentication.

* **DISABLE_AUTH**: A boolean flag to globally enable or disable authentication.

* **STARTER_LENGHT_HISTORY**: Stores the initial length of the browser's history stack. Useful for tracking navigation changes or redirects. This property is responsible for disabling or enabling redirects component.

*  **DEFAULT_AUTHORIZATION_TOKEN**:  It is a function that returns a string for use in the base service as default authorization token.

``` sh
const AUTH = {
  AUTHORIZE_NOT_REQUIRED: [
    "/login",
    "/signup",
  ],
  DISABLE_AUTH: true,
  STARTER_LENGHT_HISTORY: window.history.length,
  DEFAULT_AUTHORIZATION_TOKEN:  () =>  `Bearer ${Cookies.get("token")}`
}

export {
  AUTH
}
```

### Recomendations

It is possible to use other configuration files, such as routes or user types, but, unlike the settings already mentioned, they have no implication on the operation of the lib, but it is good practice.

##  HTTP Requests

For the HTTP requests, it is recommended using Base Service class, this class is a mediatior with http requests, your requests are made with axios library. For default the authorization token and configs are made in constructor class, but, they can customized  in super constructor of class heiress.


``` sh
 class abstract BaseService {
    protected privateToken: string
    protected axios: Axios
    protected config: () => AxiosRequestConfig

    constructor(config?: AxiosRequestConfig, token?: any) {
        this.axios = axios
        this.privateToken = token;
        this.config = () => {
            return config ?? {
                headers: {
                    Authorization: this.privateToken ?? AUTH.DEFAULT_AUTHORIZATION_TOKEN()
                }
            }
        }
    }
  ...
```

Example for the custom config:

``` sh
class LoginService extends BaseService {

  constructor() {
    super({
      headers:{
        Authorization:"..."
      }
    })
  }
...
```

##  Components

##  Authentication
