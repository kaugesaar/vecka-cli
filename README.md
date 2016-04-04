# vecka-cli

Som vecka.nu fast i terminal

```
$ npm install vecka-cli -g
```

### usage example

```
$ vecka
11
```

``vecka`` followed by a **number (week)** gives you the date range of that week for current year:

```
$ vecka 11
Mon Mar 14 2016 - Sun Mar 20 2016
```

``vecka`` followed by a *date* returns week of that date.

```
$ vecka 2016-03-14
11
```
