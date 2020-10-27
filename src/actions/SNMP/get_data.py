#!/usr/bin/python3

import sys, json
# sys.path.append('/opt/fusion/core/media/scripts')
from lib_snmp import snmp_get
from tqdm import tqdm
from datetime import datetime


time = datetime.now().strftime('%d/%m/%Y %H:%M')
hora = datetime.now().strftime('%H:%M:%S')

with open('./mkt.txt') as arquivo:
    lines = arquivo.readlines()

with open("../../data/file.json", "r+") as result:
    d = json.load(result)

nlines = len(lines)
loop = tqdm(total=nlines, position=0, leave=False)

d["up"] = 0
d["down"] = 0

for ip in lines:
    ip = ip.rstrip("\n")
    rps = snmp_get(ip, '1.3.6.1.2.1.25.2.3.1.6.131072')
    if rps != 'offline':
        try:
            d[ip]['memoria_usada'] = snmp_get(ip, "1.3.6.1.2.1.25.2.3.1.6.131072")
            d[ip]['usuarios'] = snmp_get(ip, "1.3.6.1.4.1.14988.1.1.1.3.1.6.1")
            d[ip]["Lusuarios"].append(d[ip]['usuarios'])
            d['up'] += 1

        except:
            d[ip] = {}  
            d[ip]['memoria_usada'] = snmp_get(ip, "1.3.6.1.2.1.25.2.3.1.6.131072")
            d[ip]['usuarios'] = snmp_get(ip, "1.3.6.1.4.1.14988.1.1.1.3.1.6.1")
            d[ip]["Lusuarios"].append(d[ip]['usuarios'])
            d['up'] += 1

    else:
            d['down'] += 1
            d[ip]["Lusuarios"].append(0)

    d[ip]['time'] = time
    
    loop.set_description(f'Coletando dados...{ip}')
    loop.update(1)
    
d["label1"].append(hora)
d["tx"] = int(int(snmp_get("179.97.49.101", "1.3.6.1.2.1.2.2.1.16.12"))/1048576)
print(d)
#result.seek(0)

with open("../../data/file.json", "w+") as result:
    json.dump(d, result, indent=4)

print("dados coletados")


"""
iso.3.6.1.2.1.17.4.3.1.1.64.6.160.133.154.85 = Hex-STRING: 40 06 A0 85 9A 55 
iso.3.6.1.2.1.17.7.1.2.2.1.1.0.64.6.160.133.154.85 = Hex-STRING: 40 06 A0 85 9A 55 
"""