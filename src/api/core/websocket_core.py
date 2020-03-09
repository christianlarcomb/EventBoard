"""
Copyright © 2020 Christian Chase Larcomb. christianlarcomb@gmail.com. All Rights Reserved

DEFINITIONS

	a. Licensor means the individual(s) or entity(ies) granting rights under this Copyright License.

CONFIDENTIAL
This document contains trade secrets or otherwise confidential information owned by the Licensor.
Access to and use of this information is strictly limited and controlled by the Licensor.
This document may not be copied, distributed, or otherwise disclosed outside of the Licensor's
facilities except under appropriate precautions to maintain the confidentiality hereof,
and may not be used in any way not expressly authorized by the Licensor.
"""

import asyncio
import websockets


class WebSocketEngine:

    def __init__(self):
        self.CONNECTION_FLAGS = ["[REG: FE]",
                                 "[REG: TS]",
                                 "[TS: INC]",
                                 "[TS: OUT]"
                                 "[FE: INC]",
                                 "[FE: OUT]"]
        self.open_sockets = [None]

    async def msg_mngr(self, websocket, path):                              # Responsible for processing incoming and outgoing messages

        msg = await websocket.recv()                                        # Message from front-end saying connection is established
        print("Incoming Message: " + msg)                                   # Debugging incoming messages

        print("MESSAGE SPLIT: " + msg[:9])                                  # verifying the split

        if msg[:9] == self.CONNECTION_FLAGS[0]:                             # FRONT-END flag check.
            print("Front-End Registered with Flag: " + msg)                 # Output message received from front-end to console
            self.open_sockets = [websocket]

        elif msg[:9] == self.CONNECTION_FLAGS[2]:                           # INCOMING-TWEET flag check. ([TS_INC])
            if not self.open_sockets[0]:
                print("Incoming Tweet Object: " + msg)                      # Output message received from front-end to console
                await self.open_sockets[0].send("")
            else:
                print("ERROR: Front-End WebSocket unavailable.")

    def launch_engine(self):
        start_server = websockets.serve(self.msg_mngr, "localhost", 8080)   # Creates server instance object
        asyncio.get_event_loop().run_until_complete(start_server)           # Specifying to run it until complete
        asyncio.get_event_loop().run_forever()                              # Infinite Loop


if __name__ == '__main__':                                                  # Core asynchronous call

    websocketEngine = WebSocketEngine()
    websocketEngine.launch_engine()