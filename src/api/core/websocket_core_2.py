import asyncio
import json
import logging
import websockets

logging.basicConfig()

STATE = {"value": 0}
CONNECTION_FLAGS = ["[REG: FE]", "[REG: TS]", "[TS: INC]", "[TS: OUT]", "[FE: INC]", "[FE: OUT]"]


USERS = set()

async def handler(websocket, path):
    # Register.
    USERS.add(websocket)
    try:
        # Implement logic here.
        await asyncio.wait([ws.send("Hello!") for ws in USERS])
        await asyncio.sleep(10)
    finally:
        # Unregister.
        USERS.remove(websocket)


start_server = websockets.serve(handler, "0.0.0.0", 8080)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

