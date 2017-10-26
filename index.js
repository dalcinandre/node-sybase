const asa = require('sqlanywhere')

const con = asa.createConnection()

const params = {
  Server: 'ciss_server',
  Host: 'dcx:2639',
  UserId: 'DBA',
  Password: 'overhead'
}

con.connect( params, ( err ) => {
  if ( err ) throw  err

  con.exec('select * from notas', ( err, rows ) => {
    if ( err ) throw  err

    console.log( rows )
    conn.disconnect()
  } )
} )
