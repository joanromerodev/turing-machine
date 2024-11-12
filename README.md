# Turing Machine Simulator

This project is a Turing Machine simulator built with React. It visualizes the step-by-step execution of a Turing Machine, interpreting binary input, transitioning between states, and providing a detailed look into machine logic.

## Description

The Turing Machine Simulator allows users to visualize how a Turing Machine processes binary data according to configurable rules. It includes key components to display and modify the tape and program states, alongside explanations of the primary concepts.

## Technologies

- **Frontend:** React, Vite, TailwindCSS, Framer Motion, React Icons, React Slick
- **Additional Libraries:** react-toastify (notifications), slick-carousel (for slides), and TailwindCSS for styles.

## Components

- **Layout**: Manages the layout and style for the header, footer, and overall structure.
- **SliderTape**: Implements the tape component using react-slick, managing the slide settings like speed, timing, etc.
- **Instructions**: Provides an overview of usage, machine program (state transitions), and translation (mapping binary values to characters or symbols).

## Main Configuration Files

1. `program.json`: Contains settings for machine states, transitions, display information, and translations.

- Sample:

```json
{
  "states": [
    {
      "name": "A",
      "rules": [
        {
          "key": "empty",
          "value": "moveRight",
          "nextState": "B"
        }
      ]
    }
  ],
  "statesConfig": {
    "display": [
      {
        "key": "moveRight",
        "text": ["Move to the right", "Change to"]
      }
    ]
  },
  "translation": [{ "binary": "00001", "translated": "A" }]
}
```

2. `tape.json`: Defines the initial tape array for the Turing Machine to process.

- Sample:

```json
["01010", "10000", "00001", "01110"]
```

## Usage

1. **Run the App**:

```bash
npm install
npm run dev
```

Navigate to the app's URL provided by Vite.

2. **Basic Functionality**:

- **Start** the Machine: Click Start to initiate the Turing Machine.
- **Stop**: It'll stop as soon as it reaches the end of the tape.json array.

## Editing Machine Configurations

- To modify the machine's states and transitions, edit program.json.
- For adjusting the tape input, update tape.json with your desired binary sequences.

## Installation

1. **Clone Repository**:

```bash
git clone <repo-url>
cd turing-machine-simulator
```

2. **Install Dependencies**:

```bash
npm install
```

3. **Run the application**:

```bash
npm run dev
```

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
