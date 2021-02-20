import Swal from 'sweetalert2'
import axios from 'axios'



export const Alert = (icon,title,msg) =>{

    Swal.fire({
        icon:icon,
        title:title,
        text:msg,
    })

}