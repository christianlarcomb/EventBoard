"""
Copyright (c) 2020 Christian C. Larcomb, Jonathan T. Ingram

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
        auth = OAuthHandler('[REDACTED]',
                            '[REDACTED]')
        auth.set_access_token('[REDACTED]',
                              '[REDACTED]')
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
    hash_tag_list = ["covid", "CoronaCrisis"]

    twitter_streamer = TwitterStreamer()
    twitter_streamer.stream_tweets(hash_tag_list)

