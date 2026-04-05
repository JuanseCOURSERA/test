// let userRole = "admin";
// let accessLevel;

// if(userRole === "admin"){
//     accessLevel = 'Full access granted';
// } else if (userRole === "manager"){
//     accessLevel = 'Limited access granted';
// } else {
//     accessLevel = 'No access granted';
// }

// console.log("Access Level: ", accessLevel);

// let isLoggedIn = true;
// let userMessage;

// if(isLoggedIn){
//     if(userRole === 'admin'){
//         userMessage = 'Welcome, Admin!';
//     } else{
//         userMessage = 'Welcome, User!';
//     }
// } else{
//     userMessage = 'Please log in to access the system.';
// }

// console.log("User message: ", userMessage);

// let userType = 'subscriber';
// let userCategory;

// switch (userType) {
//     case 'admin':
//         userCategory = 'Administrador';
//         break;
//     case 'manager':
//         userCategory = 'Manager';
//         break;
//     case 'subscriber':
//         userCategory = 'Subscriber';
//         break;
//     default:
//         userCategory = 'Unknown';
// }

// console.log("User Category: ", userCategory);

// let isAuthenticated = true;
// let autheticationStatus = isAuthenticated ? 'Authenticated' : 'Not authenticated';

// console.log('Authentication Status: ', autheticationStatus);

//TASK:

let rol = prompt("Que rol eres?").toLocaleLowerCase().trimStart().trimEnd();
let autorizacion;


switch (rol) {
    case 'empleado':
        autorizacion = 'Tienes acceso a los Servicios Dieteticos';
        break;
    case 'miembro inscrito':
        autorizacion = 'Tienes acceso a los Servicios Dieteticos y a interaccion uno a uno con un dietista';
        break;
    case 'suscriptor':
        autorizacion = 'Tienes acceso parcial para facilitar los Servicios Dieteticos unicamente';
        break;
    default:
        autorizacion = 'Necesitas inscribirte o al menos suscribirte primero para poder acceder a esta instalacion';
}

console.log('Autorizacion actual: ', autorizacion);