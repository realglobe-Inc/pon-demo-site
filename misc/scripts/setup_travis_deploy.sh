#!/bin/bash

 travis encrypt $(sugos-secrets get npm:token -r) --add deploy.api_key