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

from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream
import websockets
import asyncio


# #########################################
# --- Twitter Streaming for EventBoard ---
# #########################################
CONNECTION_FLAGS = ["[TS: INC]",
                    "[TS: OUT]"]


async def send_data(data):                                            # Sends data to backend websocket
    uri = "ws://localhost:8080"                                       # Defining the uri
    async with websockets.connect(uri) as websocket:                  # Connecting to uri with alias
        await websocket.send(CONNECTION_FLAGS[0] + data)              # Sending data to backend with flag


class TwitterStreamer:                                                # Class for streaming & processing live tweets

    def stream_tweets(self, hash_tag_list):
        # This handles Twitter authetification and the connection to Twitter Streaming API
        listener = StdOutListener()
        auth = OAuthHandler('pPIMfguuHex6yVrkXvveQkT0x',
                            'OlZc7W4vbuwbjgd7lmlTgz0JgIUrLz2Ta48oBaJ6K9ntdU65He')
        auth.set_access_token('1234935237085401090-2slmPI6QKn3x6WPQK9GSYpTjKDvVgo',
                              'vFcg5GTtNj3JZxtAuEbjQ8FuuA3wXG5a13mFs3qu8rmUG')
        stream = Stream(auth, listener)
        stream.filter(track=hash_tag_list)


# # # # TWITTER STREAM LISTENER # # # #
class StdOutListener(StreamListener):
    """
    This is a basic listener that just prints received tweets to stdout.
    """

    def on_data(self, data):
        try:

            asyncio.get_event_loop().run_until_complete(send_data(data))
            print("this was reached")
            return True

        except BaseException as e:

            print("Error on_data %s" % str(e))

        return True

    def on_error(self, status):
        print('Error: ' + status)


if __name__ == '__main__':
    # Authenticate using config.py and connect to Twitter Streaming API.
    hash_tag_list = ["RCBCsteam"]

    twitter_streamer = TwitterStreamer()
    twitter_streamer.stream_tweets(hash_tag_list)

