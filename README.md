//Backup db -> parados en el path a guardar.
"mongodump --db intratec" 

//Restore db -> parados en el path donde está la carpeta dump.
"mongorestore --db intratec dump/intratec"
