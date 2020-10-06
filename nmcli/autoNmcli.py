import subprocess
import time

i = 0
while(i == 0):
	status = subprocess.check_output(["nmcli", "networking", "connectivity"])	
	status = status[0:4]
	print status
	if status == 'none':
		print "spinning up hotspot"
		subprocess.call(["nmcli", "con", "up", "Hotspot"])
		time.sleep(5)
	time.sleep(1)
