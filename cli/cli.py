#!/usr/bin/python3

import argparse
import sys

from prog.main import main

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='NeuVector command line.')
    parser.add_argument('-d', '--debug', action="store_true", help='enable debug.')
    parser.add_argument('-s', '--server', help='controller IP address.')
    parser.add_argument('-p', '--port', type=int, help='controller port.')
    args = parser.parse_args()

    sys.argv = sys.argv[:1]

    sys.exit(main(args.debug, args.server, args.port))
