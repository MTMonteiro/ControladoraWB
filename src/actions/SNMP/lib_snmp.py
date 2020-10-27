from snmp_cmds import snmpget

def snmp_get(ip, mib):
    try:
        get = snmpget(community='OnCorp*',
                      ipaddress=ip,
                      oid=mib,
                      timeout=3)
        get = get.rstrip('\n')
    except:
        get = 'offline'
    return get