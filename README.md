### telemtry micro service

#### install modules

```
npm install
```

#### start the poller service in one terminal
```
node poll.js
```

#### start the render service in another window
```
node render.js
```

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

#### login to your grafana instance

admin/admin
http://localhost:3000

and add graphite as a data source

http://localhost
