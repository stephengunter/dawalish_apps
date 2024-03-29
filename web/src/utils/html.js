import { POST_TYPES } from '@/consts';
import { photoNameUrl } from './photo';

export const convertHtmlContent = (text, maxWidth) => {
   if(!text) return '';

   let result = text;

   result = convertUploadPhoto(result, maxWidth);

   return result;
}


const convertUploadPhoto = (text, maxWidth) => {
   let result = text;

   let matches = text.match(/<UPLOADPHOTO>(.*?)<\/UPLOADPHOTO>/g);
   if(!matches) return result;

   for(let i = 0; i < matches.length; i++) {
      let name = matches[i].replace(/<\/?UPLOADPHOTO>/g, '');
      if(!name) continue;

      let isEmoji = name.split('/')[0].toLowerCase() === POST_TYPES.EMOJI.toLowerCase();
      
      let photoUrl = photoNameUrl(name, maxWidth);
      
      //result = result.replace(matches[i], `<a href="#" style="display: block" onclick="event.preventDefault(); ${SHOW_PHOTO}(${id});">&#128247;查看圖片</a>`)
      result = isEmoji ? 
               result.replace(matches[i], `<img src="${photoUrl}" class="inline-emoji">`) :
               result.replace(matches[i], `<img src="${photoUrl}">`);
               
   }

   return result;
}