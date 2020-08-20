import subprocess
import sys

ssid = sys.argv[1] + " "
pswd = sys.argv[2]

print (ssid + pswd)
call.(["sudo", "bash", "/home/pi/nextGW/Autohotspot/update_wifi.sh", ssid, pswd])
