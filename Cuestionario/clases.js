class smatrphone {
    constructor(name, price, camera, size,battery){
        this.name = name
        this.price = price
        this.camera = camera
        this.size = size
        this.battery = battery
    }

    prender(){
        console.log('Estoy bien prendido')
    }
    apagar(){
        console.log('Ya me morí')
    }
    llamar(){
        console.log('Hola, ¿Como estas?')
    }
}
class altaGama extends smatrphone{
    constructor(name,price,camera,size,battery,faceID,h_definition,s_camera){
        super(name,price,camera,size,battery)
        this.faceID = faceID
        this.h_definition = h_definition
        this.s_camera = s_camera
    }
    desbloquear_con_la_cara(){
        console.log('Escaneando cara...')
    }
    tomar_super_foto(){
        console.log('Activando super camara...')
    }
    carga_magnetica(){
        console.log('Descansando en mi cama magnetica')
    }
    reproducir_videos_4k(){
        console.log('Estamos viendo videos en 4k')
    }
}
class gamaMedia extends smatrphone{
    constructor(name,price,camera,size,battery,fingerprint,m_definition){
        super(name,price,camera,size,battery)
        this.fingerprint = fingerprint
        this.m_definition = m_definition
    }
    reproducir_videos_HD(){
        console.log('Estamos viendo videos en HD')
    }
    cargar_con_cable(){
        console.log('Me estoy cargando con cable')
    }
    desbloquear_con_huella(){
        console.log('Escaneando dedo...')
    }
}

const micelular = new gamaMedia('Xperiaxz',4000,1,'Normal', '2000mA',3, 'HD')
const celulardealguienmas = new altaGama('Samsumg S plus ultra', 20000, 1, 'XL','5000mA','Mi cara','4k',2)

console.log(micelular)
console.log(celulardealguienmas)