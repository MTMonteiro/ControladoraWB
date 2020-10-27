const ip="10.200.0.21" 
const oids=["1.3.6.1.2.1.25.2.3.1.6.131072", "1.3.6.1.2.1.25.2.3.1.5.131072"]

// eslint-disable-next-line
export default {

Get: async() => {

var snmp = require("net-snmp")

// var session = snmp.createSession ("10.200.0.21", "public");
var session = snmp.createSession (ip, "OnCorp*");
 
// var oids = oids
 var response;

session.get (oids, function (error, varbinds) {
    if (error) {
        console.error (error);
    } else {
        for (var i = 0; i < varbinds.length; i++)
            if (snmp.isVarbindError (varbinds[i]))
                console.error (snmp.varbindError (varbinds[i]))
            else{
                console.log (varbinds[i].oid + " = " + varbinds[i].value);
                response.pop(varbinds[i])
            }
    }
    session.close ();
});
 
session.trap (snmp.TrapType.LinkDown, function (error) {
    if (error)
        console.error (error);
});

return response
},
test: async () => {
    fetch("../file.json")
    .then(response => response.json())
    .then(json => console.log(json));
}

};
