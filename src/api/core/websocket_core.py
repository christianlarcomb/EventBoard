"""
Copyright (c) 2020 Christian C. Larcomb

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, and distribute copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

Under no circumstances shall the Software be sublicensed, sold, and/or used for commerical purposes.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
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
