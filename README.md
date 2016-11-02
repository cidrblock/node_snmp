### telemtry micro service

#### install modules

`npm install`

#### start the poller service in one terminal
`node poll.js`

#### start the render service in another window
`node render.js`

#### Start graphite

```
docker run -d --name graphite --restart=always -p 80:80 -p 2003-2004:2003-2004 -p 2023-2024:2023-2024 -p 8125:8125/udp -p 8126:8126 hopsoft/graphite-statsd
```

#### Start grafana

```
docker run -i -p 3000:3000 grafana/grafana
```



#### modify and post some json

```
while true
do
  curl -s -H "Content-Type: application/json" --data @examples/ifXTable.json http://localhost:8080/poll
  sleep 30
done
```
or

```
while true
do
  curl -s -H "Content-Type: application/json" --data @examples/ifTable.json http://localhost:8080/poll
  sleep 30
done
```

#### login to you grafana instance

admin/admin
http://localhost:3000

and add graphite as a data source

http://localhost
```
[nodemon] starting `node render.js`

[ 'someMetricPrefix.router1.Vlan1.ifHCInOctets 0',
  'someMetricPrefix.router1.Vlan99.ifHCInOctets 4210199460',
  'someMetricPrefix.router1.Vlan2199.ifHCInOctets 503955557797',
  'someMetricPrefix.router1.Vlan2299.ifHCInOctets 3972181765',
  'someMetricPrefix.router1.Vlan2399.ifHCInOctets 13918348367',
  'someMetricPrefix.router1.Vlan2499.ifHCInOctets 36339537749',
  'someMetricPrefix.router1.Vlan2599.ifHCInOctets 3191027310',
  'someMetricPrefix.router1.Vlan2699.ifHCInOctets 40443024462',
  'someMetricPrefix.router1.Vlan2799.ifHCInOctets 408550747495',
  'someMetricPrefix.router1.Vlan2899.ifHCInOctets 6045642525',
  'someMetricPrefix.router1.Vlan2999.ifHCInOctets 493575056',
  'someMetricPrefix.router1.Vlan3199.ifHCInOctets 3200160664',
  'someMetricPrefix.router1.Vlan3299.ifHCInOctets 3192494686',
  'someMetricPrefix.router1.Vlan3399.ifHCInOctets 3204558707',
  'someMetricPrefix.router1.Vlan3485.ifHCInOctets 6748076608',
  'someMetricPrefix.router1.Vlan3499.ifHCInOctets 55788730181',
  'someMetricPrefix.router1.Vlan3599.ifHCInOctets 3198794248',
  'someMetricPrefix.router1.Vlan3699.ifHCInOctets 8732123781488',
  'someMetricPrefix.router1.loopback0.ifHCInOctets 267311839704',
  'someMetricPrefix.router1.Tunnel1.ifHCInOctets 0',
  'someMetricPrefix.router1.Ethernet3/1.ifHCInOctets 53518511648065',
  'someMetricPrefix.router1.Ethernet3/2.ifHCInOctets 9932774633803',
  'someMetricPrefix.router1.Ethernet3/3.ifHCInOctets 23653160237785',
  'someMetricPrefix.router1.Ethernet3/3.99.ifHCInOctets 555775600',
  'someMetricPrefix.router1.Ethernet3/4.ifHCInOctets 146308056',
  'someMetricPrefix.router1.Ethernet3/5.ifHCInOctets 146308032',
  'someMetricPrefix.router1.Ethernet3/6.ifHCInOctets 146308032',
  'someMetricPrefix.router1.Ethernet3/7.ifHCInOctets 146308032',
  'someMetricPrefix.router1.Ethernet3/8.ifHCInOctets 1512264101',
  'someMetricPrefix.router1.Ethernet3/8.99.ifHCInOctets 1041463340',
  'someMetricPrefix.router1.Ethernet3/8.100.ifHCInOctets 139556460',
  'someMetricPrefix.router1.Ethernet4/1.ifHCInOctets 146308032',
  'someMetricPrefix.router1.Ethernet4/2.ifHCInOctets 146308032',
  'someMetricPrefix.router1.Ethernet4/3.ifHCInOctets 146308032',
  'someMetricPrefix.router1.Ethernet4/4.ifHCInOctets 146308032',
  'someMetricPrefix.router1.Ethernet4/5.ifHCInOctets 146305536',
  'someMetricPrefix.router1.Ethernet4/6.ifHCInOctets 146308032',
  'someMetricPrefix.router1.Ethernet4/7.ifHCInOctets 146308032',
  'someMetricPrefix.router1.Ethernet4/8.ifHCInOctets 146308032',
  'someMetricPrefix.router1.Vlan1.ifHCOutOctets 0',
  'someMetricPrefix.router1.Vlan99.ifHCOutOctets 485702834',
  'someMetricPrefix.router1.Vlan2199.ifHCOutOctets 5551678732565',
  'someMetricPrefix.router1.Vlan2299.ifHCOutOctets 67913363351',
  'someMetricPrefix.router1.Vlan2399.ifHCOutOctets 115166679025',
  'someMetricPrefix.router1.Vlan2499.ifHCOutOctets 134748832718',
  'someMetricPrefix.router1.Vlan2599.ifHCOutOctets 59106501045',
  'someMetricPrefix.router1.Vlan2699.ifHCOutOctets 613623839775',
  'someMetricPrefix.router1.Vlan2799.ifHCOutOctets 2255033104728',
  'someMetricPrefix.router1.Vlan2899.ifHCOutOctets 55614902529',
  'someMetricPrefix.router1.Vlan2999.ifHCOutOctets 0',
  'someMetricPrefix.router1.Vlan3199.ifHCOutOctets 59105727661',
  'someMetricPrefix.router1.Vlan3299.ifHCOutOctets 59138343064',
  'someMetricPrefix.router1.Vlan3399.ifHCOutOctets 59138263105',
  'someMetricPrefix.router1.Vlan3485.ifHCOutOctets 95473',
  'someMetricPrefix.router1.Vlan3499.ifHCOutOctets 1249246845082',
  'someMetricPrefix.router1.Vlan3599.ifHCOutOctets 59137940674',
  'someMetricPrefix.router1.Vlan3699.ifHCOutOctets 29362649335515',
  'someMetricPrefix.router1.loopback0.ifHCOutOctets 0',
  'someMetricPrefix.router1.Tunnel1.ifHCOutOctets 0',
  'someMetricPrefix.router1.Ethernet3/1.ifHCOutOctets 35623700908463',
  'someMetricPrefix.router1.Ethernet3/2.ifHCOutOctets 40004674874610',
  'someMetricPrefix.router1.Ethernet3/3.ifHCOutOctets 13586627745045',
  'someMetricPrefix.router1.Ethernet3/3.99.ifHCOutOctets 32910119',
  'someMetricPrefix.router1.Ethernet3/4.ifHCOutOctets 146308032',
  'someMetricPrefix.router1.Ethernet3/5.ifHCOutOctets 146308032',
  'someMetricPrefix.router1.Ethernet3/6.ifHCOutOctets 146308032',
  'someMetricPrefix.router1.Ethernet3/7.ifHCOutOctets 146308032',
  'someMetricPrefix.router1.Ethernet3/8.ifHCOutOctets 1508142658',
  'someMetricPrefix.router1.Ethernet3/8.99.ifHCOutOctets 518673079',
  'someMetricPrefix.router1.Ethernet3/8.100.ifHCOutOctets 0',
  'someMetricPrefix.router1.Ethernet4/1.ifHCOutOctets 146308032',
  'someMetricPrefix.router1.Ethernet4/2.ifHCOutOctets 146308032',
  'someMetricPrefix.router1.Ethernet4/3.ifHCOutOctets 146308032',
  'someMetricPrefix.router1.Ethernet4/4.ifHCOutOctets 146308032',
  'someMetricPrefix.router1.Ethernet4/5.ifHCOutOctets 146308032',
  'someMetricPrefix.router1.Ethernet4/6.ifHCOutOctets 146308032',
  'someMetricPrefix.router1.Ethernet4/7.ifHCOutOctets 146308032',
  'someMetricPrefix.router1.Ethernet4/8.ifHCOutOctets 146308032' ]


  [ 'someMetricPrefix.router1.Vlan1.ifAdminStatus 2',
    'someMetricPrefix.router1.Vlan99.ifAdminStatus 1',
    'someMetricPrefix.router1.Vlan2199.ifAdminStatus 1',
    'someMetricPrefix.router1.Vlan2299.ifAdminStatus 1',
    'someMetricPrefix.router1.Vlan2399.ifAdminStatus 1',
    'someMetricPrefix.router1.Vlan2499.ifAdminStatus 1',
    'someMetricPrefix.router1.Vlan2599.ifAdminStatus 1',
    'someMetricPrefix.router1.Vlan2699.ifAdminStatus 1',
    'someMetricPrefix.router1.Vlan2799.ifAdminStatus 1',
    'someMetricPrefix.router1.Vlan2899.ifAdminStatus 1',
    'someMetricPrefix.router1.Vlan2999.ifAdminStatus 1',
    'someMetricPrefix.router1.Vlan3199.ifAdminStatus 1',
    'someMetricPrefix.router1.Vlan3299.ifAdminStatus 1',
    'someMetricPrefix.router1.Vlan3399.ifAdminStatus 1',
    'someMetricPrefix.router1.Vlan3485.ifAdminStatus 1',
    'someMetricPrefix.router1.Vlan3499.ifAdminStatus 1',
    'someMetricPrefix.router1.Vlan3599.ifAdminStatus 1',
    'someMetricPrefix.router1.Vlan3699.ifAdminStatus 1',
    'someMetricPrefix.router1.loopback0.ifAdminStatus 1',
    'someMetricPrefix.router1.Tunnel1.ifAdminStatus 2',
    'someMetricPrefix.router1.Ethernet3/1.ifAdminStatus 1',
    'someMetricPrefix.router1.Ethernet3/2.ifAdminStatus 1',
    'someMetricPrefix.router1.Ethernet3/3.ifAdminStatus 1',
    'someMetricPrefix.router1.Ethernet3/3.99.ifAdminStatus 1',
    'someMetricPrefix.router1.Ethernet3/4.ifAdminStatus 2',
    'someMetricPrefix.router1.Ethernet3/5.ifAdminStatus 2',
    'someMetricPrefix.router1.Ethernet3/6.ifAdminStatus 2',
    'someMetricPrefix.router1.Ethernet3/7.ifAdminStatus 2',
    'someMetricPrefix.router1.Ethernet3/8.ifAdminStatus 1',
    'someMetricPrefix.router1.Ethernet3/8.99.ifAdminStatus 1',
    'someMetricPrefix.router1.Ethernet3/8.100.ifAdminStatus 1',
    'someMetricPrefix.router1.Ethernet4/1.ifAdminStatus 2',
    'someMetricPrefix.router1.Ethernet4/2.ifAdminStatus 2',
    'someMetricPrefix.router1.Ethernet4/3.ifAdminStatus 2',
    'someMetricPrefix.router1.Ethernet4/4.ifAdminStatus 2',
    'someMetricPrefix.router1.Ethernet4/5.ifAdminStatus 2',
    'someMetricPrefix.router1.Ethernet4/6.ifAdminStatus 2',
    'someMetricPrefix.router1.Ethernet4/7.ifAdminStatus 2',
    'someMetricPrefix.router1.Ethernet4/8.ifAdminStatus 2',
    'someMetricPrefix.router1.Vlan1.ifOperStatus 2',
    'someMetricPrefix.router1.Vlan99.ifOperStatus 1',
    'someMetricPrefix.router1.Vlan2199.ifOperStatus 1',
    'someMetricPrefix.router1.Vlan2299.ifOperStatus 1',
    'someMetricPrefix.router1.Vlan2399.ifOperStatus 1',
    'someMetricPrefix.router1.Vlan2499.ifOperStatus 1',
    'someMetricPrefix.router1.Vlan2599.ifOperStatus 1',
    'someMetricPrefix.router1.Vlan2699.ifOperStatus 1',
    'someMetricPrefix.router1.Vlan2799.ifOperStatus 1',
    'someMetricPrefix.router1.Vlan2899.ifOperStatus 1',
    'someMetricPrefix.router1.Vlan2999.ifOperStatus 1',
    'someMetricPrefix.router1.Vlan3199.ifOperStatus 1',
    'someMetricPrefix.router1.Vlan3299.ifOperStatus 1',
    'someMetricPrefix.router1.Vlan3399.ifOperStatus 1',
    'someMetricPrefix.router1.Vlan3485.ifOperStatus 1',
    'someMetricPrefix.router1.Vlan3499.ifOperStatus 1',
    'someMetricPrefix.router1.Vlan3599.ifOperStatus 1',
    'someMetricPrefix.router1.Vlan3699.ifOperStatus 1',
    'someMetricPrefix.router1.loopback0.ifOperStatus 1',
    'someMetricPrefix.router1.Tunnel1.ifOperStatus 2',
    'someMetricPrefix.router1.Ethernet3/1.ifOperStatus 1',
    'someMetricPrefix.router1.Ethernet3/2.ifOperStatus 1',
    'someMetricPrefix.router1.Ethernet3/3.ifOperStatus 1',
    'someMetricPrefix.router1.Ethernet3/3.99.ifOperStatus 1',
    'someMetricPrefix.router1.Ethernet3/4.ifOperStatus 2',
    'someMetricPrefix.router1.Ethernet3/5.ifOperStatus 2',
    'someMetricPrefix.router1.Ethernet3/6.ifOperStatus 2',
    'someMetricPrefix.router1.Ethernet3/7.ifOperStatus 2',
    'someMetricPrefix.router1.Ethernet3/8.ifOperStatus 1',
    'someMetricPrefix.router1.Ethernet3/8.99.ifOperStatus 1',
    'someMetricPrefix.router1.Ethernet3/8.100.ifOperStatus 1',
    'someMetricPrefix.router1.Ethernet4/1.ifOperStatus 2',
    'someMetricPrefix.router1.Ethernet4/2.ifOperStatus 2',
    'someMetricPrefix.router1.Ethernet4/3.ifOperStatus 2',
    'someMetricPrefix.router1.Ethernet4/4.ifOperStatus 2',
    'someMetricPrefix.router1.Ethernet4/5.ifOperStatus 2',
    'someMetricPrefix.router1.Ethernet4/6.ifOperStatus 2',
    'someMetricPrefix.router1.Ethernet4/7.ifOperStatus 2',
    'someMetricPrefix.router1.Ethernet4/8.ifOperStatus 2' ]
```
