#!/bin/bash

# rm -rf www
# ionic cordova platform rm ios
# ionic cordova platform rm android
# ionic cordova platform rm browser

# ionic cordova plugin rm cordova-plugin-splashscreen
# ionic cordova plugin rm cordova-plugin-statusbar
# ionic cordova plugin rm cordova-plugin-whitelist

# rm -rf platform/*

# ionic cordova platform add ios@latest
# ionic cordova platform add android@latest
ionic cordova platform add browser@latest

ionic cordova plugin add cordova-plugin-splashscreen
ionic cordova plugin add cordova-plugin-statusbar
ionic cordova plugin add cordova-plugin-whitelist

# ionic cordova prepare ios --prod
# ionic cordova prepare android --prod
ionic cordova prepare browser --prod

#ionic cordova resources ios
#ionic cordova resources android

ionic build --prod --minifyjs --minifycss --optimizejs