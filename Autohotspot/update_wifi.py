from subprocess import call
import sys
import time

ssid = sys.argv[1] + " "
pswd = sys.argv[2]

print (ssid + pswd)
call(["sudo", "bash", "/home/pi/nextGW/Autohotspot/update_wifi.sh", ssid, pswd])
time.sleep(2)
call(["sudo", "bash", "/home/pi/Autohotspot/force.sh"])
