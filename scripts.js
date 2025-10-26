const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];
//1)GALLERY: No interactúa con HTML
class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages= civilImages;
        this.militaryImages= militaryImages;
    };
    
    getRandomCivil() {
        const index = Math.floor(Math.random() * this.civilImages.length);
        return this.civilImages[index];
    };
    
    getRandomMilitary() {
        const index = Math.floor(Math.random()*this.militaryImages.length);
        return this.militaryImages[index];
    };
    
    getAll() {//tomar todos los elementos de civilImages y militaryImages y combinarlos en un solo array --->spread operator
        return [...this.civilImages, ...this.civilImages];
    };
};
//2)PAINTER : pintar las imágenes
class Painter {
    constructor() {
        this.createGallery()
    }

    createGallery() {
        this.gallery = document.createElement("section");//propiedad gallery + creación de section
        document.body.appendChild(this.gallery);
    }

    createImageTag(imageUrl) {
        const picture = document.createElement("picture");//<picture>

        const img = document.createElement("img");//<img> + url
        img.src = imageUrl;

        picture.appendChild(img);
        return  picture
    }

    paintSingleImage(imageUrl) {
        const picture = this.createImageTag(imageUrl);//imagen de createImagenTag
        this.gallery.appendChild(picture);//se añade a Gallery
    }
    //Recibe un array de URLs --->Para cada url crea una picture y la añade a la gallery (usando tdos los mertodos anteriores)
    paintMultipleImages(arrayOfImages) {
        arrayOfImages.forEach(imageUrl => this.paintSingleImage(imageUrl));
    };
    
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();