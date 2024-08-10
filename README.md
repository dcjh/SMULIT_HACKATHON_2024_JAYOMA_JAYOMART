# Jayomart

Jayomart is a marketplace website built using the MERN stack (MongoDB, Express.js, React, Node.js) that enables the secure and transparent buying and selling of CSV data. By leveraging blockchain technology through the Internet Computer Protocol (ICP) and decentralized storage via IPFS, Jayomart ensures that all transactions and data storage are secure, transparent, and decentralized.

![img1](https://github.com/dcjh/SMULIT_HACKATHON_2024_JAYOMA_JAYOMART/blob/main/images_readme/1.jpg)
![img2](https://github.com/dcjh/SMULIT_HACKATHON_2024_JAYOMA_JAYOMART/blob/main/images_readme/2.jpg)
![img3](https://github.com/dcjh/SMULIT_HACKATHON_2024_JAYOMA_JAYOMART/blob/main/images_readme/3.jpg)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Blockchain Security**: ICP blockchain technology ensures that all transactions are secure, transparent, and immutable.
- **Decentralized Storage**: CSV data files are stored using IPFS, providing decentralized and reliable storage.
- **User-Friendly Interface**: A seamless and intuitive user experience powered by React.
- **Data Marketplace**: Users can securely buy and sell CSV data, with all transactions recorded on the blockchain.
- **Real-Time Data Updates**: Ensures data availability and pricing are always up to date.

## Tech Stack

Jayomart is built using the following technologies:

- **MongoDB**: For database management and storage.
- **Express.js**: For handling server-side operations.
- **React**: For building the front-end user interface.
- **Node.js**: As the server-side runtime environment.
- **Internet Computer Protocol (ICP)**: Integrated blockchain technology for secure and transparent transactions.
- **IPFS (InterPlanetary File System)**: Decentralized storage solution for CSV data files.

## Installation

To get started with Jayomart, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/dcjh/SMULIT_HACKATHON_2024_JAYOMA_BLOCKCHAIN_DATA_MART.git
    ```

2. Navigate to the project directory:
    ```bash
    cd jayomart
    ```

3. Install the server dependencies:
    ```bash
    cd server
    npm install
    ```

4. Install the client dependencies:
    ```bash
    cd ../client
    npm install
    ```

5. Create a `.env` file in the server directory and add your environment variables (e.g., MongoDB URI, ICP API keys, IPFS configuration, etc.).

6. Start the development server:
    ```bash
    cd ../server
    npm run dev
    ```

7. Start the client:
    ```bash
    cd ../client
    npm start
    ```

## Usage

- **Buying CSV Data**: Browse and purchase available CSV data files securely using ICP cryptocurrency.
- **Selling CSV Data**: List your CSV data files for sale, with all transactions recorded on the ICP blockchain and data stored on IPFS.

## API Endpoints

Jayomart provides several API endpoints for interacting with the platform. Below are some key endpoints:

- **User Authentication**
  - `POST /api/auth/register`: Register a new user
  - `POST /api/auth/login`: Log in an existing user

- **Data Management**
  - `GET /api/data`: Fetch all available data sets
  - `POST /api/data`: Upload a new data set for sale

- **Transactions**
  - `POST /api/transactions/buy`: Purchase a data set

(Additional API endpoints can be documented here)

## Contributing

We welcome contributions to Jayomart! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or issues, feel free to reach out:

- **GitHub**: [dcjh](https://github.com/dcjh)

