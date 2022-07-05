IntraTec

//parados en el path a guardar.
Backup db
mongodump --db intratec
//parados en el path donde esta la carpeta dump.
Restore db
mongorestore --db intratec dump/intratec
