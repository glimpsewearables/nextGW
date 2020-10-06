import sys
import subprocess
subprocess.call(["nmcli", "dev", "wifi", "rescan"])
out = subprocess.check_output(["nmcli", "-t", "-f", "SSID", "dev", "wifi"])

print out
	

		

sys.stdout.flush()
