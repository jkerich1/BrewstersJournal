import sys
import datetime
import time
import bluetooth._bluetooth as bluez
from ISStreamer.Streamer import Streamer
import blescan


TILTS = {
'a495bb10c5b14b44b5121370f02d74de': 'Red',
'a495bb20c5b14b44b5121370f02d74de': 'Green',
'a495bb30c5b14b44b5121370f02d74de': 'Black',
'a495bb40c5b14b44b5121370f02d74de': 'Purple',
'a495bb50c5b14b44b5121370f02d74de': 'Orange',
'a495bb60c5b14b44b5121370f02d74de': 'Blue',
'a495bb70c5b14b44b5121370f02d74de': 'Yellow',
'a495bb80c5b14b44b5121370f02d74de': 'Pink',
}

##file = open('/home/pi/asd.txt', 'w')
##file.write("HERE\n" + str(datetime.datetime.now()))
##file.close()

###added here for flask 5/12/21



def distinct(objects):
   seen = set()
   unique = []
   for obj in objects:
      if obj['uuid'] not in seen:
          unique.append(obj)
          seen.add(obj['uuid'])
   return unique

def to_celsius(fahrenheit):
   return round((fahrenheit - 32.0) / 1.8, 2)

def monitor_tilt():
    streamer = Streamer(bucket_name="Boiling", bucket_key="HG9YAAUM5DX4", access_key="ist_QX41bivamY4BhpNUbQwSIfuePaW23bGb")
    temperature_buffer = []
    gravity_buffer = []
    while True:      
     beacons = distinct(blescan.parse_events(sock, 100))
     for beacon in beacons:
         print(temperature_buffer)
         print(gravity_buffer)
          
         if beacon['uuid'] in TILTS.keys():
           temperature_buffer.append(beacon['major'])
           gravity_buffer.append(beacon['minor'])
         if len(temperature_buffer) >= 1:
           print("f")
           temperature_average = round(float(sum(temperature_buffer))/float(len(temperature_buffer)),3)
           gravity_average = round(float(sum(gravity_buffer))/1000*float(len(gravity_buffer)),3)
           print ("Temp Avg:")
           print (temperature_average)
           print ("Gravity Avg:")
           print (gravity_average)
           streamer.log("Temperature", temperature_average)
           streamer.log("Gravity", gravity_average)
           del temperature_buffer[:]
           del gravity_buffer[:]
     time.sleep(1)

##def main():

if __name__ == '__main__':
   dev_id = 0
   try:
      sock = bluez.hci_open_dev(dev_id)
      print('Starting pytilt logger')
          
   except:
      print('error accessing bluetooth device...')
      sys.exit(1)
   blescan.hci_le_set_scan_parameters(sock)
   blescan.hci_enable_le_scan(sock)
   monitor_tilt()
   