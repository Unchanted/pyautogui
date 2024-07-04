from fastapi import FastAPI, WebSocket
from fastapi.staticfiles import StaticFiles

import pyautogui

app = FastAPI()

angles = {
    0: 'right',
    90: 'up',
    180: 'left',
    270: 'down',
    -1: None
}

speed = None
direction = None

def press_speed(angle, amount):
    global speed
    if angle == None or amount <= 20:
        if speed is not None:
            pyautogui.keyUp(speed)
            speed = None
    elif angle != speed and speed is not None:
        pyautogui.keyUp(speed)
        pyautogui.keyDown(angle)
        speed = angle
    elif speed is None:
        pyautogui.keyDown(angle)
        speed = angle

def press_direction(angle, amount):
    global direction
    if angle == None or amount <= 20:
        if direction is not None:
            pyautogui.keyUp(direction)
            direction = None
    elif angle != direction and direction is not None:
        pyautogui.keyUp(direction)
        pyautogui.keyDown(angle)
        direction = angle
    elif direction is None:
        pyautogui.keyDown(angle)
        direction = angle



@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        control, angle, amount = data.split('_')
        angle = angles[int(angle)]
        amount = float(amount)

        print(control, angle, amount)
        
        if control == 'speed':
            press_speed(angle, amount)
        elif control == 'direction':
            press_direction(angle, amount)
        


app.mount("/", StaticFiles(directory="static",html = True), name="static")
