import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.photo-card a', {
    //для вывода описания картинки внизу самой картинки при открытии ее в большом формате (в дз нет)
//   captions: true,
//   captionsData: 'alt',
//   captionDelay: 250,
});

export { lightbox };