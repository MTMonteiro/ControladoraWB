#!/usr/bin/python3

import os
import re 
import json

array = []
mib="1.3.6.1.4.1.14988.1.1.1.2.1.1"
com="OnCorp*"
# awk = "awk -F: '{print$2}'"
awk = "awk -F = '{print$2}' | awk -F: '{print$2}'"
ip="10.200.0.24"

with open('./mkt.txt') as arquivo:
    IPs = arquivo.readlines()


for ip in IPs:
    ip = ip.rstrip("\n")
    macsList = os.popen(f"snmpwalk -c {com} -v 2c {ip} {mib} | {awk} ").read()


    def hexToDecimal(srex):
        result = []
        for i in srex:
            result.append(str(int(i, 16)))
            
        return ".".join(tuple(result))


    for mac in macsList.splitlines():
        d = {} # limpar dados
        if macsList.splitlines() != ['']:
            macDecimal = re.findall("[0-9a-fA-F][0-9a-fA-F]", mac) #cada hex em uma lista
            
            potencia_oid = f"1.3.6.1.4.1.14988.1.1.1.2.1.3.{hexToDecimal(macDecimal)}.1"
            potencia = os.popen(f"snmpwalk -c {com} -v 2c {ip} {potencia_oid} | {awk} ").read()
            potencia = potencia.rstrip("\n")
            d = {"mac": mac, "ap": ip, "potencia": potencia}

            array.append(d)


print(array)

with open("./test.json", "w+") as result:
    json.dump(array, result, indent=4)


# get sinal
#1.3.6.1.4.1.14988.1.1.1.2.1.3.{64.6.160.133.154.85}.1