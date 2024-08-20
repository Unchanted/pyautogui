# pyautogui

This project is a React application developed using the Vite dev server. It allows you to trigger inputs on your computer from a mobile device using PyAutoGUI.

## Features

- **Remote Input Control**: Use your mobile device as a remote controller to send input commands to your computer.
- **PyAutoGUI Integration**: Utilizes PyAutoGUI to automate input commands on the computer.
- **Tailscale VPN**: Secure communication between your mobile device and computer over a VPN using Tailscale.

## Prerequisites

- **Vite**: Ensure you have Vite installed for running the development server.
- **PyAutoGUI**: Install PyAutoGUI on your computer to enable input automation.
- **Tailscale**: Install and configure Tailscale on both your computer and mobile device to set up a VPN.

## Setup

1. **Install Dependencies**: 
   - On your computer, navigate to the project directory and install the necessary npm packages:
     ```bash
     npm install
     ```

2. **Install PyAutoGUI**:
   - On your computer, install PyAutoGUI using pip:
     ```bash
     pip install pyautogui
     ```

3. **Setup Tailscale VPN**:
   - Install Tailscale on both your computer and mobile device.
   - Create a VPN using Tailscale and ensure that both devices join the same Tailnet.

4. **Run the Project**:
   - On your computer, start the Vite development server:
     ```bash
     npm run dev
     ```
   - Note the localhost URL provided by the Vite server (e.g., `http://localhost:3000`).

5. **Access the Application**:
   - On your mobile device, open a web browser and type the localhost URL provided by Vite.
   - Change the URL path to `/index1` (e.g., `http://localhost:3000/index1`).

6. **Control Your Computer**:
   - Now you can go to slowroads.io and try it out!!!!
