import subprocess
import sys
import time

ssid = sys.argv[1]
pswd = sys.argv[2]

print (ssid + pswd)
subprocess.call(["pkill", "-f", "autoNmcli.py"])


subprocess.call(["nmcli", "dev", "wifi", "connect", ssid, "password", pswd])
time.sleep(3)
subprocess.call(["autoNmcli.py"])

