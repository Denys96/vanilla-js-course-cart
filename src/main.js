import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { getCourses } from './list_courses';
import { addCourse, deleteCourse } from './cart';

document.addEventListener('DOMContentLoaded',() => {
    getCourses();

    
    // agregar un evento de escucha para agregar un elemento al carrito
    document.querySelector('#list-courses').addEventListener('click', addCourse);

    //agregando un evento para eliminar un curso
    document.querySelector('#list-cart').addEventListener('click', deleteCourse)
}) 

